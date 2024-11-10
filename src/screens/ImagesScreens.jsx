import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Box} from 'native-base';
import PlaceCard from '../components/PlaceCard';
import {IMAGE_RESIZE_MODE, SCREEN_PAADING} from '../../utils';
import {API_KEY, BASE_URL, ENDPOINTS, QUERY_KEY} from '../requests/endpoints';
import axios from 'axios';
import {useInfiniteQuery} from '@tanstack/react-query';
import {FlashList} from '@shopify/flash-list';
const ImagesScreens = () => {
  const fetchPhotos = async params => {
    try {
      const response = await axios.get(`${BASE_URL}${ENDPOINTS.SEARCH}`, {
        params: {
          query: 'nature',
          client_id: API_KEY,
          per_page: 10,
          page: params?.pageParam,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  // Example usage

  const {
    error,
    isPending,
    data,
    isFetching,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isLoading,
  } = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: [QUERY_KEY.SEARCH],
    queryFn: fetchPhotos,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage?.length == 0 ? null : allPages?.length + 1;
      return nextPage;
    },
    staleTime: 1000 * 60,
  });
  const post = data ? data?.pages?.flatMap(page => page?.results) : [];

  if (isPending) {
    return (
      <Box
        shadow="1"
        bg="#f7f6fb"
        flex={1}
        alignItems={'center'}
        justifyContent={'center'}
        paddingX={SCREEN_PAADING.X}
        paddingY={SCREEN_PAADING.Y}>
        <ActivityIndicator size="small" color="#FFA100" />
      </Box>
    );
  }
  if (error) {
    return <Text>Something went wrong</Text>;
  }

  return (
    <Box
      shadow="1"
      bg="#f7f6fb"
      flex={1}
      paddingX={SCREEN_PAADING.X}
      paddingY={SCREEN_PAADING.Y}>
      <FlashList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 20,
            }}
          />
        )}
        onEndReachedThreshold={5}
        ListFooterComponent={
          (isFetching || isPending || isFetchingNextPage) && (
            <ActivityIndicator size="small" color="#FFA100" />
          )
        }
        onEndReached={() => {
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
        data={post}
        renderItem={({item}) => (
          <PlaceCard
          id={item?.id}
            title={item?.alt_description || 'No Title'}
            description={item?.description || 'No Description'}
            image={item?.urls?.regular} // Use the regular URL for the image
            resizeMode={IMAGE_RESIZE_MODE.COVER}
          />
        )}
        estimatedItemSize={200}
      />
    </Box>
  );
};

export default ImagesScreens;

const styles = StyleSheet.create({});

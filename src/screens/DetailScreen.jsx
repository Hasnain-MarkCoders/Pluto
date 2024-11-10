import { useNavigation, useRoute } from '@react-navigation/native'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Box, Button, ScrollView } from 'native-base'
import PlaceCard from '../components/PlaceCard'
import { IMAGE_RESIZE_MODE, SCREEN_PAADING } from '../../utils'
import { API_KEY, BASE_URL, ENDPOINTS, QUERY_KEY } from '../requests/endpoints'
import axios from 'axios'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { FlashList } from '@shopify/flash-list'
import { SCREEN_NAMES } from '../screenNames'
import Animated from 'react-native-reanimated'
import FastImage from 'react-native-fast-image'
const DetailScreen = () => {

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);
const resizeMode = IMAGE_RESIZE_MODE.COVER
    const route = useRoute()
    
    const id = route?.params?.id || "UCd78vfC8vU"
    const navigation = useNavigation()
    // const id = "UCd78vfC8vU"
        const fetchPhoto = async () => {
            try {
                const response = await axios.get(`${BASE_URL}${ENDPOINTS.PHOTO}/${id}`, {
                    params: {
                        client_id: API_KEY, 
                    },
                });
               return response.data
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        };
        
        // Example usage

    const {error,isPending,data,isFetching, hasNextPage, isFetchingNextPage,fetchNextPage, isLoading}= useQuery({
            queryKey: [QUERY_KEY.PHOTO],
            queryFn:fetchPhoto,
            staleTime:1000*60,
    })

    if(isPending){
        return<Box  shadow="1" bg="#f7f6fb" flex={1} alignItems={"center"} justifyContent={"center"} paddingX={SCREEN_PAADING.X} paddingY={SCREEN_PAADING.Y}>

<ActivityIndicator size="small" color="#FFA100" />

        </Box>
    }
    if(error){
        return <Text>Something went wrong</Text>
    }


  return (
      
      <Box  shadow="1" bg="#fff" flex={1} >
           <AnimatedFastImage
    style={{
      width: 150,
      borderRadius: 10,
      objectFit: 'cover',
      height: 170,
    }}
    source={{
      uri: data?.urls?.regular,
      priority: FastImage.priority.high,
    }}
    resizeMode={
      resizeMode == IMAGE_RESIZE_MODE.COVER
        ? FastImage.resizeMode.cover
        : FastImage.resizeMode.contain
    }
        />
        
    </Box>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})
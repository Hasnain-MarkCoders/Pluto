import {StyleSheet, Text,colorMode, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Box, Checkbox, HStack, Input, Radio} from 'native-base';
import {IMAGE_RESIZE_MODE} from '../../utils';
import Animated from 'react-native-reanimated';

const PlaceCard = ({
  numberOfLines = 2,
  ellipsizeMode = 'clip',
  title = '',
  description = '',
  image = '',
  resizeMode = '',
  id=""
}) => {
  const [value, setValue] = React.useState("one");
  return (
    <Box
      bg="background.light" _dark={{ bg: 'background.dark' }}
      borderRadius={10}
      overflow={'hidden'}
      flexDirection={'row'}
      gap={5}
      padding={4}>
        <TouchableOpacity style={{
          flex:1,
          flexDirection:'row',
          gap:20
        }}>

        <Animated.View
        sharedTransitionTag={id}
        >
                <FastImage
                  style={{
                    width: 150,
                    borderRadius: 10,
                    objectFit: 'cover',
                    height: 170,
                  }}
                  source={{
                    uri: image,
                    priority: FastImage.priority.high,
                  }}
                  resizeMode={
                    resizeMode == IMAGE_RESIZE_MODE.COVER
                      ? FastImage.resizeMode.cover
                      : FastImage.resizeMode.contain
                  }
                />
        </Animated.View>
      <Box flex={1}>
        <Text
          numberOfLines={numberOfLines}
          ellipsizeMode={ellipsizeMode}
          style={[styles.title]}>
          {title}
        </Text>
        <Text
          numberOfLines={numberOfLines}
          ellipsizeMode={ellipsizeMode}
          style={styles.description}>
          {description}
        </Text>
      </Box>
      </TouchableOpacity>

    </Box>
  );
};

export default PlaceCard;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    // color: '#000',
  },
  description: {
    fontSize: 20,
    fontWeight: '500',
    // color: '#909092',
  },
});

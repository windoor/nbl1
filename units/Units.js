import {
    Dimensions
  } from 'react-native';
  
var { width, height, scale } = Dimensions.get('window');

export default {
    width: width,
    height: height,
    scale: scale
};

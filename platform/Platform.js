import { Platform } from 'react-native';
 
export default {
    isIPhone: (Platform.OS == 'ios'),
    isAndroid: (Platform.OS == 'android')
};

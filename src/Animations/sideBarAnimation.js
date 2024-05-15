import { Animated, Dimensions } from "react-native";
const SCREEN_WIDTH = Dimensions.get("window").width;

export const ViewXPosition = new Animated.Value(0);
export const sideBarSlidingIn = () => {
  Animated.timing(ViewXPosition, {
    toValue: 0, // NO TRANSLATE
    duration: 500,
    useNativeDriver: true,
  }).start();
};

export const sideBarSlidingOut = () => {
  Animated.timing(ViewXPosition, {
    toValue: -(SCREEN_WIDTH * 0.7), // 0.7 COMES FROM THE WIDTH OF THE VIEW
    duration: 500,
    useNativeDriver: true,
  }).start();
};

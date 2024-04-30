import "react-native-gesture-handler";
import { Stack } from "expo-router";
import { useCallback, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen"
import { Image, View, Text, SafeAreaView, ScrollView } from "react-native";
import Login from "../components/login/login";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ScreenHeaderBtn } from "../components";
import { icons, images } from "../constants";
import Ionicons from "@expo/vector-icons/Ionicons";


SplashScreen.preventAutoHideAsync();
const Layout = () => {
    const [fontsloaded] = useFonts({
        "DMBold": require("../assets/fonts/DMSans-Bold.ttf"),
        "DMMedium": require("../assets/fonts/DMSans-Medium.ttf"),
        "DMRegular": require("../assets/fonts/DMSans-Regular.ttf")
    })
    const onLayoutRootView = useCallback(async () => {
        if (fontsloaded) {
            await SplashScreen.hideAsync()
        }
    }, [fontsloaded])


    if (!fontsloaded) return null;
   
    return (
        <Stack onLayout={onLayoutRootView} />
    )
}
export default Layout;
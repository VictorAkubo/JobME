import { View, Text, ScrollView, SafeAreaView, Image, StyleSheet, RefreshControl } from "react-native";
import { Stack, useRouter } from "expo-router";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn.jsx";
import { COLORS, icons, images, SIZES } from "../constants/index.js"
import Welcome from "../components/home/welcome/Welcome.jsx"
import Popular from "../components/home/popular/Popularjobs.jsx"
import NearByJobs from "../components/home/nearby/Nearbyjobs.jsx"
import { useEffect, useState } from "react";
import useFetch from "../hook/useFetch.js";
import Login from "../components/login/login";
import { auth,provider } from "../Api/firebaseConfig.js";
import NetInfoState from "@react-native-community/netinfo";
import {signInWithPopup} from "firebase/auth"
const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("")
    const [isConnected, setisConnected] = useState(false)

    const [refreshing, setRefreshing] = useState(false)
    const [onRefetched, setOnRefreshed] = useState(false)
    const [user, setUser] = useState(true)

    const onRefresh = () => {
        setOnRefreshed(true)
    }
    const onPress = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                /* const user = result.user; */
                setUser(true)
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    useEffect(() => {

        const unsub = NetInfoState.addEventListener(state => {
            setisConnected(state.isConnected)
        })
        return (() => {
            unsub();
        })
    }, [])
    if (user == false) {
        return (
            <SafeAreaView>
                <Stack.Screen
                    options={{
                        headerShown:false

                    }}
                />
                <Login onPress={onPress} />
            </SafeAreaView>
        )
    } 
    else {
        return (
            <SafeAreaView style={{ flex: 1, paddingLeft: 20, paddingRight: 20, backgroundColor: COLORS.lightWhite }}>
                <Stack.Screen
                    options={{
                        headerStyle: { backgroundColor: COLORS.lightWhite },
                        headerShadowVisible: false,
                        headerLeft: () => {
                            return <ScreenHeaderBtn 
                            iconurl={icons.menu} 
                            dimension="60%" 
                            handlePress={()=>router.push(`/profile/profile`)}

                            />
                        },
                        headerRight: () => {
                            return <ScreenHeaderBtn iconurl={images.profile} dimension="100%" />
                        },
                        headerTitle: ""

                    }}
                />
                <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} showsVerticalScrollIndicator={false}>
                    <View
                        style={{
                            flex: 1,
                            padding: 1 + "rem"
                        }}
                    >
                        <View>
                            <Text>{isConnected ? "Connected" : "Disconnected"}</Text>
                        </View>
                        <Welcome
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            handleClick={() => {
                                if (searchTerm) {
                                    router.push(`/search/${searchTerm}`)
                                }
                            }}

                        />
                        <Popular onRefreshed={onRefetched} />
                        <NearByJobs onRefreshed={onRefetched} />
                    </View>
                </ScrollView>
            </SafeAreaView>


        )
    }


}
export default Home;
const styles = StyleSheet.create({
    container: {
        padding: 0,
        margin: 0,
    }
})
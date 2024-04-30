import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { Stack, useRouter } from 'expo-router'
import images from '../../constants/images.js';
import { COLORS, SIZES } from '../../constants/theme.js';
import ScreenHeaderBtn from '../../components/common/header/ScreenHeaderBtn.jsx';
import icons from '../../constants/icons.js';
export default Profile = () => {
  const router = useRouter();
  const handlePress = () => {
    router.push("/about/about")
  }
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => {
            return <ScreenHeaderBtn
              iconurl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          },
          headerTitle: "Profile"

        }}
      />
      <View style={{ padding: 40 }}>
        <View style={styles.portion}>
          <View style={{}}>
            <TouchableOpacity style={styles.profilePic} onPress={handlePress}>
              <Image
                source={images.profile}
                resizeMode="cover"
                style={{ borderRadius: "60%", width: 50, height: 50 }}
              />
              <Text>Victor Ugbede</Text>
            </TouchableOpacity>
          </View>
          <Text>Victorugbede89@gmail.com</Text>
        </View>

        <View style={styles.portion}>
          <Text>Theme</Text>
          <TouchableOpacity onPress={() => router.push("/about/about")}>
            <Text>About US</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.portion}>
          <TouchableOpacity onPress={() => router.push("/help/help")}>
            <Text>Help center</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  profilePic: {
    display: "flex",
    backgroundColor: COLORS.white,

  },
  portion: {
    marginTop:15,
    paddingBottom:40,
    backgroundColor:COLORS.lightWhite,
    borderColor: "black",
    borderRadius: 9,
    alignContent: "flex-start",
    gap: 5,
    fontSize:20
  }
})


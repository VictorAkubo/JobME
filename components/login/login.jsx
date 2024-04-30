import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import "../../Api/firebaseConfig"


const Login = ({ onPress }) => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View
        style={styles.start}>
        <Image
          source={require('../../assets/loc.jpg')}
          style={styles.loginImage}
        />
        <View style={styles.subContainer}>

          <Text style={{ marginTop: 30, fontSize: 27, color: '#ffffff', textAlign: "center" }}>
            How About We Help You Find Your
            <Text style={{ fontWeight: 'bold' }}> Professional Job</Text>
          </Text>
          <Text
            style={
              {
                fontSize: 25,
                color: '#ffffff',
                textAlign: "center",
                marginTop: 30,
              }
            }
          >
            Best App to find and land your dream
            <Text
              style={
                {
                  marginLeft: 2,
                  fontWeight: "bold",
                }
              }>
              Job that's the service we render
            </Text>
          </Text>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={{ textAlign: "center", fontSize: 23 }}>Let's Get Started</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  start: { alignItems: 'center' },
  loginImage: {
    width: 220,
    height: 450,
    marginTop: 70,
    borderColor: "#FF7754"
  },
  subContainer: {
    width: "100%",
    backgroundColor: '#FF7754',
    height: '70%',
    marginTop: -20,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

  },
  button: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 99,
  }
})
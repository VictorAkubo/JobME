import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONT, SIZES, icons } from '../../constants'
import ScreenHeaderBtn from '../../components/common/header/ScreenHeaderBtn'
import { Stack, useRouter } from 'expo-router'

const help = () => {
    const router = useRouter()
    return (
        <View style={{flex:1}}>
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
                    headerTitle: "Help Center"

                }}
            />
            <View style={{ padding: 10, fontSize: 18 }}>
                <Text style={{ fontSize: 21 }}>Lets help you in making use of the App</Text>
                <Text style={{ paddingTop: 7, fontSize: 20 }}>Let's Begin</Text>
                <Text style={{ paddingTop: 7, fontSize: 20 }}></Text>
                <View>
                    <Text style={{ fontSize: 20 }}>Create an Account</Text>
                    <Text> Sign up on the platform using your email or social media accounts.</Text>
                </View>
                <Text style={{ paddingTop: 7, fontSize: 20 }}></Text>
                <View>
                    <Text style={{ fontSize: 20 }}>Complete Your Profile</Text>
                    <Text>Fill in all the necessary details such as your education, work experience, skills, and preferences. This helps the app match you with relevant job listings.</Text>
                </View>
                <Text style={{ paddingTop: 7, fontSize: 20 }}></Text>
                <View>
                    <Text style={{ fontSize: 20 }}>Browse Job Listings</Text>
                    <Text>Use the search function or browse through categories to find jobs that match your skills and interests.</Text>
                </View>
                <Text style={{ paddingTop: 7, fontSize: 20 }}></Text>
                <View>
                    <Text style={{ fontSize: 20 }}>Check All requirements</Text>
                    <Text>Check all requirements of the job you like by clicking on the buttons whhich are responsiblities , qualification, requirements please make sure your are qualified before applying</Text>
                </View>
                <Text style={{ paddingTop: 7, fontSize: 20 }}></Text>
                <View>
                    <Text style={{ fontSize: 20 }}>Apply By Clicking on The orange button that says apply for job</Text>
                    <Text style={{ paddingTop: 4 }}></Text>
                    <TouchableOpacity
                        style={styles.applyBtn}
                        onPress={() => Linking.openURL("http://careers.google.com/jobs/results")}
                    >
                        <Text style={styles.applyBtnText}>Apply For Job</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ paddingTop: 7, fontSize: 20 }}></Text>
                <View>
                    <Text style={{ fontSize: 20 }}>Networking</Text>
                    <Text>Some job searching apps offer networking features where you can connect with professionals in your field or recruiters. Utilize these features to expand your network.</Text>
                </View>
                <Text style={{ paddingTop: 7, fontSize: 20 }}></Text>
                <View>
                    <Text style={{ fontSize: 20 }}>Update Your Profile</Text>
                    <Text> Regularly update your profile with new skills, experiences, or certifications to increase your chances of being noticed by employers.</Text>
                </View>
                <Text style={{ paddingTop: 7, fontSize: 20 }}></Text>
                <View>
                    <Text style={{ fontSize: 20 }}>Utilize Additional Resources</Text>
                    <Text>Many job searching apps offer additional resources such as interview tips, resume builders, and career advice. Take advantage of these resources to improve your job search.
                        Remember to stay organized, proactive, and persistent in your job search efforts. Good luck!</Text>
                </View>
            </View>
        </View>
    )
}

export default help

const styles = StyleSheet.create({
    applyBtn: {
        flex: 1,
        backgroundColor: "#F64160",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: SIZES.medium,
        borderRadius: SIZES.medium,
    },
    applyBtnText: {
        fontSize: SIZES.medium,
        color: COLORS.white,
        fontFamily: FONT.bold,
    }
})
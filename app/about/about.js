import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { Stack, useRouter } from 'expo-router'
import { icons } from '../../constants'
import ScreenHeaderBtn from '../../components/common/header/ScreenHeaderBtn'
import { COLORS } from '../../constants'

export default about = () => {
    const router = useRouter()
    return (
        <View>
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
                    headerTitle: "About Us"

                }}
            />
            <ScrollView>
                <Text style={{ paddingTop:0,paddingLeft:45,paddingRight:45, paddingBottom:45,fontSize:15.5 }}>
                    <View>
                        <Text style={{ flex: 1, justifyContent: "flex-start", fontSize: 20 }}>Victor Akubo Ugbede: Innovating the Digital Landscape</Text>
                        In the ever-evolving world of technology, individuals like Victor Akubo Ugbede stand as pillars of innovation, shaping the digital landscape with their creativity and expertise. As a seasoned programmer, Victor has left an indelible mark on the industry through his numerous contributions, ranging from job searching platforms to video players and beyond.
                    </View>
                    <View>
                        <Text style={{ flex: 1, justifyContent: "flex-start", fontSize: 20 }}>Early Beginnings and Passion for Programming:</Text>
                        Victor's journey into the world of programming began with a spark of curiosity and a passion for problem-solving. From a young age, he exhibited a keen interest in technology, spending countless hours exploring the intricacies of computer systems and software development. This innate curiosity eventually led him to pursue formal education in computer science, laying the foundation for his future endeavors.
                    </View>
                    <View>
                        <Text style={{ flex: 1, justifyContent: "flex-start", fontSize: 20 }}>Career Trajectory and Professional Accomplishments:</Text>
                        Armed with a solid educational background and a relentless drive to excel, Victor embarked on his professional journey as a programmer. Throughout his career, he has worked on a diverse array of projects, each one showcasing his technical prowess and innovative thinking. From developing intuitive job searching platforms that streamline the recruitment process to crafting seamless video players that deliver an unparalleled viewing experience, Victor's portfolio is a testament to his versatility and ingenuity.
                    </View>
                    <View>
                        <Text style={{ flex: 1, justifyContent: "flex-start", fontSize: 20 }}>Innovative Solutions and Impactful Contributions:</Text>
                        One of Victor's defining traits as a programmer is his ability to think outside the box and devise innovative solutions to complex problems. Whether it's optimizing algorithms for maximum efficiency or integrating cutting-edge technologies to enhance user experience, he consistently pushes the boundaries of what's possible in the realm of software development. His work has not only garnered acclaim within the industry but has also made a tangible impact on the lives of countless individuals who benefit from the products and services he creates.
                    </View>

                    <View >
                        <Text style={{ flex: 1, justifyContent: "flex-start", fontSize: 20 }}>Vision for the Future:</Text>
                        Looking ahead, Victor remains committed to pushing the envelope and exploring new frontiers in programming. With technology continuing to evolve at a rapid pace, he sees endless opportunities to make a meaningful difference through his work. Whether it's delving into artificial intelligence, virtual reality, or other emerging fields, Victor is eager to embrace the challenges and opportunities that lie ahead, confident in his ability to continue shaping the future of technology.
                    </View>
                    <View>
                        <Text style={{ flex: 1, justifyContent: "flex-start", fontSize: 20 }}>Conclusion</Text>
                        In a world driven by innovation and digital transformation, Victor Akubo Ugbede stands as a beacon of inspiration for aspiring programmers and technologists alike. His passion for programming, coupled with his relentless pursuit of excellence, has enabled him to carve out a niche for himself in the competitive landscape of software development. As he continues to push the boundaries of what's possible, one thing remains certain: Victor's contributions will leave a lasting impact on the world of technology for years to come.
                    </View>


                </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})
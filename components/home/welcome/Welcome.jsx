import { React, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList
} from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'
const jobTypes = ["Full-Time", "Part-Time", "Contractor","Freelancing","Internship"]
const Welcome = ({searchTerm,setSearchTerm,handleClick}) => {
  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState(jobTypes.map(item => (
    item
  )))
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Victor </Text>
        <Text style={styles.welcomeMessage}>Find your best job </Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for?..."
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            style={styles.searchBtnImage}
            resizeMode="contain"
            source={icons.search} />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={()=>{
                setActiveJobType(item)
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item=>item}
          contentContainerStyle={{columnGap:SIZES.small}}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

      </View>
    </View>
  )
}

export default Welcome
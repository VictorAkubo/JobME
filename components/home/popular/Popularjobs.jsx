import React, { useEffect, useState } from 'react'
import { View, Text, Image, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import useFetch from '../../../hook/useFetch'
import styles from './popularjobs.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import pic from "../../../constants/images"
import { useRouter } from 'expo-router'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from "../../common/cards/popular/PopularJobCard"

const Popularjobs = () => {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState()
  /* const [isLoading, setIsLoading] = useState(true); */
  /*const [error, setError] = useState(false); */
  const { data, isLoading, error, refetch } = useFetch("search", {
    query: 'Popular white collar jobs',
    num_pages: 1
  });

  const handleCardPress = (items) => {

  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity onPress={()=> router.push(`/search/Popular white collar jobs`)}>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {
          isLoading ? (
            <ActivityIndicator size="large" color="black" />
          ) : error ? (
            <Text> Something Went Wrong </Text>
          ) : (
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <PopularJobCard
                  showsHorizontalScrollIndicator={false}
                  item={item}
                  selectedJob={selectedJob}
                  handleCardPress={handleCardPress}
                  handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
                />

              )
              }
              keyExtractor={item => item?.job_id}
              contentContainerStyle={{ columnGap: SIZES.medium }}
              showsHorizontalScrollIndicator={true}
              horizontal
            />
          )
        }
      </View>
    </View>
  )
}

export default Popularjobs
import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import useFetch from '../../../hook/useFetch'
import { SafeAreaView } from 'react-native-safe-area-context'
import pic from "../../../constants/images"
import { useRouter } from 'expo-router'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from "../../common/cards/nearby/NearbyJobCard"
import styles from './nearbyjobs.style'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'

const NearByJobs = () => {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState()
  /* const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false); */
  const { data, isLoading, error, refetch } = useFetch("search", {
    query: 'Nearby white collar job',
    num_pages: 1
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity onPress={() =>  router.push(`/search/Nearby white collar job`)}>
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
            data?.map((job) => (
              <NearbyJobCard
                job={job}
                key={`nearby-job-${job?.job_id}`}
                handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
              />
            ))
          )}
      </View>
    </View>
  )
}

export default NearByJobs;
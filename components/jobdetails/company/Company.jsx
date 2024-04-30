import React from 'react'
import { View, Text,Image } from 'react-native'

import styles from './company.style'
import { checkImageURL } from '../../../utils'
import { icons } from '../../../constants'


const Company = ({ companyLogo, location, companyName, jobTitle }) => {
  return (
    <View style={{alignItems:"center"}}>
      <View>
        <Image
          source={{
            uri:companyLogo 
          }}
          style={styles.logoImage}
        />
      </View>
      <View>
        <Text style={styles.jobTitleBox}>{jobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName}</Text>
        <View style={styles.locationBox}>
          <Image
          source={icons.location}
          resizeMode="contain"
          style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  )
}

export default Company
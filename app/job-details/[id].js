import { React, useCallback, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import { Stack, useGlobalSearchParams, useRouter } from 'expo-router';
import { About, Company, JobAbout, JobTabs, JobFooter, ScreenHeaderBtn, Specifics, screenHeaderBtn } from "../../components"
import { COLORS, icons, SIZES } from '../../constants';
import useFetch from '../../hook/useFetch';
const JobDetails = () => {
    const params = useGlobalSearchParams();
    const router = useRouter();
    const { data, isLoading, error, refetch } = useFetch("job-details", {
        job_id: params.id
    })
    const [refreshing, setRefreshing] = useState(false)
    const onRefresh = () => {
        refetch()
    }
    const tabs = ["About", "Qualification", "Responsibilities"]
    const [activeTab, setActiveTab] = useState(tabs[0])
    const displayTabContent = () => {
        switch (activeTab) {
            case "Qualification":
                return <Specifics
                    title="Qualification :"
                    points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
                />
            case "About":
                return <JobAbout
                    info={data[0].job_description ?? "N/A"}
                />
            case "Responsibilities":
                return <Specifics
                    title="Responsibilities :"
                    points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
                />
            default:
                break
        }
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => {
                        return <ScreenHeaderBtn
                            iconurl={icons.left}
                            dimension="60%"
                            handlePress={() => router.back()} />
                    },
                    headerRight: () => {
                        return <ScreenHeaderBtn
                            iconurl={icons.share}
                            dimension="60%"
                        />
                    },
                    headerTitle: ""
                }} />

            <>
                <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                    {
                        isLoading ? (
                            <ActivityIndicator size="large" color={COLORS.primary} />
                        ) : error ? (
                            <Text> An error Ocuured While Fetching</Text>
                        ) : data.length === 0 ? (
                            <Text>No data</Text>
                        ) : (
                            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                                <Company
                                    companyLogo={data[0].employer_logo}
                                    jobTitle={data[0].job_title}
                                    companyName={data[0].employer_name}
                                    location={data[0].job_country}
                                />
                                <JobTabs
                                    tabs={tabs}
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                />

                                {displayTabContent()}
                            </View>
                        )}

                </ScrollView>
            </>
            <JobFooter url={data[0]?.job_google_link ?? "http://careers.google.com/jobs/results"} />



        </SafeAreaView>
    )
}

export default JobDetails
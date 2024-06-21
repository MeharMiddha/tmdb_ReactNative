import {Platform, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import React, { useState } from 'react'
import {StatusBar} from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { styles } from '../theme/theme';
import TrendingMovies from '@/components/TrendingMovies';
import MovieList from '@/components/MovieList';
import { useNavigation } from '@react-navigation/native';

const ios = Platform.OS == 'ios';
export default function HomeScreen() {
  const [trending,setTrending] = useState([1,2,3]);
  const [upcoming,setUpcoming] = useState([1,2,3]);
  const [topRated,setTopRated] = useState([1,2,3]);
  const navigation = useNavigation();
  return ( 
    <View className="flex-1 bg-neutral-800">
        <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
          <StatusBar style='light' />
          <View className='flex-row justify-between items-center mx-4'>
            <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
            <Text className='text-white text-3xl font-bold'><Text style={styles.text}>T</Text>MDB</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Search')}>
              <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:10}}>
          <TrendingMovies data={trending} />
          <MovieList data={upcoming} title="Upcoming"/>
          <MovieList data={topRated} title="Top Rated" />
        </ScrollView>
    </View>
  )
}

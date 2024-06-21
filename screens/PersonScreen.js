import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { styles } from "@/theme/theme";
import MovieList from "@/components/MovieList";

let { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
const verticalMargin = ios ? "" : "my-3";

export default function PersonScreen() {
  const navigation = useNavigation();
  const [isFavourite, setIsFavourite] = useState(false);
  const [personMovies, setPersonMovies] = useState([1,2,3,4,5]);
  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <SafeAreaView
        className={
          "z-20 w-full flex-row justify-between items-center px-4" +
          verticalMargin
        }
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.background}
          className="rounded-xl p-1"
        >
          <ChevronLeftIcon size={28} strokeWidth={2.5} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)}>
          <HeartIcon size="35" color={isFavourite ? "red" : "white"} />
        </TouchableOpacity>
      </SafeAreaView>

      <View>
        <View>
          <View
            className="flex-row justify-center"
            style={{
              shadowColor: "gray",
              shadowRadius: 40,
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 1,
            }}
          >
            <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500">
              <Image
                source={{
                  uri: "https://m.media-amazon.com/images/M/MV5BODI4NDY1NzkyM15BMl5BanBnXkFtZTgwNzM3MDM0OTE@._V1_FMjpg_UX1000_.jpg",
                }}
                style={{ height: height * 0.43, width: width * 0.74 }}
              />
            </View>
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-3xl text-white font-bold text-center">
            Akshay Kumar
          </Text>
          <Text className="text-base text-neutral-500 text-center">
            Mumbai, India
          </Text>
        </View>

        <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
          <View className="border-r-2 border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold">Gender</Text>
            <Text className="text-neutral-300 text-sm">Male</Text>
          </View>
          <View className="border-r-2 border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold">Birthday</Text>
            <Text className="text-neutral-300 text-sm">1975-09-14</Text>
          </View>
          <View className="border-r-2 border-r-neutral-400 px-2 items-center">
            <Text className="text-white font-semibold">Known For</Text>
            <Text className="text-neutral-300 text-sm">Acting</Text>
          </View>
          <View className="px-2 items-center">
            <Text className="text-white font-semibold">Popularity</Text>
            <Text className="text-neutral-300 text-sm">90</Text>
          </View>
        </View>
        <View className="my-6 mx-4 space-y-2">
          <Text className="text-white text-lg">Biography</Text>
          <Text className="text-neutral-400 tracking-wide">
            Akshay Hari Om Bhatia[1] (born Rajiv Hari Om Bhatia; 9 September
            1967[2]), known professionally as Akshay Kumar (pronounced [əkˈʂəj
            kʊˈmɑːɾ]), is an Indian actor and film producer working in Hindi
            cinema. Referred to in the media as "Khiladi Kumar",[3][4] through
            his career spanning over 30 years, Kumar has appeared in over 100
            films and has won several awards, including one National Film Award
            and two Filmfare Awards. He received the Padma Shri, India's
            fourth-highest civilian honour, from the Government of India in
            2009.Akshay Hari Om Bhatia[1] (born Rajiv Hari Om Bhatia; 9
            September 1967[2]), known professionally as Akshay Kumar (pronounced
            [əkˈʂəj kʊˈmɑːɾ]), is an Indian actor and film producer working in
            Hindi cinema. Referred to in the media as "Khiladi Kumar",[3][4]
            through his career spanning over 30 years, Kumar has appeared in
            over 100 films and has won several awards, including one National
            Film Award and two Filmfare Awards. He received the Padma Shri,
            India's fourth-highest civilian honour, from the Government of India
            in 2009.
          </Text>
        </View>

        <MovieList title={'Movies'} hideSeeAll={true} data={personMovies} />
      </View>
    </ScrollView>
  );
}

import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

var { width, height } = Dimensions.get("window");

export default function TrendingMovies({ data }) {
  const navigation = useNavigation();
  const handleClick = (item) => {
    navigation.navigate("Movie", item);
  };
  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
      <View className="flex-1 justify-center items-center">
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={{ width: width * 0.62, marginHorizontal: 10 }}>
              <MovieCard item={item} handleClick={handleClick} />
            </View>
          )}
          keyExtractor={(item, index) =>
            item.id ? item.id.toString() : index.toString()
          }
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const MovieCard = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={()=>handleClick(item)}>
      <Image
        source={{
          uri: "https://media.istockphoto.com/id/1491857076/photo/tree-light-bulb-glowing-hold-in-hand-on-blue-background-concept-of-saving-electricity.jpg?s=2048x2048&w=is&k=20&c=MycZhq9E7kn2iQEdufvL1mWkCXbDQGeiWG9H67NEU-I=",
        }}
        style={{
          width: width * 0.6,
          height: height * 0.4,
        }}
        className="rounded-3xl bg-white"
      />
    </TouchableWithoutFeedback>
  );
};

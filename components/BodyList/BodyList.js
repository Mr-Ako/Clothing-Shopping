import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  FlatList,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function BodyList() {
  const [Data, setData, image] = useState([
    {
      name: " Top",
      id: "1",
      price: "$69.99",
      imageUrl:
        "https://images.pexels.com/photos/14844564/pexels-photo-14844564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Pleated Dress",
      id: "2",
      price: "$39.99",
      imageUrl:
        "https://images.pexels.com/photos/3193749/pexels-photo-3193749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Hoodie",
      id: "3",
      price: "$19.99",
      imageUrl:
        "https://images.pexels.com/photos/7945745/pexels-photo-7945745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Long Sleeve Dress",
      id: "4",
      price: "$59.99",
      imageUrl:
        "https://images.unsplash.com/photo-1596637510298-637b184503e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "Casual Shirt",
      id: "5",
      price: "$11.99",
      imageUrl:
        "https://images.pexels.com/photos/9769853/pexels-photo-9769853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);

  return (
    <View style={s.container}>
      <ScrollView style={s.scrollView}>
        <FlatList
          keyExtractor={(item) => item.key}
          contentContainerStyle={s.flatList}
          data={Data}
          renderItem={({ item }) => (
            <View>
              <View style={s.imageWrapper}>
                <Image source={{ uri: item.imageUrl }} style={s.image} />
              </View>
              <View style={s.boxWrapper}>
                <View>
                  <Text>{item.name}</Text>
                  <Text>{item.price}</Text>
                </View>
                <View>
                  <MaterialIcons
                    style={s.icon}
                    name="favorite-border"
                    size={24}
                    color="black"
                  />
                </View>
                
              </View>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}
const s = StyleSheet.create({
  container: {
    flex: 45,
    backgroundColor: "#B02633",
  },
  boxWrapper: {
    backgroundColor: "#D64856",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  flatList: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
  },
  imageWrapper: {
    backgroundColor: "red",
    width: 150,
    height: 200,
    overflow: "hidden",
    borderRadius: 24,
  },
  scrollView: {
    height: 100,
    paddingHorizontal: 25,
  },
});

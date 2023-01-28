import { StyleSheet, Text, View, ScrollView,Image } from "react-native";
import React from "react";
import { setStatusBarTranslucent } from "expo-status-bar";

const navData = [
  { id: 0, name: "ALL", imageUrl:
  "https://a.storyblok.com/f/165154/800x800/70e8f9cf61/sell-shirts.jpeg/m/filters:format(webp)", },
  { id: 1, name: "Recent" },
  { id: 2, name: "Popular" },
  { id: 3, name: "Expansive" },
  { id: 4, name: "Cheap" },
];
const Body = () => {
  return (
    <ScrollView  contentContainerStyle={s.scrollView}>
      {navData.map((item) => (
        <View style={s.itemContainer} key={item.id}>
           <Image source={{ uri: item.imageUrl }} style={s.image} />
          <Text style={s.itemTitle}>{item.name} </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Body;

const s = StyleSheet.create({
  itemContainer: {     
    backgroundColor: "#EC5668",
    height: 100,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 20,
    marginRight: 15,
    
    
  },
})

import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { setStatusBarTranslucent } from "expo-status-bar";

const navData = [
  { id: 0, name: "ALL" },
  { id: 1, name: "Recent" },
  { id: 2, name: "Popular" },
  { id: 3, name: "Expansive" },
  { id: 4, name: "Cheap" },
];
const ScrollNav = () => {
  return (
    <ScrollView horizontal={true} contentContainerStyle={s.scrollView}>
      {navData.map((item) => (
        <View style={s.itemContainer} key={item.id}>
          <Text style={s.itemTitle}>{item.name} </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default ScrollNav;

const s = StyleSheet.create({
  itemContainer: {     
    backgroundColor: "#EC5668",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 20,
    marginRight: 15,
    
  },
  scrollView: {
    height: 100,
    alignItems: "center",
    paddingHorizontal: 24,
    // backgroundColor:'green'
  },
  itemTitle:{
    fontWeight:'750',
    color:'white',
    textTransForm:'uppercase',
  },
});

import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput style={styles.input} placeholder="Search" />
      </View>
      <Pressable style={styles.icon}>
        <Ionicons name="filter" size={30} color="black" />
      </Pressable>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 30,
    flexDirection: "row",
    paddingHorizontal: 24,
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputWrapper: {
    height: "100%",
    flex: 1,
    marginRight: 15,
    paddingVertical:6,
  },
  input: {
    flex: 1,
    paddingLeft: 7,
    borderRadius: 40,
    height: 50,
    elevation:10,
    // shadowColor:'gray',
    // shadowOffset:{width:10, height:21},
    // shadowOpacity:1.5,
    // shadowRadius:2,
    backgroundColor:'white',
  
  },
  icon: {
    backgroundColor: "#d9d9d9",
    height: 50,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});

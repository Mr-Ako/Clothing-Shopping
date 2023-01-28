import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Entypo name="menu" size={24} color="black" />
      </TouchableOpacity>
      <View></View>
      <View style={styles.greeting}>
        <Text style={styles.greetingText}>hello</Text>
        <Text style={styles.profileName}>Sali</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/314/314407.png?w=740&t=st=1674940844~exp=1674941444~hmac=030fc4aed4a3f0b8c410545e443207458468970409414d9fae5acbdc8c1d4ca7",
            }}
          />
        </View>
      </TouchableOpacity>
        
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "15%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    paddingHorizontal: 24,
    paddingTop: 50,
  },
  greeting: {
    alignItems: "center",
    paddingRight:50,
  },
  greetingText: {
    fontFamily: "monospace",
    fontSize: 16,
    fontWeight: "500",
  },
  profileName: {
    paddingTop: 4,
    frontFamily: "monospace",
    fontSize: 18,
    fontWeight: "700",
  },
  imageWrapper: {
    backgroundColor: "red",
    width: 40,
    height: 40,
    overflow: "hidden",
    borderRadius: 20,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

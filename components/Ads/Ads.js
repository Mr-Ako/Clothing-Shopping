import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function Ads() {

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require("../../assets/adsGirl.png")}
          />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.tittle}>Big Sale</Text>
          <Text style={styles.description}>
            Get the fashion at a discount up to 50%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E34C5E",
    height: 100,
    borderRadius: 40,
    flexDirection: "row",
    marginTop: 50,
    marginHorizontal: 24,
  },
  imageWrapper: {
    flex: 1,
    borderRadius: 40,
  },
  image: {
    position: "absolute",
    height: "120%",
    width: "60%",
    bottom: 0,
    left: -7,
  },
  textWrapper: {
    flex: 1,
    borderRadius: 40,
    justifyContent: "center",
    lineHeight: 40,
  },
  tittle: {
    fontSize: 25,
    color: "white",
    fontWeight: "700",
    gontfamily: "monospace",
  },
  description: {
    fontSize: 10,
    color: "white",
  },
});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Ads from "../components/Ads/Ads";
import ScrollNav from "../components/ScrollNAv/ScrollNav";
import BodyList from "../components/BodyList/BodyList";


const Home = () => {
  return (
    <View style={s.container}>
      <Header />
      <Search />
      <Ads />
      <ScrollNav />
      <BodyList />
      
    </View>
  );
};

export default Home;

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
});

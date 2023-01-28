import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Ads from '../components/Ads/Ads';
import Search from '../components/Search/Search';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator  
     screenOptions={{
        headerShown: false,
        tabBarActiveTintColor:'#ec5668',
        tabBarShowLabel:false,
        tabBarInactiveTintColor:'#a4a4a4'
     }}
    >
    <Tab.Screen options={{tabBarIcon: (focused) => (<Entypo name="home" size={24} color={focused ? '#ec5668' :'#a4a4a4' }/>)}} name="Home" component={Home} />
    <Tab.Screen options={{tabBarIcon: (focused) =>(<FontAwesome name="shopping-cart" size={30} color={focused ? '#ec5668' :'#a4a4a4' } />)}} name="Cart" component={Ads} />
    <Tab.Screen options={{tabBarIcon: (focused) =>(<Ionicons name="settings" size={24} color={focused ? '#ec5668' :'#a4a4a4' }/>)}} name="Profile" component={Search} />
  </Tab.Navigator>
  )
}

export default BottomTab

const s = StyleSheet.create({})
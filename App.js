import React,{useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeTabStack from './src/Routes.js';
import AppLoading from 'expo-app-loading';
import { initializeApp } from 'firebase/app';
import {db} from './firebase.js'
import firebase from 'firebase/compat/app';

console.disableYellowBox = true;

export default function App() {

  return (
    <HomeTabStack/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

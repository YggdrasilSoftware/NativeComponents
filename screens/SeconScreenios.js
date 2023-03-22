import { StyleSheet, Text, View, Button } from 'react-native';
import { StackActions } from '@react-navigation/native';
import CustomView from './CustomView';
import React, { Component } from 'react';



export default function SecondScreen({ navigation, route, Props, State}) {
  
  return (
    <View style={styles.container}>

      <CustomView 
          style={{ width: 300, height: 500 }} 
        />

      <Text>Second Screen</Text>
      <Button 
        title='Go to Third Screen'
        onPress={() => navigation.navigate("Thirdios")}
      />
    </View>
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
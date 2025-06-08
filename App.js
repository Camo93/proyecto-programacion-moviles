import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  Alert,
  Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Login from './src/view/screens/login';
import ProfileSetup from './src/view/screens/ProfileSetup';
import MuscleSelection from './src/view/screens/MuscleSelection';
import SelectionLevel from './src/view/screens/SelectionLevel';
// import Tricep from './src/view/screens/Tricep';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


  const Stack = createNativeStackNavigator(); 


    
  export default function App() {
  return (
  <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ProfileSetup" component={ProfileSetup} />
          <Stack.Screen name="MuscleSelection" component={MuscleSelection} />
          <Stack.Screen name="NivelSelection" component={SelectionLevel} />
          {/* <Stack.Screen name="Tricep" component={Tricep} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }


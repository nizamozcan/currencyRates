/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View
} from "react-native";
import { Provider, useSelector } from "react-redux";
import {createStore} from "redux";
import {NavigationContainer,DefaultTheme} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  HomeScreen  from "./src/screens/HomeScreen";
import { Favories } from "./src/screens/Favories";
import {Colors} from "./src/components/style/Colors"
import reducers from "./src/reducers"
import { SettingScreen } from "./src/screens/SettingScreen";



const Tab = createBottomTabNavigator();
function App(): JSX.Element {
  const MyTheme = {
    colors: {
      primary: 'rgb(255, 45, 85)',
      background:'white',
      text:'white',
    },
  };
  const store=createStore(reducers)
  return (
      <Provider store={store}>
        <NavigationContainer theme={MyTheme}>
          <Tab.Navigator screenOptions={{
            headerShown: false
          }}>
            <Tab.Screen name="AnaSayfa" component={HomeScreen} />
            <Tab.Screen name="Takip Listem" component={Favories} />
            <Tab.Screen name="Ayarlar" component={SettingScreen} />

          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
  );
}


export default App;

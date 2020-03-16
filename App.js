import React from 'react';
import ImageScreen from './src/screens/ImageScreen'
import HomeScreen from './src/screens/HomeScreen'
import ComponentsScreen from './src/ComponentsScreen'
import ListScreen from './src/screens/ListScreen'
import CounterScreen from './src/screens/CounterScreen'
import SquareScreen from './src/screens/SquareScreen'
import BoxScreen from './src/screens/BoxScreen'
import { StyleSheet, Text, View } from 'react-native';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Image: ImageScreen,
    List: ListScreen,
    Counter: CounterScreen,
    Square: SquareScreen,
    Text: TextScreen,
    Box: BoxScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

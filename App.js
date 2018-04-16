import React from 'react';
import { StyleSheet, RefreshControl, Text, View, Button, FlatList, TextInput,
         Image, ActivityIndicator, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { StackNavigator,
         TabNavigator,
         TabBarBottom
        } from 'react-navigation'; // Version can be specified in package.json


import FirstScreen from './src/New/FirstScreen'; 
import ViewUserScreen from './src/New/ViewUserScreen';  
import InputUserScreen from './src/New/InputUserScreen'; 
import EditScreen from './src/New/EditScreen'; 
import LoginScreen from './src/New/LoginScreen'; 

export default class App extends React.Component {
  render() {
    return (
      <MainScreen /> //memanggil TabNavigator Screen
    );
  }
}


const HomeStack = StackNavigator({
  First: { screen: FirstScreen },
  Login: { screen: LoginScreen },
  ViewUser: { screen: ViewUserScreen },
  Edit: { screen: EditScreen }
  
 
});


const InputStack = StackNavigator({
  InputUser: { screen: InputUserScreen }, 
});


const MainScreen = TabNavigator(
  {
    Home: { screen: HomeStack },
    Input: { screen: InputStack },

  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-clipboard${focused ? '' : '-outline'}`;
        } else if (routeName === 'Input') {
          iconName = `ios-person-add${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#0D47A1',
      inactiveTintColor: 'gray',
    },
    animationEnabled: true,
    swipeEnabled: true,
  }
);

const styles = StyleSheet.create({
    Header: {
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#64B5F6',
    },
    TextHeader: {
        fontSize: 30
    },
    ListItem: {
        backgroundColor: '#BBDEFB',
        marginTop: 5,
        flex: 1
    },
    ListFirst: {
      fontSize: 20
    },
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20

    },

    TextInputStyleClass:
    {
      textAlign: 'center',
      height: 40,
      backgroundColor : "#fff",
      borderWidth: 1,
      borderColor: '#7986CB',
      borderRadius: 7 ,
      marginBottom: 10,
      width: '95%'
    },

    BoxClass:
    {
      alignItems: 'center',
      height: 40,
      backgroundColor : "#EA80FC",
      borderWidth: 1,
      borderColor: '#2196F3',
      borderRadius: 7 ,
      marginBottom: 10,
      width: '95%'
    },

    TouchableOpacityStyle:
   {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#fff',
      marginBottom: 20,
      width: '70%',
      borderRadius: 7

    },

    TextStyle:
    {
       color: '#FF8A80',
        textAlign: 'center',
        fontSize: 18
    },

    ActivityIndicatorStyle:{

      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'

  },
  Header: {
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextHeader: {
        fontSize: 30,
        color: '#C51162'
    },
});

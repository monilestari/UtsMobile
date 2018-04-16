import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigator,
         TabNavigator,
         TabBarBottom
        } from 'react-navigation';

const Profile = require('./img/logo.png');


class FirstScreen extends React.Component {
  static navigationOptions = {
    tabBarVisible: false,
    header: null,
  };

  render() {
    return (
      <View style={styles.position}>
        <Image source={Profile} style={styles.icon} />
        <Text style={styles.font}>IURAN HMJ PTI</Text>
        <Button
          title="Tap To Login"
          color="#0D47A1"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }

}

export default FirstScreen;


const styles = StyleSheet.create({
  icon: {
    height: 200,
    width: 200,
  },
  font: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    marginTop: 24,
  },
  position: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
   
  }

  });

import React from 'react';
import { Button, Text, View,StatusBar,StyleSheet,TextInput,FlatList,Image,RefreshControl,TouchableOpacity,KeyboardAvoidingView,ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json


export default class InputUserScreen extends React.Component  {
   
  static navigationOptions = {
    title: 'Input Pembayaran',
    headerStyle: {
        backgroundColor: '#0D47A1',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        textAlign:'center', 
        alignSelf:'center',
        flex:1
      }
  };
  constructor()
    {
      super();
        this.state = {
          nim: '',
          nama: '',
          kelas: '',
          semester: '',
          tanggal: '',
          uangbayar: '',

          ActivityIndicator_Loading: false,

        }
    }
    
    InsertData = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('https://putumonilestari.000webhostapp.com/apimobile/add_data.php',
            {
                method: 'POST',
                headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  nim : this.state.nim,
                  nama : this.state.nama,
                  kelas : this.state.kelas,
                  semester : this.state.semester,
                  tanggal : this.state.tanggal,
                  uangbayar : this.state.uangbayar,
                })

            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
              alert(responseJsonFromServer);
              this.setState({ ActivityIndicator_Loading : false });
            }).catch((error) =>
            {
              console.error(error);
              this.setState({ ActivityIndicator_Loading : false});
            });
        });
        this.props.navigation.navigate('ViewUser');
    }

  render() {
    return (
      
      <View style = { styles.container } >

          <Image
              source={require('./img/list.png')}//image
              style={{width: 100, height: 100, marginBottom: 25 }}
          />
          <TextInput 
                placeholder = "Masukan NIM"
                style = { styles.TextInputStyleClass } 
                underlineColorAndroid = "transparent"
                onChangeText = {(TextInputText) => this.setState({ nim: TextInputText })} 
          />
           
              <TextInput 
                placeholder = "Masukan Nama"
                style = { styles.TextInputStyleClass } 
                underlineColorAndroid = "transparent"
                onChangeText = {(TextInputText) => this.setState({ nama: TextInputText })} 
          />
           
              <TextInput  
                placeholder = "Masukan semester" 
                style = { styles.TextInputStyleClass } 
                underlineColorAndroid = "transparent"
                onChangeText = {(TextInputText) => this.setState({ semester: TextInputText })} 
          />
  
              <TextInput  
                placeholder = "Masukan kelas" 
                style = { styles.TextInputStyleClass } 
                underlineColorAndroid = "transparent"
                onChangeText = {(TextInputText) => this.setState({ kelas: TextInputText })} 
          />
              <TextInput  
                placeholder = "yyyy-mm-dd" 
                style = { styles.TextInputStyleClass } 
                underlineColorAndroid = "transparent"
                onChangeText = {(TextInputText) => this.setState({ tanggal: TextInputText })} 
          />
              <TextInput  
                placeholder = "Jumlah Pembayaran" 
                style = { styles.TextInputStyleClass } 
                underlineColorAndroid = "transparent"
                onChangeText = {(TextInputText) => this.setState({ uangbayar: TextInputText })} 
          />
        
           
              <TouchableOpacity 
                activeOpacity = { 0.5 } 
                style = { styles.TouchableOpacityStyle } 
                onPress = { this.InsertData }>
                <Text style = { styles.TextStyle }>INPUT</Text>
               </TouchableOpacity>
                {
                  this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#009688' size='large'style={styles.ActivityIndicatorStyle} /> : null
            }
        </View>
       
      
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1, 
    alignItems: 'center', 
    backgroundColor: '#FCFCFE',
    paddingTop: 20,
    padding: 20,
  },
TextInputStyleClass:
{
  textAlign: 'center',
  height: 40,
  backgroundColor : "#fff",
  borderWidth: 1,
  borderColor: '#0D47A1',
  borderRadius: 7 ,
  marginBottom: 10,
  width: '95%'
},
TouchableOpacityStyle:
{
  paddingTop:10,
  paddingBottom:10,
  backgroundColor:'#0D47A1',
  marginTop: 25,
  marginBottom: 20,
  borderRadius: 4 ,
  width: '90%'
},
TextStyle:
{
  color: '#fff',
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
}


  });

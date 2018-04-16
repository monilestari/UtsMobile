import React from 'react';
import { Alert,Button, Text, View,StatusBar,StyleSheet,TextInput,FlatList, Platform,Image,RefreshControl,TouchableOpacity,ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json

export default class EditScreen extends React.Component {
  static navigationOptions = {
    title: 'Validasi Pembayaran',

      headerStyle: {
      backgroundColor: '#2962FF',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        textAlign:'center', 
        alignSelf:'center',
        flex:1
      }
    
  };

  constructor(props) {
    super(props)
      this.state = {
        TextInput_Student_nim: '',
        TextInput_Student_nama: '',
        TextInput_Student_kelas: '',
        TextInput_Student_semester: '',
        TextInput_Student_tanggal: '',
        TextInput_Student_uangbayar: '',
        TextInput_Student_status: '',
    }
  }

  componentDidMount(){
    
    // Received Student Details Sent From Previous Activity and Set Into State.
    this.setState({
      TextInput_nim : this.props.navigation.state.params.nim,
      TextInput_nama: this.props.navigation.state.params.nama,
      TextInput_kelas: this.props.navigation.state.params.kelas,
      TextInput_semester: this.props.navigation.state.params.semester,
      TextInput_tanggal: this.props.navigation.state.params.tanggal,
      TextInput_uangbayar: this.props.navigation.state.params.uangbayar,
      TextInput_status: this.props.navigation.state.params.status,
      })

     }

     static navigationOptions = {
      title: 'Validasi',
      
    };

    UpdateStudentRecord = () =>{
      
      fetch('https://putumonilestari.000webhostapp.com/apimobile/ubah.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({

          nim : this.state.TextInput_nim,

          nama : this.state.TextInput_nama,

          kelas : this.state.TextInput_kelas,

          semester : this.state.TextInput_semester,

          tanggal : this.state.TextInput_tanggal,
              
          uangbayar : this.state.TextInput_uangbayar,

          status : this.state.TextInput_status,

        })

        }).then((response) => response.json())
            .then((responseJson) => {
              // Showing response message coming from server updating records.
              Alert.alert(responseJson);

            }).catch((error) => {
              console.error(error);
            });
            this.props.navigation.navigate('ViewUser');    
      }

     DeleteStudentRecord = () =>{

      
        fetch('https://putumonilestari.000webhostapp.com/apimobile/hapus.php', {
          method: 'POST',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({

            nim : this.state.TextInput_nim,

          })

          }).then((response) => response.json())
          .then((responseJson) => {

            // Showing response message coming from server after inserting records.
            Alert.alert(responseJson);

          }).catch((error) => {
             console.error(error);
          });

          this.props.navigation.navigate('ViewUser');

      }

    render() {
      return (
      <View style={styles.MainContainer}>

          <TextInput
            placeholder="Nama"
            value={this.state.TextInput_nama}
            onChangeText={ TextInputValue => this.setState({ TextInput_nama : TextInputValue }) }
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
          />

         <TextInput
            placeholder="Semester"
            value={this.state.TextInput_semester}
            onChangeText={ TextInputValue => this.setState({ TextInput_semester : TextInputValue }) }
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
          />

          <TextInput
            placeholder="Kelas"
            value={this.state.TextInput_kelas}
            onChangeText={ TextInputValue => this.setState({ TextInput_kelas : TextInputValue }) }
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
          />

          <TextInput
            placeholder="Tanggal"
            value={this.state.TextInput_tanggal}
            onChangeText={ TextInputValue => this.setState({ TextInput_tanggal : TextInputValue }) }
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
          />


          <TextInput
            placeholder="Jumlah uang"
            value={this.state.TextInput_uangbayar}
            onChangeText={ TextInputValue => this.setState({ TextInput_uangbayar : TextInputValue }) }
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
          />

          <TextInput
            placeholder="Status"
            value={this.state.TextInput_status}
            onChangeText={ TextInputValue => this.setState({ TextInput_status : TextInputValue }) }
            underlineColorAndroid='transparent'
            style={styles.TextInputStyleClass}
          />


          <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.UpdateStudentRecord} >
            <Text style={styles.TextStyle}> UPDATE</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle2} onPress={this.DeleteStudentRecord} >
            <Text style={styles.TextStyle}> DELETE</Text>
          </TouchableOpacity>
      </View>
      );
    }
}

const styles = StyleSheet.create({

  MainContainer :{

    alignItems: 'center',
    flex:1,
    paddingTop: 30,
    backgroundColor: '#fff'

  },

  MainContainer_For_Show_StudentList_Activity :{

    flex:1,
    paddingTop: (Platform.OS == 'ios') ? 20 : 0,
    marginLeft: 5,
    marginRight: 5

    },

  TextInputStyleClass: {

  textAlign: 'center',
  width: '90%',
  marginBottom: 7,
  height: 40,
  borderWidth: 1,
  borderColor: '#0D47A1',
  borderRadius: 5 ,

  },

  TouchableOpacityStyle: {

    paddingTop:25,
    paddingBottom:15,
    borderRadius:5,
    marginBottom:7,
    width: '45%',
    backgroundColor: '#0D47A1'

  },

  TouchableOpacityStyle2: {

    paddingTop:25,
    paddingBottom:15,
    borderRadius:5,
    marginBottom:7,
    width: '45%',
    backgroundColor: '#B71C1C'

  },

  TextStyle:{
    color:'#fff',
    textAlign:'center',
  },

  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  }

});

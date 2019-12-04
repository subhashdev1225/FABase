
import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput, Image,
  Alert
} from 'react-native';
import customStyle from './stylesheet/customStyle';
import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';






class SignupScreen extends React.Component {

  backPress = () => {
    this.props.navigation.goBack();
  };
  
  static navigationOptions = ({ navigation }) => {
    // const { params } = navigation.state;

    return {
      //Heading/title of the header
      //Heading style
      headerStyle: {
        backgroundColor: '#3A7DB1',
      },
      //Heading text color
      headerTintColor: 'white',

      headerLeft: (
        <View style={customStyle.bgStyle}>

          {/* <TouchableOpacity onPress={navigation.goBack()}> */}
            <Image style={{ marginLeft: 5, width: 30, alignItems: 'center', height: 30 }}
              source={require('./assets/image/left_sm.png')}
            >
            </Image>
          {/* </TouchableOpacity> */}

          <Image style={{ marginLeft: 20, width: 40, alignItems: 'center', height: 40 }}
            source={require('./assets/FA_Driver_images/logo.png')}
          >
          </Image>

          <Text
            style={{
              color: 'white',
              marginLeft: 10,
              alignSelf: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              fontSize: 20,

            }}>
            SIGN UP
                  </Text>

        </View>
      ),
    };
  };





  uploadProfileImage = () => {
    this.props.navigation.navigate('SignUp')
  };

  uploadLicenceImage = () => {
    this.props.navigation.navigate('SignUp')
  };
  uploadLicenceBackImage = () => {
    this.props.navigation.navigate('SignUp')
  };
  uploadSinCardImage = () => {
    this.props.navigation.navigate('SignUp')
  };


  submitInfo = () => {
    this.props.navigation.goBack();
  };

  
  //for number 
  formatText = (text) => {
    return text.replace(/[^+\d]/g, '');
  };


  render() {
    const { goBack } = this.props.navigation;


    let data = [{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }];

    let checkData = [{
      value: 'Yes',
    }, {
      value: 'No',
    }]


    /* 2. Read the params from the navigation state */
    // const { params } = this.props.navigation.state;
    // const itemId = params ? params.itemId : null;
    // const otherParam = params ? params.otherParam : null;

    return (
      <SafeAreaView style={customStyle.baseContainer}>
        <ScrollView style={customStyle.scrollView}
        showsVerticalScrollIndicator={false}>

          {/* <Text style={customStyle.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text> */}

          <Dropdown
            label='Select Company'
            data={data}
          />



          <TextField
            label='First Name'
            secureTextEntry={false}
            keyboardType='email-address'
            // formatText={this.formatText}
            baseColor='rgba(0, 0, 0, .38)'
            //onSubmitEditing={this.onSubmit}
            margin="normal"
            variant="filled"
            onChangeText={text => this.setState({ password: text })}
            ref={this.fieldRef}
          />

          <TextField
            label='Last Name'
            secureTextEntry={false}
            keyboardType='email-address'
            // formatText={this.formatText}
            baseColor='rgba(0, 0, 0, .38)'
            //onSubmitEditing={this.onSubmit}
            onChangeText={text => this.setState({ password: text })}
            ref={this.fieldRef}
          />
          <TextField
            label='Email'
            secureTextEntry={false}
            keyboardType='email-address'
            // formatText={this.formatText}
            baseColor='rgba(0, 0, 0, .38)'
            //onSubmitEditing={this.onSubmit}
            onChangeText={text => this.setState({ password: text })}
            ref={this.fieldRef}
          />
          <TextField
            label='Passowrd'
            secureTextEntry={true}
            keyboardType='email-address'
            // formatText={this.formatText}
            baseColor='rgba(0, 0, 0, .38)'
            //onSubmitEditing={this.onSubmit}
            onChangeText={text => this.setState({ password: text })}
            ref={this.fieldRef}
          />

          <TextField
            label='Confirm Passowrd'
            secureTextEntry={true}
            keyboardType='email-address'
            // formatText={this.formatText}
            baseColor='rgba(0, 0, 0, .38)'
            //onSubmitEditing={this.onSubmit}
            onChangeText={text => this.setState({ password: text })}
            ref={this.fieldRef}
          />
          <TextField
            label='Mobile Number'
            secureTextEntry={false}
            keyboardType='number-pad'
            formatText={this.formatText}
            baseColor='rgba(0, 0, 0, .38)'
            //onSubmitEditing={this.onSubmit}
            onChangeText={text => this.setState({ password: text })}
            ref={this.fieldRef}
          />
          <TextField
            label='Address'
            secureTextEntry={false}
            keyboardType='email-address'
            // formatText={this.formatText}
            baseColor='rgba(0, 0, 0, .38)'
            //onSubmitEditing={this.onSubmit}
            onChangeText={text => this.setState({ password: text })}
            ref={this.fieldRef}
          />

          <TextField
            label='DL Number'
            secureTextEntry={false}
            keyboardType='email-address'
            // formatText={this.formatText}
            baseColor='rgba(0, 0, 0, .38)'
            //onSubmitEditing={this.onSubmit}
            onChangeText={text => this.setState({ password: text })}
            ref={this.fieldRef}
          />


          <Dropdown
            label='Legally allowed to work in Canada'
            data={checkData}
          />
          <Dropdown
            label='Are you a Canadian resident'
            data={checkData}
          />
          <Text style={customStyle.headerText}>
            Upload / Scan Driving Licence
          </Text>


          <View style={customStyle.customView}>

            <Text style={{
              paddingBottom: 5,
              paddingTop: 10,
              fontSize: 15,
              backgroundColor: '#fff'
            }}>
              Upload Profile Image
          </Text>
            <RaisedTextButton title='Browse'
              color='grey'
              titleColor='white'
              onPress={this.uploadProfileImage.bind(this)}
            />
            <Text style={{
              paddingBottom: 5,
              paddingTop: 10,
              fontSize: 15,
              backgroundColor: '#fff'
            }}>
              Upload Licence front
          </Text>

            <RaisedTextButton title='Browse'
              color='grey'
              titleColor='white'
              onPress={this.uploadLicenceImage.bind(this)}
            />

            <Text style={{
              paddingBottom: 5,
              paddingTop: 10,
              fontSize: 15,
              backgroundColor: '#fff'
            }}>
              Upload Licence back
          </Text>

            <RaisedTextButton title='Browse'
              color='grey'
              titleColor='white'
              onPress={this.uploadProfileImage.bind(this)}
            />

            <Text style={{
              paddingBottom: 5,
              paddingTop: 10,
              fontSize: 15,
              backgroundColor: '#fff'
            }}>
              Upload SIN Card
          </Text>

            <RaisedTextButton title='Browse'
              color='grey'
              titleColor='white'
              onPress={this.uploadProfileImage.bind(this)}
            />


            <Text style={{
              paddingBottom: 5,
              paddingTop: 10,
              fontSize: 15,
              backgroundColor: '#fff'
            }}>
              Scan back of driver Licence barcode          </Text>

            <RaisedTextButton title='Browse'
              color='grey'
              titleColor='white'
              onPress={this.uploadProfileImage.bind(this)}
            />
          </View>


          <RaisedTextButton title='SIGN UP'
            color='blue'
            titleColor='white'
            onPress={this.submitInfo.bind(this)}
          />


        </ScrollView>

      </SafeAreaView>
    );
  }
}



const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  logo: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 80,
    backgroundColor: 'green',
    width: 170,
    height: 170,

  },
  formContainer: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    justifyContent: 'space-evenly',

  },



  bgStyle: {
    paddingLeft: 15,
    flex: 1,
    flexDirection: 'row',

  }

});


export default SignupScreen




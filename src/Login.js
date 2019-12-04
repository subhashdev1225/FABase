import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Alert,
    Image,
} from 'react-native';
import {
    TextField,
    FilledTextField,
    OutlinedTextField,
} from 'react-native-material-textfield';
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';
import Loader from './appComponent/Loader';







export default class Login extends React.Component {

    //Navigation option to create menu in header
    static navigationOptions = ({ navigation }) => {
        return {
            //Heading/title of the header
            //Heading style
            headerStyle: {
                backgroundColor: '#3A7DB1',
            },
            //Heading text color
            headerTintColor: 'white',

            headerLeft: (
                <View style={styles.bgStyle}>
                    <Image style={{ marginLeft: 20, width: 40, alignItems: 'center', height: 45 }}
                        source={require('./assets/image/transparentLogo.png')}
                    >
                    </Image>

                    <Text
                        style={{
                            color: 'white',
                            marginLeft: 20,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            alignContent: 'center',
                            fontSize: 20,

                        }}>
                        LOGIN  
                        </Text>

                </View>
            ),
        };
    };


    //---------------- constructor   ------------

    constructor(props) {
        super(props);

        this.state = {

            isloading: false,
            username: '',
            password: '',
        }
    }

    fieldRef = React.createRef();



    formatText = (text) => {
        return text.replace(/[^+\d]/g, '');
    };

    onSubmit = () => {
        let { current: field } = this.fieldRef;

        console.log(field.value());


    };

// render method ----
    render() {
        return (

            <View style={styles.container}>

                <Loader
                    loading={this.state.isloading} />

                <View style={styles.formContainer}>
                    <Image
                        style={styles.logo}
                        source={require('./assets/FA_Driver_images/logo.png')} >
                    </Image>

                    <TextField
                        label='Email'
                        secureTextEntry={false}
                        keyboardType='email-address'
                        // formatText={this.formatText}
                        baseColor='rgba(0, 0, 0, .38)'
                        onChangeText={text => this.setState({ username: text })}
                        ref={this.fieldRef}
                    />

                    <TextField
                        label='Password'
                        secureTextEntry={false}
                        keyboardType='email-address'
                        // formatText={this.formatText}
                        baseColor='rgba(0, 0, 0, .38)'
                        onChangeText={text => this.setState({ password: text })}
                        ref={this.fieldRef}
                    />


                    <TextButton title='FORGOT PASSWORD ?'
                        color='white'
                        titleColor='#3A7DB1'
                        onPress={this._openPasswordScreen.bind(this)}
                    />

                    <View style={styles.buttonContainer}>

                        <RaisedTextButton title='SignUp'
                            color='#3A7DB1'
                            titleColor='white'
                            onPress={this._openSignUpScreen.bind(this)}
                        />
                        <RaisedTextButton title='Login'
                            color='#3A7DB1'
                            titleColor='white'
                            onPress={this._validateLoginInfo.bind(this)}
                        />
                    </View>

                </View>
            </View>
        );
    }

    //function calling

    _openDashboard() {
        this.props.navigation.navigate('Dashboard')
    }
    //function calling
    _openSignUpScreen() {
        this.props.navigation.navigate('SignupScreen')
    }

    //function calling
    _openPasswordScreen() {
        this.props.navigation.navigate('PasswordScreen')
    }

    // _checkLogin 

    _validateLoginInfo() {
        const { username, password } = this.state

        if (username.length == 0) {
            Alert.alert('Please enter UserName')
        }
        else if (password.length == 0) {
            Alert.alert('Please enter Password')
        }

        else {
            this._verifyUserCredentail()
        }

    }

    _verifyUserCredentail() {

        const { username, password } = this.state

        if ((username.length > 0) && (password.length > 0)) {
            this.setState({
                isloading: true
            });

            var form = new FormData();
            form.append('email', username);
            form.append('password', password);

            fetch('http://demo12.mediatrenz.com/barcode/Api/driver_v2/log.php',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'multipart/form-data'
                    },
                    body: form,
                })
                .then((response) => response.json())
                .then((responseJson) => {

                    this.setState({
                        isloading: false
                    });

                    this.props.navigation.navigate('Dashboard', {
                        userData: responseJson,
                        navParam: 'User DashBoard'
                    });



                });
        } else {
            Alert.alert('Login credential Incorrect')
        }
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
        paddingLeft: 30,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

    }

});

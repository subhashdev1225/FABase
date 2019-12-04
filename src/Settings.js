import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';



export default class Settings extends React.Component {
  render() {


    return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>
        <Button
                    title='Logout'
                    onPress={this._logpoutOption.bind(this)}>
                </Button>
      </View>

    );

  }

   //function calling
   _logpoutOption() {
    const {navigate} = this.props.navigation
    navigate('Login', { name: 'Brent' })
  }

}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center'
  }
});


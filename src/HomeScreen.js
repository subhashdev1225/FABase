import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';


export default class HomeScreen extends React.Component {


  _openDetail() {
    this.props.navigation.navigate('DetailScreen')
  }

  


  render() {

    return (
      <View style={styles.container}>
        <Text>HomeScreen Screen</Text>
        <Button
          title='Detail Screen'
          onPress={this._openDetail.bind(this)}
        />

      </View>

    );

  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center'
  }
});


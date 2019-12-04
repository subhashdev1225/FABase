/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'


import SignupScreen from './src/SignupScreen'
import Login from './src/Login'
import Profile from './src/Profile';
import Summary from './src/Summary';
import HomeScreen from './src/HomeScreen';
import Settings from './src/Settings';
import DetailScreen from './src/DetailScreen';
import PasswordScreen from './src/PasswordScreen';


class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const homeStack =  createStackNavigator ({
  Home: {
    screen: HomeScreen,
    navigationOptions : ({navigation}) => {
      return {
        headerTitle : 'Home',
        headerLeft: (
          <TouchableOpacity style={{ paddingLeft: 10 }} onPress={navigation.openDrawer} hitSlop={{ paddingLeft: 10, top: 20, bottom: 20, left: 50, right: 50 }}>
            <Image style={{ paddingLeft: 20, width: 20, height: 20 }} source={require('./src/assets/image/menu.png')} />
          </TouchableOpacity>
        )
      };
    }
  },
  DetailScreen: {
    screen: DetailScreen,
    navigationOptions : ({navigation}) => {
      return {
        headerTitle : 'Detail'
      };
    
  }
}
},
{
  defaultNavigationOptions : {
    gesturesEnabled : false
  }
}


);

const ProfileStack =  createStackNavigator ({
  Profile: {
    screen: Profile,
    navigationOptions : ({navigation}) => {
      return {
        headerTitle : 'Profile',
        headerLeft: (
          <TouchableOpacity style={{ paddingLeft: 10 }} onPress={navigation.openDrawer} hitSlop={{ paddingLeft: 10, top: 20, bottom: 20, left: 50, right: 50 }}>
            <Image style={{ paddingLeft: 20, width: 20, height: 20 }} source={require('./src/assets/image/menu.png')} />
          </TouchableOpacity>

        )
      };
    }
  }
});
const SettingStack =  createStackNavigator ({
  Settings: {
    screen: Settings,
    navigationOptions : ({navigation}) => {
      return {
        headerTitle : 'Settings',
        headerLeft: (
          <TouchableOpacity style={{ paddingLeft: 10 }} onPress={navigation.openDrawer} hitSlop={{ paddingLeft: 10, top: 20, bottom: 20, left: 50, right: 50 }}>
            <Image style={{ paddingLeft: 20, width: 20, height: 20 }} source={require('./src/assets/image/menu.png')} />
          </TouchableOpacity>

        )
      };
    }
  }

});


const SummaryStack =  createStackNavigator ({
  Summary: {
    screen: Summary,
    navigationOptions : ({navigation}) => {
      return {
        headerTitle : 'Summary',
        headerLeft: (
          <TouchableOpacity style={{ paddingLeft: 10 }} onPress={navigation.openDrawer} hitSlop={{ paddingLeft: 10, top: 20, bottom: 20, left: 50, right: 50 }}>
            <Image style={{ paddingLeft: 20, width: 20, height: 20 }} source={require('./src/assets/image/menu.png')} />
          </TouchableOpacity>

        )
      };
    }
  }

});



const loginStack =  createStackNavigator ({
  
  Login: {
    screen: Login,
    navigationOptions : ({navigation}) => {
      return {
        
         headerTitle : '',
      };
    }
  },
  SignupScreen: {
    screen: SignupScreen,
    navigationOptions : ({navigation}) => {
      return {
        //  headerTitle : 'SignupScreen'
      };
    
  }
  },

  PasswordScreen: {
    screen: PasswordScreen,
    navigationOptions : ({navigation}) => {
      return {
        headerTitle : 'PasswordScreen'
      };
    
  }
  }


});





//-----------------------
const dashboardTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: homeStack,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Image style={{ paddingLeft: 20, width: 20, height: 20 }} source={require('./src/assets/image/home.png')} />
        )
      }
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <Image style={{ paddingLeft: 20, width: 20, height: 20 }} source={require('./src/assets/image/avatar.png')} />
        )
      }
    },
    Settings: {
      screen: SettingStack,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor }) => (
          <Image style={{ paddingLeft: 20, width: 20, height: 20 }} source={require('./src/assets/image/settings.png')} />
        )
      }
    }

  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
        header : null // remove tab navigation 
      };
    }
  }
);

//-----------------------

const dashboardStackNavigator = createStackNavigator(
  {
    dashboardTabNavigator: dashboardTabNavigator
    },

  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (

          <TouchableOpacity style={{ paddingLeft: 10 }} onPress={navigation.openDrawer} hitSlop={{ paddingLeft: 10, top: 20, bottom: 20, left: 50, right: 50 }}>
            <Image style={{ paddingLeft: 20, width: 20, height: 20 }} source={require('./src/assets/image/menu.png')} />
          </TouchableOpacity>


        )
      };
    }
  }

);


//-----------------------

const appDrawerNavigator = createDrawerNavigator({
  Dashboard: { screen: dashboardStackNavigator },
  Summary: { screen: SummaryStack }

});

//-----------------------
// remove switch to stack navigator
const appSwitchNavigator = createSwitchNavigator({
  Login: { screen: loginStack },
  Dashboard: { screen: appDrawerNavigator }
});

//----------******---------------
const AppContainer = createAppContainer(appSwitchNavigator)



//----style sheets
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center'
  }
});

export default App;


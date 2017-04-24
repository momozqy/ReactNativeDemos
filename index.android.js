/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React,{Component} from 'react';
import {
  AppRegistry
} from 'react-native';
import {TeaNavigator} from 'teaset';
import  TeaRoot from './app/root.js'
import SplashScreen from 'react-native-splash-screen'
export default class ReactNativeDemos extends Component {
  componentDidMount(){
      SplashScreen.hide();
  }
  render(){
      return <TeaNavigator rootView={<TeaRoot />} />;
  }
}
AppRegistry.registerComponent('ReactNativeDemo', () => ReactNativeDemos);

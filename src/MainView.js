import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

import { styles } from './styles';
//import { MESSAGES } from '../config/messages';
//import { COLOR } from '../config/colors';


export default class MainView extends Component {

	static navigationOptions = {
		//title: MESSAGES.HOME,
	};


  render() {

  	const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Pmz-Base React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit ./src/app.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        
      </View>
    );
  }
}

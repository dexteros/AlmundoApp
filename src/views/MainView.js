import React, { Component } from 'react';
import { View, Text, Button, ScrollView } from "react-native";
import Slideshow from 'react-native-image-slider-show';
import {styles} from '../styles';

import ItemBox from './partials/ItemBox';


export default class MainView extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>

        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />
        <ItemBox />

      </ScrollView>
    );
  }
}

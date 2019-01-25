import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Button, Image } from "react-native";
import Slideshow from 'react-native-image-slider-show';
import {StartBox} from '@components/StartBox';

export default class ItemBox extends Component {
  render() {

    const item = { name, stars, price, images, _id, location} = this.props.hotel;

    return (
      <View style={{flex:1, padding:3}}>
            <Slideshow
              dataSource={[
                { url:images[0] },
                { url:images[1] },
                { url:images[2] }
            ]}/>

	           <Text style={styles.title}>{item.name}</Text>
                    <View style={{flex:1, padding:5, flexDirection:'row', justifyContent:'space-between',alignItems: 'center',}}>
                      <StartBox starts={item.stars} />
                      <Text style={styles.price}>ARS: {item.price}</Text>
                    </View>
		</View>
    );
  }
}


const styles = StyleSheet.create({
  title: {
    color: '#444',
    fontWeight: 'bold',
    fontSize: 20,
  },
  price: {
    color: '#f5d900',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

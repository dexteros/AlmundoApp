import React, { Component } from 'react';
import { View, Text, Button } from "react-native";
import Slideshow from 'react-native-image-slider-show';
import {styles} from '../../styles';

export default class ItemBox extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Slideshow
          dataSource={[
            { url:'http://placeimg.com/640/480/arch' },
            { url:'http://placeimg.com/640/480/animals' },
            { url:'http://placeimg.com/640/480/nature/sepia' }
          ]}/>
        <Text>Main Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details',
            {
              itemId: 12345678,
              title: 'Nombre del Hotel',
            }
          )}
        />
      </View>
    );
  }
}

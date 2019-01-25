import React, { Component } from 'react';
import { View, Text, Button, ScrollView, ListView, ActivityIndicator, StyleSheet } from "react-native";
import ItemBox from '@components/ItemBox';
import ItemList from '@components/ItemList';
import {getHotels} from '@service/Service';



export default class MainView extends Component {

  static navigationOptions = {
    title: 'Almundo',
  };

  state = {
        isLoading:true,
        hotels:[]
  };

  constructor(props){
		super(props);
	}

  render() {

    if(this.state.isLoading){
     return(
       <View style={[styles.container, styles.horizontal]}>
         <ActivityIndicator size="large" color="#0000ff" />
       </View>
     )
   }

    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ItemList hotels={this.state.hotels} navigator={this.props.navigation} />
      </ScrollView>
    );
  }


  componentDidMount(){
    return getHotels()
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          hotels: responseJson.hotels,
        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});

import React, { Component } from 'react';
import { StyleSheet, ListView } from 'react-native';

import ItemBox from '@components/ItemBox';

export default class ItemList extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => { r1 !== r2 }});
    this.state = {
      dataSource: ds
    }
  }

  updateDataSource = (data) => {
    return this.state.dataSource.cloneWithRows(data);
  }


  render() {
    let hotels = this.props.hotels || [];
    return (
      <ListView
        enableEmptySections={true}
        dataSource={this.updateDataSource(hotels)}
        renderRow={(hotel) => <ItemBox hotel={hotel} navigator={this.props.navigator} />}
      />
    );
  }
}

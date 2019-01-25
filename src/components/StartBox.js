import React, { Component } from 'react';
import { Image } from "react-native";

export class StartBox extends Component {


  render() {

    let image = require('../assets/s1.jpg');

    if (this.props.starts == 1) { image = require('../assets/s1.jpg'); }

    if (this.props.starts == 2) { image = require('../assets/s2.jpg'); }

    if (this.props.starts == 3) { image = require('../assets/s3.jpg'); }

    if (this.props.starts == 4) { image = require('../assets/s4.jpg'); }

    if (this.props.starts == 5) { image = require('../assets/s5.jpg'); }

    return (
          <Image
          style={{width: 100, height: 50}}
          source={image}
          resizeMode={'contain'}
          />
    );
  }
}

import React, { Component } from 'react';
import { Text, ActivityIndicartor } from 'react-native';
import { Font } from 'expo';
import styles from './Styles';

export default class ProductsAppText extends Component {

  async componentDidMount() {
    await Font.loadAsync({
      vincHand: require('../assets/fonts/VINCHAND.ttf'),
    });
  }

  render() {
    return  (
      <Text style={styles.text}>{this.props.children}</Text>
    );
  }
}

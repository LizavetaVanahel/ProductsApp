import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import ProductsAppText from './ProductsAppText';
import PropTypes from 'prop-types';
import styles from './Styles';

export default class Product extends React.Component {
  render() {
    const { logo, label } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Image style={styles.poductLogo} source={logo} />
        <ProductsAppText style={styles.title}>{label}</ProductsAppText>
        <ProductsAppText
          style={styles.productParagraph}
          multiline={true}
          >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedoveiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </ProductsAppText>
        <TouchableOpacity style={styles.button}
          onPress={() => this.props.navigation.navigate('ProductListScreen')}>
          <ProductsAppText>All Products</ProductsAppText>
        </TouchableOpacity>
      </View>
    );
  }
}

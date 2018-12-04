import * as React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Styles';

export default function Product({ label, logo, callback }) {
  return (
    <View style={styles.container}>
      <Image style={styles.poductLogo} source={logo} />
      <Text style={styles.title}>{label}</Text>
      <TextInput
        style={styles.productParagraph}
        multiline={true}
        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedoveiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <TouchableOpacity onPress={callback}>
        <Text style={styles.button}>All Products</Text>
      </TouchableOpacity>
    </View>
  );
}
Product.propTypes = {
  label: PropTypes.string,
  logo: PropTypes.any,
  callback: PropTypes.func.isRequired,
};

import * as React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import ProductsAppText from './ProductsAppText';
import styles from './Styles';

export default function ProductsListItem({ onPress, label, logo }) {
  return (
    <View style={styles.leftContainer}>
      <Image style={styles.productViewLogo} source={logo} />
      <ProductsAppText style={styles.productViewParagraph}>{label}</ProductsAppText>
      <TouchableOpacity style={styles.rightContainer} onPress={onPress}>
        <Image
          style={styles.productViewLogo}
          source={require('../assets/arrow.png')}
        />
      </TouchableOpacity>
    </View>
  );
}
ProductsListItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string,
  logo: PropTypes.any,
};

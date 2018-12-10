import * as React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Styles';

export default function ProductsListItem({ onPress, label, logo }) {
  return (
    <View style={styles.leftContainer}>
      <Image style={styles.productViewLogo} source={logo} />
      <Text style={styles.productViewParagraph}>{label}</Text>
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

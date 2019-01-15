import * as React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import ProductsAppText from './ProductsAppText';
import styles from './Styles';

export default class NotificationModal extends React.Component {
  render() {
    return (
      <Modal animationType="slide" transparent={false}>
          <View style={styles.modal}>
            <ProductsAppText>
              "We can't proceess your request at the moment. Please try again"
            </ProductsAppText>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                this.props.navigation.navigate('LoginScreen');
              }}>
              <ProductsAppText>Close</ProductsAppText>
            </TouchableOpacity>
          </View>
      </Modal>
    );
  }
}
import * as React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import styles from './Styles';

export default class NotificationModal extends React.Component<{}> {
  render() {
    return (
      <Modal animationType="slide" transparent={false}>
          <View style={styles.modal}>
            <Text>
              "We can't proceess your request at the moment. Please try again"
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                this.props.navigation.navigate('LoginScreen');
              }}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
      </Modal>
    );
  }
}

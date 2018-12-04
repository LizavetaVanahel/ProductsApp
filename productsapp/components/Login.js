import * as React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import styles from './Styles';
import ProductsList from './ProductsList';
export default class Login extends React.Component<{}> {
  constructor(props) {
    super(props);
    this.state = { showProductsList: false };
  }

  componentDidMount() {
    Font.loadAsync({
      vincHand: require('../assets/fonts/VINCHAND.ttf'),
    });
  }

  showProductsList = () => {
    this.setState({ showProductsList: true });
  };

  render() {
    if (!this.state.showProductsList) {
      return (
        <View style={styles.container}>
          <Image
            style={styles.loginLogo}
            source={require('../assets/cart.png')}
          />
          <Text style={styles.title}>Friday's shop</Text>
          <TextInput
            placeholderTextColor={'#39C2D7'}
            style={styles.loginFieldText}
            placeholder="email"
          />
          <TextInput
            placeholderTextColor={'#39C2D7'}
            style={styles.loginFieldText}
            placeholder="Text box"
          />
          <TouchableOpacity onPress={this.showProductsList}>
            <Text style={styles.button}>login</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View>
          <ProductsList />
        </View>
      );
    }
  }
}

import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './Styles';
import ProductsAppText from './ProductsAppText';

export default class Login extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleClick = () => {
    return fetch(
      'http://ecsc00a02fb3.epam.com/index.php/rest/V1/integration/customer/token',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.message == null) {
          this.props.navigation.navigate('ProductListScreen');
        } else {
          this.props.navigation.navigate('NotificationScreen');
        }
      })
      .catch(error => {
        Alert.alert('Login failed due to:' + error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.loginLogo}
          source={require('../assets/cart.png')}
        />
        <ProductsAppText style={styles.title}>Friday's shop</ProductsAppText>
        <TextInput
          placeholderTextColor={'#39C2D7'}
          style={styles.loginFieldText}
          placeholder="email"
          onChangeText={username => this.setState({ username })}
        />
        <TextInput
          placeholderTextColor={'#39C2D7'}
          style={styles.loginFieldText}
          placeholder="Text box"
          onChangeText={password => this.setState({ password })}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleClick}>
          <ProductsAppText>login</ProductsAppText>
        </TouchableOpacity>
      </View>
    );
  }
}

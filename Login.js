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
import { Font } from 'expo';
import styles from './Styles';
export default class Login extends React.Component {
  state = {
    isCredValid: false,
    username: '',
    password: '',
    fontLoaded: false,
  };

  componentWillMount() {
    Font.loadAsync({
      vincHand: require('../assets/fonts/VINCHAND.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
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
          this.props.navigation.navigate('ProductsListScreen');
        } else {
          Alert.alert('Your credentials are invalid. Please try again');
        }
      })
      .catch(error => {
        Alert.alert('Login failed due to:' + error);
      });
  };

  render() {
    if (!this.state.fontLoaded) {
      return <ActivityIndicator />;
    }
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
          onChangeText={username => this.setState({ username })}
        />
        <TextInput
          placeholderTextColor={'#39C2D7'}
          style={styles.loginFieldText}
          placeholder="Text box"
          onChangeText={password => this.setState({ password })}
        />
        <TouchableOpacity onPress={this.handleClick}>
          <Text style={styles.button}>login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

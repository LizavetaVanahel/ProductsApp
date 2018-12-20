import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  NotificationModal,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Font } from 'expo';
import styles from './Styles';
import ProductList from './ProductList';
export default class Login extends React.Component<{}> {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
    this.state = { username: '' };
    this.state = { password: '' };
    this.state = { fontLoaded: false };
  }

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
        console.log(responseJson);
        this.setState(
          {
            isLoading: false,
          },
          function() {}
        );
      })
      .catch(error => {
        this.props.navigation.navigate('NotificationModal');
        throw new Error(error);
      });
  };

  render() {
    if (this.state.isLoading || !this.state.fontLoaded) {
      this.props.navigation.navigate('NotificationModal');
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
        <TouchableOpacity
          onPress={() =>
            this.handleClick().then(
              this.props.navigation.navigate('ProductListScreen')
            )
          }>
          <Text style={styles.button}>login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

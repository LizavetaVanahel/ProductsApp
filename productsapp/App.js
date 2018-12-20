import * as React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { Constants, Font } from 'expo';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from './components/Login';
import ProductList from './components/ProductList';
import Product from './components/Product';
import NotificationModal from './components/NotificationModal';

import { Card } from 'react-native-paper';

class App extends React.Component<{}> {
    constructor(props) {
     super(props);
    this.state = { fontLoaded: false };
  }
    componentWillMount() {
    Font.loadAsync({
      vincHand: require('../assets/fonts/VINCHAND.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    if (!this.state.fontLoaded) {
    <View>
        <ActivityIndicator />
      </View>
    } else {
    return (
      <View>
        <AppStackNavigator />
      </View>
    );
    }
  }
}

const AppStackNavigator = createStackNavigator({
  LoginScreen: Login,
  ProductListScreen: {
    screen: ProductList,
    navigationOptions: ({ navigation }) => ({
      title: `ProductList`,
    }),
  },
  ProductScreen: {
    screen: Product,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.label} `,
    }),
  },
  NotificationModal: NotificationModal,
});

export default createAppContainer(AppStackNavigator);

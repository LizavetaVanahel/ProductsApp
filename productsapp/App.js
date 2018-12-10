import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// You can import from local files
import Login from './components/Login';
import ProductsList from './components/ProductsList';
import Product from './components/Product';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

class App extends React.Component<{}> {
  render() {
    return (
      <View>
        <AppStackNavigator />
      </View>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  LoginScreen: Login,
  ProductsListScreen: {
    screen: ProductsList,
    navigationOptions: ({ navigation }) => ({
      title: `ProductsList`,
    }),
  },
  ProductScreen: {
    screen: Product,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.label} `,
    }),
  },
});

export default createAppContainer(AppStackNavigator);

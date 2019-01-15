import * as React from 'react';
import { Text, View } from 'react-native';
import { Constants, Font } from 'expo';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from './components/Login';
import ProductList from './components/ProductList';
import Product from './components/Product';
import NotificationModal from './components/NotificationModal';

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
  NotificationScreen: NotificationModal
});

export default createAppContainer(AppStackNavigator);

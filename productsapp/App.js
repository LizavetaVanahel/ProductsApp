import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import Login from './components/Login';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component<{}> {

  render() {
    return (
      <View>
        <Login />
      </View>
    );
  }
}

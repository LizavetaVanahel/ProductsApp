import * as React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import ProductsList from '/ProductsList';
import { Font } from 'expo';
import styles from './Styles';

export default class Login extends React.Component<{}> {
   componentDidMount() {
    Font.loadAsync({
      'vincHand': require('../assets/fonts/VINCHAND.ttf'),
    });
  }
  constructor(props){
    super(props)
    this.state = { showResults: true };
  }

  showProductsList = () => {
       this.setState({ showResults: false })
   }

  render() {
      if (this.state.showResults == true) {
       return (
      <View style={styles.container}>
        <Image style={styles.loginLogo} source={require('../assets/cart.png')} />
         <Text style={styles.title}>
           Friday's shop
        </Text>
         <TextInput placeholderTextColor={'#39C2D7'}
          style={styles.loginFieldText}
          placeholder="email"
        />
        <TextInput  placeholderTextColor={'#39C2D7'}
          style={styles.loginFieldText}
          placeholder="Text box"
        />
          <TouchableOpacity onPress={this.showProductsList} >
         <Text style={styles.button}>
           login
        </Text>
    </TouchableOpacity>
      </View>
      ); } else {
        return ( 
          <View style = {styles.view}>
          <ProductsList/>
          </View>
        );
        }
    }
}



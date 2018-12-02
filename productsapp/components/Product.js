import * as React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import ProductsList from '/ProductsList';
import { Font } from 'expo';
import styles from './Styles';

export default class Product extends React.Component<{}> {

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
        <Image style={styles.poductLogo} source={require('../assets/cart.png')} />
         <Text style={styles.title}>
           Product 1
        </Text>
         <TextInput 
          style={styles.productParagraph}
          multiline = {true}
          placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedoveiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
          <TouchableOpacity onPress={this.showProductsList} >
       <Text style={styles.button}>
           All Products
        </Text>
    </TouchableOpacity>
      </View>
    ); } else {
        return ( 
          <View>
          <ProductsList/>
          </View>
        );
      }
  }
}

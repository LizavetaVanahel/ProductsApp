import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Product from '/Product'
import { Font } from 'expo';
import ProductView from './ProductView';
import styles from './Styles';

export default class ProductsList extends React.Component<{}> {
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
        <View style={styles.productListContainer}>
         <Text style={styles.title}>
           Products
        </Text>
        <ProductView
          onPress = {this.showProductsList} 
          label='Product 1'
          logo={require('../assets/map.png')}
        />
        <ProductView
          onPress = {this.showProductsList} 
          label='Product 2'
          logo={require('../assets/smile.png')}
        />
        <ProductView
          onPress = {this.showProductsList} 
          label='Product 3'
          logo={require('../assets/star.png')}
        />
        <ProductView
          onPress = {this.showProductsList} 
          label='Product 4'
          logo={require('../assets/camera.png')}
        />
        <ProductView
          onPress = {this.showProductsList} 
          label='Product 5'
          logo={require('../assets/gift.png')}
        />
        <ProductView
          onPress = {this.showProductsList} 
          label='Product 6'
          logo={require('../assets/add.png')}
        />
        <ProductView
          onPress = {this.showProductsList} 
          label='Product 7'
          logo={require('../assets/cart.png')}
        />
        <ProductView
          onPress = {this.showProductsList} 
          label='Product 8'
          logo={require('../assets/rugby-ball.png')}
        />
   </View>
    ); } else {
        return ( 
          <View>
          <Product/>
          </View>
        );
      }
  }
}

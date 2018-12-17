import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Product from '/Product';
import { Font } from 'expo';
import ProductView from './ProductView';
import styles from './Styles';

export default class ProductsList extends React.Component<{}> {
  constructor(props) {
    super(props);
    this.state = { showProduct: false };
  }

  componentDidMount() {
    Font.loadAsync({
      vincHand: require('../assets/fonts/VINCHAND.ttf'),
    });
  }

  showProduct = () => {
    this.setState(previousState => ({
      showProduct: !previousState.showProduct,
    }));
  };

  render() {
    if (this.state.showProduct) {
      return (
        <View>
          <Product
            callback={this.showProduct}
            label="Product 1"
            logo={require('../assets/map.png')}
          />
        </View>
      );
    }
    return (
      <View style={styles.productListContainer}>
        <Text style={styles.title}>Products</Text>
        <ProductView
          onPress={this.showProduct}
          label="Product 1"
          logo={require('../assets/map.png')}
        />
        <ProductView
          onPress={this.showProduct}
          label="Product 2"
          logo={require('../assets/smile.png')}
        />
        <ProductView
          onPress={this.showProduct}
          label="Product 3"
          logo={require('../assets/star.png')}
        />
        <ProductView
          onPress={this.showProduct}
          label="Product 4"
          logo={require('../assets/camera.png')}
        />
        <ProductView
          onPress={this.showProduct}
          label="Product 5"
          logo={require('../assets/gift.png')}
        />
        <ProductView
          onPress={this.showProduct}
          label="Product 6"
          logo={require('../assets/add.png')}
        />
        <ProductView
          onPress={this.showProduct}
          label="Product 7"
          logo={require('../assets/cart.png')}
        />
        <ProductView
          onPress={this.showProduct}
          label="Product 8"
          logo={require('../assets/rugby-ball.png')}
        />
      </View>
    );
  }
}

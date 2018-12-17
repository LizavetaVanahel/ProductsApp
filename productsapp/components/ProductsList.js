import * as React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Product from './Product';
import { Font } from 'expo';
import ProductsListItem from './ProductsListItem';
import styles from './Styles';

export default class ProductsList extends React.Component<{}> {
  constructor(props) {
    super(props);
    this.state = { fontLoaded: false };
  }

  async componentWillMount() {
    await Font.loadAsync({
      vincHand: require('../assets/fonts/VINCHAND.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if (this.state.fontLoaded) {
      return (
        <View style={styles.productListContainer}>
          <Text style={styles.title}>Products</Text>
          <ProductsListItem
            onPress={(logo, label) => {
              this.props.navigation.navigate('ProductScreen', {
                logo: require('../assets/map.png'),
                label: 'Product 1',
              });
            }}
            label="Product 1"
            logo={require('../assets/map.png')}
          />
          <ProductsListItem
            onPress={() =>
              this.props.navigation.navigate('ProductScreen', {
                logo: require('../assets/smile.png'),
                label: 'Product 2',
              })
            }
            label="Product 2"
            logo={require('../assets/smile.png')}
          />
          <ProductsListItem
            onPress={() =>
              this.props.navigation.navigate('ProductScreen', {
                logo: require('../assets/star.png'),
                label: 'Product 3',
              })
            }
            label="Product 3"
            logo={require('../assets/star.png')}
          />
          <ProductsListItem
            onPress={() =>
              this.props.navigation.navigate('ProductScreen', {
                logo: require('../assets/camera.png'),
                label: 'Product 4',
              })
            }
            label="Product 4"
            logo={require('../assets/camera.png')}
          />
          <ProductsListItem
            onPress={() =>
              this.props.navigation.navigate('ProductScreen', {
                logo: require('../assets/gift.png'),
                label: 'Product 5',
              })
            }
            label="Product 5"
            logo={require('../assets/gift.png')}
          />
          <ProductsListItem
            onPress={() =>
              this.props.navigation.navigate('ProductScreen', {
                logo: require('../assets/add.png'),
                label: 'Product 6',
              })
            }
            label="Product 6"
            logo={require('../assets/add.png')}
          />
          <ProductsListItem
            onPress={() =>
              this.props.navigation.navigate('ProductScreen', {
                logo: require('../assets/cart.png'),
                label: 'Product 7',
              })
            }
            label="Product 7"
            logo={require('../assets/cart.png')}
          />
          <ProductsListItem
            onPress={() =>
              this.props.navigation.navigate('ProductScreen', {
                logo: require('../assets/rugby-ball.png'),
                label: 'Product 8',
              })
            }
            label="Product 8"
            logo={require('../assets/rugby-ball.png')}
          />
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
  }
}

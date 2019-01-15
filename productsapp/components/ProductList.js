import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import ProductsAppText from './ProductsAppText';
import styles from './Styles';

export default class ProductList extends Component {
  state = {
    loading: false,
    data: [],
    pageSize: 10,
    refreshing: false,
  };

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { pageSize } = this.state;
    const url = `http://ecsc00a02fb3.epam.com/rest/V1/products?searchCriteria[page_size]=${pageSize}`;
    this.setState({ loading: true });
    fetch(url, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.items,
          loading: false,
          refreshing: false,
        });
        console.log('Items', res);
      })
      .catch(error => {
        this.setState({ error, loading: false });
        console.log('Error', error);
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        pageSize: this.state.pageSize + 1,
        refreshing: true,
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        pageSize: this.state.pageSize + 1,
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  render() {
    return (
      <List containerStyle={styles.productList}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              button
              onPress={() =>
                this.props.navigation.navigate('ProductScreen', {
                  logo: require('../assets/cart.png'),
                  label: `Product: ${item.id}`,
                })
              }
              title={<ProductsAppText>{item.name}</ProductsAppText>}
              subtitle={
                <ProductsAppText>
                  Price: ${item.price == null ? 0 : item.price}
                </ProductsAppText>
              }
              containerStyle={styles.productList}
            />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={31}
        />
      </List>
    );
  }
}

import React, {Component} from 'react';

import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import Header from '../components/header';
import {inject, observer} from 'mobx-react';
import {StackActions} from '@react-navigation/native';

@inject('store')
@observer
export default class Products extends Component {
  backback = () => {
    const popAction = StackActions.pop(1);
    this.props.navigation.dispatch(popAction);
  };
  goToProductDetail = () => {
    const pushAction = StackActions.push('ProductDetail');
    this.props.navigation.dispatch(pushAction);
  };
  render() {
    return (
      <View>
        <Header title={'Ürünler'} />

        <View style={styles.categoryTitleContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Button
              color={'#370617'}
              title={'Geri'}
              onPress={() => {
                this.backback();
              }}
            />
            <Text style={styles.categoryTitle}>
              Kategori : {this.props.store.currentCategory}{' '}
            </Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.productsContainer}>
            {this.props.store.products.map((item, index) => (
              <View
                style={styles.products}
                key={('product-view' + index).toString()}>
                <Text
                  style={{alignSelf: 'center', paddingBottom: 5}}
                  key={('product-' + index).toString()}>
                  {' '}
                  {item.name}{' '}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    this.props.store.changeCurrentProduct({
                      searchProductId: item.id,
                      categoryname: item.category,
                    });

                    this.goToProductDetail();
                  }}>
                  <Image
                    key={('product-image-' + index).toString()}
                    style={styles.tinyLogo}
                    source={{
                      uri: item.img[0].imageUrl,
                    }}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  renderItemText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  categoryTitle: {
    fontSize: 25,
    alignSelf: 'center',
    padding: 10,
    color: 'white',
    marginLeft: 45,
  },
  categoryTitleContainer: {
    backgroundColor: '#a8dadc',
    direction: 'ltr',
    justifyContent: 'center',
  },
  productsContainer: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tinyLogo: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 7,
  },
  products: {
    width: 110,
    padding: 7,
  },
});

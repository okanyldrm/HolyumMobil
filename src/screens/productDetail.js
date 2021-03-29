import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions, Button} from 'react-native';
import {inject, observer} from 'mobx-react';
import ProductDetailComponent from '../components/ProductDetail';
//import { SliderBox } from "react-native-image-slider-box";
import {StackActions} from '@react-navigation/native';
import Header from '../components/header';
const {width} = Dimensions.get('window');
@inject('store')
@observer
export default class ProductDetail extends Component {
  backback = () => {
    const popAction = StackActions.pop(1);
    this.props.navigation.dispatch(popAction);
  };
  render() {
    return (
      <View>
        <Header title="Ürün Detay" />
        <Button
          title={'Geri'}
          onPress={() => {
            this.backback();
          }}
        />
        <ProductDetailComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  continer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  tinyLogo: {
    width: 300,
    height: 300,
    borderWidth: 1,
    borderRadius: 7,
  },
});

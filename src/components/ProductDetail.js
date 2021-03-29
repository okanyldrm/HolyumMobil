import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {inject, observer} from 'mobx-react';

//import {SliderBox} from 'react-native-image-slider-box';
const {width} = Dimensions.get('window');

@inject('store')
@observer
export default class ProductDetailComponent extends Component {
  state = {
    images: [],
  };

  funcImage() {
    this.props.store.currentProduct.img.map((item, index) => {
      this.setState(prev => ({
        images: [...prev.images, item.imageUrl],
      }));
    });
  }

  componentDidMount() {
    this.funcImage();
  }

  render() {
    return (
      <>
        <View style={styles.continer}>
          <Text style={{fontSize: 18}}>
            {' '}
            {this.props.store.currentProduct.name}{' '}
          </Text>

          <ScrollView style={{width: width}}>
            <View style={styles.imageSlider}>
              {/* <SliderBox sliderBoxHeight={400} images={this.state.images} /> */}
            </View>
            <View>
              <Text style={{fontSize: 20, paddingBottom: 7}}> Açıklama</Text>
              <View style={{borderBottomWidth: 1}}>
                <Text style={{padding: 7}}>
                  {' '}
                  {this.props.store.currentProduct.desc}
                </Text>
              </View>
            </View>
            <View
              style={{
                paddingLeft: 120,
                flexDirection: 'row-reverse',
              }}>
              <Text
                style={{
                  fontSize: 25,
                  paddingRight: 5,
                  borderWidth: 1,
                  backgroundColor: '#e9f5db',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                {' '}
                {this.props.store.currentProduct.price + ' ₺'}
              </Text>
              <Text style={{fontSize: 25, paddingTop: 10}}>Fiyat : </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  alert('Added Cart : ' + this.props.store.currentProduct.name);
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    paddingTop: 25,
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      borderWidth: 1,
                      alignSelf: 'center',
                      width: 170,
                      fontSize: 25,
                      borderRadius: 5,
                      padding: 15,
                      fontWeight: 'bold',
                      color: '#588b8b',
                    }}>
                    Sepete Ekle
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  continer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  imageSlider: {
    padding: 7,
    borderRadius: 10,
  },
});

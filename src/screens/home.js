import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StyleSheet,
  Button,
} from 'react-native';
import {StackActions} from '@react-navigation/native';
import Header from '../components/header';
import {inject, observer} from 'mobx-react';
const {width} = Dimensions.get('window');

@inject('store')
@observer
export default class Home extends Component {
  state = {
    // categories: [
    //   { id: 1, name: "Tekstil" },
    //   { id: 2, name: "Teknoloji" },
    //   { id: 3, name: "Mutfak" },
    // ],
    currentCategory: {id: null, name: ''},
    currentProduct: [],
  };

  goToCategory = () => {
    const pushAction = StackActions.push('Categories');
    this.props.navigation.dispatch(pushAction);
  };

  goToProduct = () => {
    const pushAction = StackActions.push('Products');
    this.props.navigation.dispatch(pushAction);
  };

  categoryUrl = 'https://localhost:44380/categories/GetAllCategory';

  //API SORUN
  // getCategory = () => {
  //   fetch(this.categoryUrl)
  //     .then((response) => response.json())
  //     .then((json) => this.setState({ categories: json }));

  //   console.log(this.state.categories);
  // };

  onpressButton = item => {
    this.props.store.changeCurrentCategory({categoryName: item.name});
    this.goToProduct();
  };

  getPosts = () => {
    fetch('https://10.0.2.2:44380/categories/GetAllCategory')
      .then(response => response.json()) //Gelen veriri Json'a çevrilir.
      .then(data => {
        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  componentDidMount() {
    this.getPosts();
  }
  render() {
    return (
      <View>
        <Header title={'Kategoriler'} />
        <SafeAreaView>
          <FlatList
            data={this.props.store.allcategories}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View
                style={{
                  width: width,
                  padding: 20,
                  borderBottomWidth: 1,
                  borderColor: 'lightgray',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    this.onpressButton(item);
                  }}>
                  <Text style={styles.renderItemText}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </SafeAreaView>
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
});

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'mobx-react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/login';
import RegisterScreen from './src/screens/register';
import ProdutDetailScreen from './src/screens/productDetail';
import ProductsScreen from './src/screens/products';
import CategoryScreen from './src/screens/category';
import HomeScreen from './src/screens/home';
import store from './src/stores/MainStore';
import firebase from 'firebase';
const Stack = createStackNavigator();

export default class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBS-qFNE1Drd8bRG7JaXB6zssmjJh_9eiY',
      authDomain: 'holyumdb.firebaseapp.com',
      projectId: 'holyumdb',
      storageBucket: 'holyumdb.appspot.com',
      messagingSenderId: '295458299433',
      appId: '1:295458299433:web:5796168239b19c53588638',
    });
  }
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator headerMode={'none'}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ProductDetail" component={ProdutDetailScreen} />
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

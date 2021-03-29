import React, {Component} from 'react';
import {StackActions} from '@react-navigation/native';
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Header from '../components/header';
import firebase from 'firebase';

import {Spinner} from '../components/common/spinner';

const {width} = Dimensions.get('window');
export default class Register extends Component {
  state = {
    email: '',
    password: '',
    loggedIn: false,
    loading: false,
  };
  goToCategory = () => {
    const pushAction = StackActions.push('Home');
    this.props.navigation.dispatch(pushAction);
  };
  goToLogin = () => {
    const pushAction = StackActions.push('Login');
    this.props.navigation.dispatch(pushAction);
  };

  signUp() {
    const {email, password, loading} = this.state;
    this.setState({loading: true});
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(this.signUpSuccess.bind(this))
      .catch(e => {
        alert(e.message);
        this.setState({loggedIn: false, loading: false});
      });
  }
  signUpSuccess() {
    this.goToLogin();
    this.setState({loading: false});
    alert('User Register Success');
  }
  render() {
    const {loading} = this.state;

    const signUpButton = loading ? (
      <Spinner />
    ) : (
      <Button title={'Sign-Up'} onPress={this.signUp.bind(this)} />
    );

    return (
      <View>
        <Header title="Holyum E-Commerce" />

        <View style={styles.container}>
          <Text style={{fontSize: 20, paddingBottom: 15, paddingTop: 15}}>
            Sign Up
          </Text>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: 15,
            }}>
            <TextInput
              style={styles.textInput}
              placeholder={'Enter E-Mail'}
              onChangeText={text => this.setState({email: text})}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              style={styles.textInput}
              placeholder={'Enter Password'}
              onChangeText={text => this.setState({password: text})}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 20,
          }}>
          <TouchableOpacity>{signUpButton}</TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
});

import React, {Component} from 'react';
import {
  Button,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {Spinner} from '../components/common/spinner';
import Header from '../components/header';
import firebase from 'firebase';

const image = {
  uri: 'https://startupistanbul.com/wp-content/uploads/2014/11/E-Commerce.jpg',
};
const {width} = Dimensions.get('window');
export default class Login extends Component {
  state = {
    email: '',
    password: '',
    loading: false,
  };

  goCategory = () => {
    const pushAction = StackActions.push('Home');
    this.props.navigation.dispatch(pushAction);
  };

  goToRegisterScreen = () => {
    const pushAction = StackActions.push('Register');
    this.props.navigation.dispatch(pushAction);
    //alert('gotoregisterscreen');
  };

  signIn() {
    const {email, password, loading} = this.state;
    this.setState({loading: true});
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.signInSuccess.bind(this))
      .catch(e => {
        alert(e);
        this.setState({loading: false});
      });
    //alert('signin');
    //this.goToCategory();
  }
  signInSuccess() {
    this.goCategory();
    this.setState({loading: false});
    alert('Login Success');
    this.setState({email: '', password: ''});
    //alert('Login Success');
  }
  render() {
    const {loading, email, password} = this.state;
    const signInButton = loading ? (
      <Spinner />
    ) : (
      <Button
        title={'Login'}
        color={'#007f5f'}
        onPress={this.signIn.bind(this)}
      />
    );
    return (
      <View>
        <Header title="Holyum E-Commerce" />
        {/* <Banner /> */}
        <ImageBackground
          source={{
            uri:
              'https://images.unsplash.com/photo-1606636660488-16a8646f012c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          }}
          style={{width: width, height: 700}}>
          <View style={styles.container}>
            <Text style={{fontSize: 20, paddingBottom: 15, paddingTop: 15}}>
              Sign In
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
                secureTextEntry={true}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              paddingTop: 20,
            }}>
            <TouchableOpacity>{signInButton}</TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 10}}>
              {
                <Button
                  style={styles.signupbutton}
                  color="#fb5607"
                  title={'Sign-Up'}
                  onPress={() => this.goToRegisterScreen()}
                />
              }
            </TouchableOpacity>
          </View>
        </ImageBackground>
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
    height: 50,
    borderWidth: 2,
    borderColor: '#457b9d',
    borderRadius: 10,
  },
  signupbutton: {},
});

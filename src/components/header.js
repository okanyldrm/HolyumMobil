import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {color} from 'react-native-reanimated';
const {width} = Dimensions.get('window');
export default class Header extends Component {
  render() {
    return (
      <View
        style={{
          height: 100,
          backgroundColor: '#7eccee',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 30,
        }}>
        <View>
          <Text style={styles.title}> {this.props.title} </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
});

import React, { Component } from 'react'
import { AsyncStorage, StyleSheet, Text, View } from 'react-native'
import Button from '../../components/Button'
import { NavigationScreenProp } from 'react-navigation'
import { getUuid } from './uuidGenerator'

export default class LoginView extends Component<{ navigation: NavigationScreenProp<any> }> {
  static navigationOptions = {
    header: null
  }

  private async login() {
    await AsyncStorage.setItem('userToken', getUuid());
    this.props.navigation.navigate('App');
  }

  render() {
    return (
      <View style={[styles.container, StyleSheet.absoluteFill]}>
        <View>
          <Text style={styles.title}>Walkarama</Text>
          <Text style={styles.subtitle}>A world to walk</Text>
          <Button onClick={() => this.login()} text={'Login'} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 48,
    fontFamily: 'serif'
  },
  subtitle: {
    textAlign: 'right',
    color: '#b7b7b7',
    marginBottom: 10
  }
})

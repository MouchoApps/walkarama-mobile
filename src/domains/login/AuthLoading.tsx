import React, { Component } from 'react'
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'

export default class AuthLoading extends Component<{ navigation: NavigationScreenProp<any, any> }> {
  constructor(props: any) {
    super(props)
    this.bootstrapAsync()
  }

  private bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken')
    this.props.navigation.navigate(userToken ? 'App' : 'Auth')
  }

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
  }
}

import React, { Component } from 'react'
import Main from './src/Main'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends Component<{}> {
  render() {
    return (
      <View style={StyleSheet.absoluteFill}>
        <Main />
      </View>
    )
  }
}

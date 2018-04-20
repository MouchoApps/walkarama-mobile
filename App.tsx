import React, { Component } from 'react'
import Main from "./src/Main";
import { Text, View } from 'react-native'

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ flex: 1, backgroundColor: 'blue' }}>Hello</Text>
        <View style={{ flex: 2, backgroundColor: 'red' }}>
          <Main/>
        </View>
      </View>
    );
  }
}

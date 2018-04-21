import React, { Component } from 'react'
import { Text } from 'react-native'

export default class AchievementsView extends Component<{}> {
  static navigationOptions = {
    title: 'Achievements',
    headerStyle: { marginTop: 24 }
  }

  render() {
    return <Text>Hello</Text>
  }
}

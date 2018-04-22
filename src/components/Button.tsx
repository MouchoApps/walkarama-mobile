import React, { Component } from 'react'
import { StyleSheet, Button as NativeButton } from 'react-native'

export default class Button extends Component<{ text: string; onClick: () => void }> {
  render() {
    return <NativeButton color="#fd368d" onPress={this.props.onClick} title={this.props.text} />
  }
}

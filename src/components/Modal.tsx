import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

export default class Modal extends Component<{ isVisible: boolean; onClose: () => void }> {
  render() {
    return this.props.isVisible ? (
      <View style={styles.modal}>
        <View style={{ margin: 24 }}>{this.props.children}</View>
      </View>
    ) : null
  }
}

const styles = StyleSheet.create({
  modal: {
    zIndex: 999,
    backgroundColor: 'white'
  }
})

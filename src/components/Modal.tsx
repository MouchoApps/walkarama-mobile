import React, { Component } from 'react'
import { Modal as NativeModal } from 'react-native'

export default class Modal extends Component<{ isVisible: boolean, onClose: () => void }> {
  render() {
    return (
      <NativeModal
        animationType="slide"
        transparent={false}
        visible={this.props.isVisible}
        onRequestClose={this.props.onClose}
      >
        {this.props.children}
      </NativeModal>
    )
  }
}

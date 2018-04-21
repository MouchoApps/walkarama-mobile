import React, { Component } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { Dimensions, View, StyleSheet, TouchableOpacity, Text } from 'react-native'

const { width, height } = Dimensions.get('window')

const ASPECT_RATIO = width / height
const LATITUDE = 37.78825
const LONGITUDE = -122.4324
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
let id = 0

interface IMarker {
  key: number
  color: string
  coordinate: {
    longitude: number
    latitude: number
  }
}

export default class WorldView extends Component<{}> {
  static navigationOptions = {
    title: 'World'
  }

  state = {
    region: {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    },
    markers: []
  }

  onMapPress(e: any) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,
          color: 'red'
        }
      ]
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={this.state.region} onPress={e => this.onMapPress(e)}>
          {this.state.markers.map((marker: IMarker) => (
            <Marker key={marker.key} coordinate={marker.coordinate} pinColor={marker.color} />
          ))}
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => this.setState({ markers: [] })} style={styles.bubble}>
            <Text>Tap to create a marker of random color</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  latlng: {
    width: 200,
    alignItems: 'stretch'
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent'
  }
})

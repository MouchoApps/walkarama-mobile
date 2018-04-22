import React, { Component } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { Alert, AsyncStorage, Dimensions, StyleSheet, Text, View } from 'react-native'
import Modal from '../../components/Modal'
import { ILocation } from '../../models/ILocation'
import { Pedometer } from 'expo'
import { EventSubscription } from 'fbemitter'
import { NavigationScreenProp } from 'react-navigation'
import { postLocation } from './services/locationService'
import { stepsToMeters } from './geoLocation'

const { width, height } = Dimensions.get('window')

const ASPECT_RATIO = width / height
const LATITUDE = 48.78825
const LONGITUDE = 16.367732
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
let id = 0

interface IMarker {
  key: number
  color: string
  coordinate: ILocation
}

export default class WorldView extends Component<{ navigation: NavigationScreenProp<any> }> {
  static navigationOptions = {
    title: 'World'
  }

  private subscription: EventSubscription | null = null

  state = {
    citySelected: false,
    region: {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    },
    steps: 0,
    markers: [],
    errorMessage: null,
    uuid: ''
  }

  componentDidMount() {
    this.subscribePedometer()
    this.getUuid()
  }

  private async getUuid() {
    const userToken = await AsyncStorage.getItem('userToken')
    console.log(userToken)
    this.setState({
      uuid: userToken
    })
  }

  private subscribePedometer = () => {
    // AsyncStorage.clear();
    this.subscription = Pedometer.watchStepCount(result => {
      postLocation(this.state.uuid, stepsToMeters(this.state.steps))
      this.setState({
        steps: result.steps
      })
    })
  }

  private onMapPress(e: any) {
    // Once we press the map we assume the city is selected
    this.setState({ citySelected: true })

    if (this.state.markers.length === 2) {
      Alert.alert(
        'Select new destination',
        'Are you sure you want to change the origin and the destination markers? This will delete your current progress',
        [
          {
            text: 'Cancel',
            onPress: () => {}
          },
          {
            text: 'Ok',
            onPress: () => {
              this.setState({ markers: [] })

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
          }
        ]
      )
    } else {
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
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.state.citySelected ? (
          <Modal isVisible={!this.state.citySelected} onClose={() => null}>
            <Text>Where do you want to walk?</Text>
            <Text>Select a destination city to walk towards</Text>
          </Modal>
        ) : null}

        <MapView
          maxZoomLevel={22}
          style={styles.map}
          initialRegion={this.state.region}
          onPress={e => this.onMapPress(e)}
        >
          {this.state.markers.map((marker: IMarker) => (
            <Marker key={marker.key} coordinate={marker.coordinate} pinColor={marker.color} />
          ))}
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 48
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
})

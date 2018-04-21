import { ILocation } from '../../models/ILocation'
import { IRegion } from '../../models/IRegion'

const EARTH_RADIUS = 6371000

export function getDistanceBetweenLocations(locationA: ILocation, locationB: ILocation): number {
  const latitudeA = locationA.latitude
  const latitudeB = locationB.latitude

  const longitudeA = locationA.longitude
  const longitudeB = locationB.longitude

  const latitudeDiff = toRad(latitudeB - latitudeA)
  const longitudeDiff = toRad(longitudeB - longitudeA)

  const a =
    Math.sin(latitudeDiff / 2) * Math.sin(latitudeDiff / 2) +
    Math.cos(toRad(latitudeA)) * Math.cos(toRad(latitudeB)) *
    Math.sin(longitudeDiff / 2) * Math.sin(longitudeDiff / 2)
  console.log(a)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return EARTH_RADIUS * c
}

export function getUserPosition(locationA: ILocation, locationB: ILocation, meters: number): ILocation {
  const d = getDistanceBetweenLocations(locationA, locationB)
  const userPosition = d - meters
  return {
    latitude: 42,
    longitude: 32
  }
}

export function stepsToMeters(steps: number): number {
  return steps * 0.762
}

function toRad(value: number) {
  return value * Math.PI / 180
}

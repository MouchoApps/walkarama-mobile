import { getDistanceBetweenLocations } from '../geoLocation'
import { ILocation } from '../../../models/ILocation'

describe('getDistanceBetweenLocations', () => {
  it('should get the correct distance', () => {
    const locationA: ILocation = {
      longitude: 48.78825,
      latitude: 19
    }

    const locationB: ILocation = {
      longitude: 43,
      latitude: 16.367732
    }

    const distance = getDistanceBetweenLocations(locationA, locationB)
    expect(distance).toBe(679398.276228933)
  })
})

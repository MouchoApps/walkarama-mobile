import React from 'react'
import { TabBarBottom, TabNavigator } from 'react-navigation'
import WorldView from './domains/world/WorldView'
import AchievementsView from './domains/achievements/AchievementsView'
import { Image } from 'react-native'

export default TabNavigator(
  {
    WorldView: {
      screen: WorldView
    },
    AchievementsView: {
      screen: AchievementsView
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        let source
        if (routeName === 'WorldView') {
          source = focused ? require('./assets/compass.png') : require('./assets/compass-white.png')
        } else if (routeName === 'AchievementsView') {
          source = focused ? require('./assets/trophy.png') : require('./assets/trophy-white.png')
        }

        return <Image style={{ marginTop: 20 }} source={source} />
      }
    }),
    tabBarOptions: {
      activeTintColor: '#FF087A',
      inactiveTintColor: 'gray'
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false
  }
)

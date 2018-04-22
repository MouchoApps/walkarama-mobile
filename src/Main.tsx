import React from 'react'
import { StackNavigator, SwitchNavigator, TabBarBottom, TabNavigator } from 'react-navigation'
import WorldView from './domains/world/WorldView'
import AchievementsView from './domains/achievements/AchievementsView'
import { Image } from 'react-native'
import LoginView from './domains/login/LoginView'
import AuthLoading from './domains/login/AuthLoading'

const appStack = TabNavigator(
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

        return <Image source={source} />
      }
    }),
    tabBarOptions: {
      activeTintColor: '#FF087A',
      inactiveTintColor: 'gray',
      iconStyle: {
        paddingTop: 0,
        paddingBottom: 50
      },
      showLabel: false,
      indicatorStyle: {
        backgroundColor: 'transparent'
      }
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false
  }
)

const authStack = StackNavigator(
  {
    LoginView: {
      screen: LoginView
    }
  },
  { headerMode: 'screen' }
)

export default SwitchNavigator({
  AuthLoading,
  App: appStack,
  Auth: authStack
})

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
    SplashScreen,
    HomeScreen,
} from '../Modules'

const SplashStack = createStackNavigator();
const RootStack = createStackNavigator();
const ScreenStack = createStackNavigator();


function Home() {
    return (
        <ScreenStack.Navigator screenOptions={{ headerShown: false }} headerMode='none'>
            <ScreenStack.Screen name="Home Screen" component={HomeScreen} />
        </ScreenStack.Navigator>
    )
}

function Splash() {
    return (
        <SplashStack.Navigator screenOptions={{ headerShown: false }} headerMode='none'>
            <SplashStack.Screen name="Splash Screen" component={SplashScreen} />
        </SplashStack.Navigator>
    )
}

function Routes() {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName={'Splash'} headerMode='none'>
                <RootStack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
                <RootStack.Screen name='Home' component={Home} options={{ headerShown: false, gestureEnabled: false }} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
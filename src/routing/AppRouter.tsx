import React from 'react'
import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { BottomTab } from './BottomTab'
import Character from '../screens/Character'
import { RootStackParamList } from './routing.types'
import Location from '../screens/Location'
import Episode from '../screens/Episode'

const stack = createNativeStackNavigator<RootStackParamList>()

export default function AppRouter() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <stack.Navigator>
                    <stack.Screen
                        name="Home"
                        component={BottomTab}
                        options={{
                            headerShown: false,
                            animation: 'fade_from_bottom',
                            animationDuration: 1000,
                            statusBarAnimation: 'slide',
                        }}
                    />
                    <stack.Screen
                        name="Character"
                        component={Character}
                        options={{
                            headerShown: false,
                            animation: 'fade_from_bottom',
                            animationDuration: 1000,
                            statusBarAnimation: 'slide',
                        }}
                    />
                    <stack.Screen
                        name="Location"
                        component={Location}
                        options={{
                            headerShown: false,
                            animation: 'flip',
                            animationDuration: 1000,
                            statusBarAnimation: 'slide',
                        }}
                    />

                    <stack.Screen
                        name="Episode"
                        component={Episode}
                        options={{
                            headerShown: false,
                            animation: 'flip',
                            animationDuration: 1000,
                            statusBarAnimation: 'slide',
                        }}
                    />
                </stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    )
}

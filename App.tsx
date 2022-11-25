import React from 'react'
import { Provider } from 'react-redux'
import 'react-native-reanimated'
import { store } from './src/redux/store'
import AppRouter from './src/routing/AppRouter'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

export default function App() {
    const [fontsLoaded] = useFonts({
        SyneMono: require('./assets/fonts/SyneMono-Regular.ttf'),
        RubikBubbles: require('./assets/fonts/RubikBubbles-Regular.ttf'),
    })

    return (
        <Provider store={store}>
            <StatusBar backgroundColor="#ecfeff" />
            <AppRouter />
        </Provider>
    )
}

import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, View } from 'native-base'
import { Dimensions, StyleSheet } from 'react-native'
interface Props {
    children: React.ReactNode
}
const { height } = Dimensions.get('window')
export default function Container({ children }: Props) {
    return (
        <SafeAreaView>
            <View bg="primary.50" h={height}>
                {children}
            </View>
        </SafeAreaView>
    )
}

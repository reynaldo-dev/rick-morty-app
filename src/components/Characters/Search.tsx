import React from 'react'
import { StyleSheet } from 'react-native'
import { Box, Input, Pressable, Text } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { MotiView } from 'moti'
import { useAnimationState } from 'moti/build'

interface SearchProps {
    active: boolean
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Search({ active, setActive }: SearchProps) {
    const animation = useAnimationState({
        from: {
            translateY: -100,
        },
        to: {
            translateY: 0,
        },
    })

    React.useEffect(() => {
        animation.transitionTo(active ? 'to' : 'from')
    }, [active])

    return (
        <Box flexDir="row" justifyContent="space-between">
            <MotiView state={animation} style={styles.animatedView}>
                <Input
                    variant="outline"
                    width="70%"
                    mx={2}
                    placeholder="Search"
                    borderTopRightRadius={15}
                    borderBottomLeftRadius={15}
                    borderColor="amber.400"
                />
                <Pressable m={2}>
                    <Ionicons name="search" size={24} color="#fbbf24" />
                </Pressable>
                <Ionicons name="arrow-up" size={24} color="#fbbf24" onPress={() => setActive(!active)} />
            </MotiView>
        </Box>
    )
}

const styles = StyleSheet.create({
    animatedView: {
        flexDirection: 'row',
        position: 'absolute',

        zIndex: 100,
        width: '100%',
        backgroundColor: '#fafafa',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})

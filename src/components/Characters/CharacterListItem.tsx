import React from 'react'
import { ImageBackground, Animated, StyleSheet } from 'react-native'
import { Result } from '../../redux/queries/characters.query'
import { Text } from 'native-base'
import { useNavigation } from '@react-navigation/native'

interface Props {
    item: Result
    itemW: number
    itemH: number
    imageW: number
    imageH: number
    opacity: Animated.AnimatedInterpolation
}

export default function CharacterListItem({ item, itemW, itemH, imageW, imageH, opacity }: Props) {
    const navigation = useNavigation()
    return (
        <Animated.View
            onTouchEnd={() => navigation.navigate('Character', { character: item })}
            style={{
                width: itemW,
                height: itemH,
                ...styles.container,
            }}
        >
            <ImageBackground
                source={{ uri: item?.image }}
                resizeMode="cover"
                style={{ width: imageW, height: imageH }}
                imageStyle={{ borderRadius: 20 }}
            >
                <Animated.View
                    style={{
                        width: imageW,
                        opacity,
                        ...styles.info,
                    }}
                >
                    <Text color="amber.500" textAlign="center" fontFamily="RubikBubbles">
                        {item?.name}
                    </Text>
                    <Text color="amber.500" textAlign="center" fontWeight="bold" fontSize="md">
                        Location: {item?.origin?.name}
                    </Text>
                </Animated.View>
            </ImageBackground>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center',
    },

    info: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#06b6d4',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',

        borderTopRightRadius: 80,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
})

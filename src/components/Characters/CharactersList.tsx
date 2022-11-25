import React from 'react'
import { Animated, Dimensions } from 'react-native'
import { Result } from '../../redux/queries/characters.query'
import CharacterListItem from './CharacterListItem'

const { width } = Dimensions.get('window')
const IMAGE_WIDTH = width * 0.5
const IMAGE_HEIGHT = IMAGE_WIDTH
const SPACING = 10
const ITEM_WIDTH = IMAGE_WIDTH + SPACING
const ITEM_HEIGHT = IMAGE_HEIGHT + SPACING * 2
interface Props {
    items: Result[] | undefined
}

export default function CharactersList({ items }: Props) {
    const scrollX = React.useRef(new Animated.Value(0)).current
    return (
        <Animated.FlatList
            snapToInterval={ITEM_WIDTH}
            decelerationRate={0}
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
            data={items}
            keyExtractor={(item: Result) => item.id.toString()}
            renderItem={({ item, index }) => {
                const inputRange = [(index - 1) * ITEM_WIDTH, index * ITEM_WIDTH, (index + 1) * ITEM_WIDTH]

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0, 0.9, 0],
                })
                return (
                    <CharacterListItem
                        item={item}
                        itemW={ITEM_WIDTH}
                        itemH={ITEM_HEIGHT}
                        imageW={IMAGE_WIDTH}
                        imageH={IMAGE_HEIGHT}
                        opacity={opacity}
                    />
                )
            }}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
            scrollEventThrottle={16}
            contentContainerStyle={{ alignItems: 'center', paddingEnd: ITEM_WIDTH }}
        />
    )
}

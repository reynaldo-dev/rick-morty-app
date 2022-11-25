import { Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useGetEpisodesQuery } from '../../redux/queries/characters.query'
import { FlatList } from 'react-native-gesture-handler'
import { Pressable, View, Text } from 'native-base'
const { width, height } = Dimensions.get('window')

const ITEM_WIDTH = width * 0.8
const ITEM_HEIGHT = height * 0.3
const SPACING = 10
export default function List() {
    const { data } = useGetEpisodesQuery()
    const navigation = useNavigation()
    return (
        <FlatList
            data={data?.results}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <Pressable
                    onPress={() => navigation.navigate('Episode', { episode: item })}
                    w={ITEM_WIDTH}
                    h={ITEM_HEIGHT}
                    p={2}
                    mb={SPACING}
                    backgroundColor="primary.400"
                    rounded="md"
                    justifyContent="flex-end"
                >
                    <Text color="amber.300" fontFamily="RubikBubbles" fontSize={20}>
                        {item?.name}
                    </Text>
                    <Text color="amber.300" fontFamily="RubikBubbles">
                        {item?.air_date}
                    </Text>
                    <Text color="amber.300" fontFamily="RubikBubbles">
                        {item?.episode}
                    </Text>
                </Pressable>
            )}
        />
    )
}

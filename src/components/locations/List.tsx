import { FlatList, Dimensions } from 'react-native'
import React from 'react'
import { useGetAllLocationsQuery } from '../../redux/queries/characters.query'
import { Pressable, Text, View } from 'native-base'
import { useNavigation } from '@react-navigation/native'
const { width, height } = Dimensions.get('window')

const ITEM_WIDTH = width * 0.8
const ITEM_HEIGHT = height * 0.3
const SPACING = 10
export default function List() {
    const { data } = useGetAllLocationsQuery()
    const navigation = useNavigation()

    return (
        <FlatList
            data={data?.results}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <Pressable
                    onPress={() => navigation.navigate('Location', { location: item })}
                    w={ITEM_WIDTH}
                    h={ITEM_HEIGHT}
                    p={2}
                    mb={SPACING}
                    backgroundColor="primary.400"
                    rounded="md"
                    justifyContent="flex-end"
                >
                    <Text color="amber.300" fontFamily="RubikBubbles">
                        {item?.name}
                    </Text>
                    <Text color="amber.300" fontFamily="RubikBubbles">
                        ({item?.type})
                    </Text>
                </Pressable>
            )}
        />
    )
}

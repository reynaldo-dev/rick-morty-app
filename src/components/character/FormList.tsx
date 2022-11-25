import React from 'react'
import { Result } from '../../redux/queries/characters.query'
import { FlatList, Image, View } from 'native-base'

interface FormListProps {
    data: Result[]
}
export default function FormList({ data }: FormListProps) {
    console.log(data)
    return (
        <FlatList
            horizontal
            data={data}
            renderItem={({ item }) => (
                <View mx={2} borderRadius={10}>
                    <Image
                        borderRadius={10}
                        source={{ uri: item.image }}
                        alt="character"
                        w={20}
                        h={20}
                        resizeMode="cover"
                    />
                </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
        />
    )
}

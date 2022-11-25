import React, { useEffect } from 'react'
import Container from '../components/app/Container'
import { useRoute } from '@react-navigation/native'
import { Box, Center, Text, View } from 'native-base'
import CharactersList from '../components/Characters/CharactersList'

export default function Location() {
    const [charactersFromLocation, setCharactersFromLocation] = React.useState<any[]>([])
    const { params } = useRoute()

    useEffect(() => {
        const getCharacters = async () => {
            const characters = await Promise.all(
                params?.location?.residents.map((url) => fetch(url).then((res) => res.json())),
            )
            setCharactersFromLocation(characters)
        }
        getCharacters()
    }, [])

    return (
        <Container>
            <Center h="50%" bg="amber.100">
                <Text fontSize="2xl" color="amber.300" fontFamily="RubikBubbles">
                    {params?.location?.name}
                </Text>

                <Text fontSize="xl" color="amber.300" fontFamily="RubikBubbles">
                    {params?.location?.type}
                </Text>
            </Center>
            <Box
                background="white"
                position="absolute"
                left={0}
                right={0}
                bottom={40}
                zIndex={10}
                borderTopLeftRadius={50}
                borderTopRightRadius={50}
            >
                <Text fontFamily="RubikBubbles" color="amber.300" mt={10} mx={2} textAlign="center">
                    This are the characters who performs this Location
                </Text>
                <View mt={10}>
                    <CharactersList items={charactersFromLocation} />
                </View>
            </Box>
        </Container>
    )
}

import React from 'react'
import { Box, Center, Pressable, ScrollView, Text } from 'native-base'
import { Ionicons } from '@expo/vector-icons'

import Container from '../components/app/Container'
import CharactersList from '../components/Characters/CharactersList'
import Search from '../components/Characters/Search'
import { Result, useGetByGenderQuery } from '../redux/queries/characters.query'

export default function Characters() {
    const { data: females, isLoading: isLoadingM } = useGetByGenderQuery('female')
    const { data: males, isLoading: isLoadingF } = useGetByGenderQuery('male')
    const [active, setActive] = React.useState<boolean>(false)

    return (
        <Container>
            {/* <Box>
                <Search active={active} setActive={setActive} />
            </Box> */}
            <Center>
                <Text fontSize="2xl" color="amber.300" fontFamily="RubikBubbles">
                    Characters
                </Text>
            </Center>

            <ScrollView>
                <Box mt={10} mb={70}>
                    <Box p={2} mb={10}>
                        <Text fontSize="lg" color="primary.500" m={1} fontFamily="RubikBubbles">
                            Male Characters
                        </Text>
                        <CharactersList items={males?.results} />
                    </Box>

                    <Box p={2} mb={10}>
                        <Text fontSize="lg" color="primary.500" m={1} fontFamily="RubikBubbles">
                            Female Characters
                        </Text>
                        <CharactersList items={females?.results} />
                    </Box>
                </Box>

                {!active && (
                    <Pressable
                        position="absolute"
                        top={active ? 100 : 2}
                        right={5}
                        bg="primary.500"
                        rounded="full"
                        px={2}
                        py={0.5}
                        shadow={5}
                        onPress={() => setActive(!active)}
                    >
                        <Ionicons name="search" size={20} color="white" />
                    </Pressable>
                )}
            </ScrollView>
        </Container>
    )
}

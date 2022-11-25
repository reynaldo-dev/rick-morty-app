import { Center } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'
import Container from '../components/app/Container'
import List from '../components/locations/List'
import { useGetAllLocationsQuery } from '../redux/queries/characters.query'

export default function Locations() {
    return (
        <Container>
            <Center>
                <List />
            </Center>
        </Container>
    )
}

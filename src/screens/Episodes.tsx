import { useRoute } from '@react-navigation/native'
import { Center } from 'native-base'
import React from 'react'
import { View, Text } from 'react-native'
import Container from '../components/app/Container'
import List from '../components/episodes/List'

export default function Episodes() {
    return (
        <Container>
            <Center>
                <List />
            </Center>
        </Container>
    )
}

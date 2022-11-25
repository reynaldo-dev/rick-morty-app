import React from 'react'
import { useRoute } from '@react-navigation/native'
import { Dimensions, ImageBackground, StyleSheet } from 'react-native'
import Container from '../components/app/Container'
import { Result, useGetByNameQuery } from '../redux/queries/characters.query'
import { Box, Image, ScrollView, Text, View } from 'native-base'
import FormList from '../components/character/FormList'
import { MotiView } from 'moti'

const { height, width } = Dimensions.get('window')
export default function Character() {
    const { params } = useRoute()
    const { character } = params as { character: Result }
    const { isError, isLoading, data } = useGetByNameQuery(character?.name)
    console.log(character)

    return (
        <Container>
            <ImageBackground
                source={{ uri: character?.image }}
                resizeMode="cover"
                style={{ width, height, justifyContent: 'center', alignItems: 'center' }}
                blurRadius={2}
            >
                <ScrollView contentContainerStyle={styles.container}>
                    <MotiView
                        style={{ width: '50%', borderWidth: 4, borderRadius: 20 }}
                        from={{
                            borderColor: '#f59e0b',
                        }}
                        animate={{
                            borderColor: '#06b6d4',
                        }}
                        transition={{
                            loop: true,
                            type: 'timing',
                            duration: 500,
                        }}
                    >
                        <Image
                            source={{ uri: character?.image }}
                            resizeMode="contain"
                            h={300}
                            w="100%"
                            alt="character"
                            borderRadius={20}
                        />
                        <Box
                            w="100%"
                            position="absolute"
                            bottom={0}
                            zIndex={2}
                            bg="primary.500"
                            borderBottomLeftRadius={20}
                            borderBottomRightRadius={20}
                            opacity={0.9}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Text color="amber.400" fontFamily="RubikBubbles" fontSize={20} textAlign="left">
                                {character?.name}
                            </Text>
                        </Box>
                    </MotiView>

                    <Box w="80%" flexDir="row" justifyContent="space-between" mt={2}>
                        <Text color="amber.400" fontFamily="SyneMono">
                            Status:
                        </Text>
                        <Text color="primary.500" fontSize={15} fontFamily="SyneMono">
                            {character?.status}
                        </Text>
                    </Box>

                    <Box w="80%" flexDir="row" justifyContent="space-between" mt={2}>
                        <Text color="amber.400" fontFamily="SyneMono">
                            Species:
                        </Text>
                        <Text color="primary.500" fontSize={15} fontFamily="SyneMono">
                            {character?.species}
                        </Text>
                    </Box>

                    <Box w="80%" flexDir="row" justifyContent="space-between" mt={2}>
                        <Text color="amber.400" fontFamily="SyneMono">
                            Gender:
                        </Text>
                        <Text color="primary.500" fontSize={15} fontFamily="SyneMono">
                            {character?.gender}
                        </Text>
                    </Box>

                    <Box w="80%" flexDir="row" justifyContent="space-between" mt={2}>
                        <Text color="amber.400" fontFamily="SyneMono">
                            Origin:
                        </Text>
                        <Text color="primary.500" fontSize={15} fontFamily="SyneMono">
                            {character?.origin.name}
                        </Text>
                    </Box>

                    <Box w="80%" flexDir="row" justifyContent="space-between" mt={2}>
                        <Text color="amber.400" fontFamily="SyneMono">
                            Location:
                        </Text>
                        <Text color="primary.500" fontSize={15} fontFamily="SyneMono">
                            {character?.location?.name}
                        </Text>
                    </Box>

                    <Box w="80%" justifyContent="flex-start">
                        <Text color="primary.500" fontFamily="SyneMono" mt={20} mb={5} fontSize={20}>
                            Forms:
                        </Text>
                        <FormList data={data?.results as Result[]} />
                    </Box>
                </ScrollView>
            </ImageBackground>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
})

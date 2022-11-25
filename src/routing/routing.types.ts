import { Result } from '../redux/queries/characters.query'

export type RootStackParamList = {
    Home: undefined
    Characters: undefined
    Character: { character: Result }
    Locations: undefined
    Location: { id: number }
    Episodes: undefined
    Episode: { id: number }
}

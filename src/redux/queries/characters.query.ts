import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { REACT_APP_API_BASEURL } from '@env'

export const characterApi = createApi({
    reducerPath: 'characterApi',
    baseQuery: fetchBaseQuery({ baseUrl: REACT_APP_API_BASEURL }),
    endpoints: (builder) => ({
        getCharacters: builder.query<RootObject, void>({
            providesTags: ['characters'],
            query: () => 'character',
        }),
        getByGender: builder.query<RootObject, string>({
            providesTags: ['gender'],
            query: (gender: string) => `character/?gender=${gender} `,
        }),
        getByName: builder.query<RootObject, string>({
            providesTags: ['gender'],
            query: (name: string) => `character/?name=${name} `,
        }),

        getAllLocations: builder.query<any, void>({
            providesTags: ['Locations'],
            query: () => 'location',
        }),
        getEpisodes: builder.query<any, void>({
            providesTags: ['Episodes'],
            query: () => 'episode',
        }),
    }),
    tagTypes: ['characters', 'gender', 'name', 'Locations', 'Episodes'],
})

export const {
    useGetCharactersQuery,
    useGetByGenderQuery,
    useGetByNameQuery,
    useGetAllLocationsQuery,
    useGetEpisodesQuery,
} = characterApi

interface RootObject {
    info: Info
    results: Result[]
}

export interface Result {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: Origin
    location: Origin
    image: string
    episode: string[]
    url: string
    created: string
}

interface Origin {
    name: string
    url: string
}

interface Info {
    count: number
    pages: number
    next: string
    prev?: any
}

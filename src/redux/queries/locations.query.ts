import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query'
import { REACT_APP_API_BASEURL } from '@env'

export const locationApi = createApi({
    reducerPath: 'locationApi',
    baseQuery: fetchBaseQuery({ baseUrl: REACT_APP_API_BASEURL }),
    endpoints: (builder) => ({
        getAllLocations: builder.query<any, void>({
            providesTags: ['Locations'],
            query: () => 'location',
        }),
    }),
    tagTypes: ['Locations'],
})

export const { useGetAllLocationsQuery } = locationApi

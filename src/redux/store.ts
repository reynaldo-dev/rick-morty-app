import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { setupListeners } from '@reduxjs/toolkit/query'
import { characterApi } from './queries/characters.query'
import { locationApi } from './queries/locations.query'

export const store = configureStore({
    reducer: {
        [characterApi.reducerPath]: characterApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(characterApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
setupListeners(store.dispatch)

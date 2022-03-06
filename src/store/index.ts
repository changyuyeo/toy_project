import { Reducer, AnyAction } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import {
	TypedUseSelectorHook,
	useSelector as useReduxSelector
} from 'react-redux'

import rootReducer, { RootState, State } from '@store/reducer'

const isDev = process.env.NODE_ENV === 'development'

const createStore = () => {
	const store = configureStore({
		reducer: rootReducer as Reducer<State, AnyAction>,
		devTools: isDev
	})
	return store
}

export const wrapper = createWrapper(createStore)
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

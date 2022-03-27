import { createStore, applyMiddleware, compose } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
	TypedUseSelectorHook,
	useSelector as useReduxSelector
} from 'react-redux'

import rootReducer, { RootReducerType } from '@store/rootReducer'
import rootSaga from '@store/rootSaga'

const isDev = process.env.NODE_ENV === 'development'

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware()
	const middlewares = [sagaMiddleware]
	const enhancer = !isDev
		? compose(applyMiddleware(...middlewares))
		: composeWithDevTools(applyMiddleware(...middlewares))

	const store = createStore(rootReducer as RootReducerType, enhancer)
	store.sagaTask = sagaMiddleware.run(rootSaga)

	return store
}

//* 타입지원 커스텀 useSelector
type RootState = ReturnType<typeof rootReducer>
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export const wrapper = createWrapper(configureStore, { debug: isDev })

import { createStore, applyMiddleware, compose } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer, { RootReducerType } from '@store/rootReducer'
import rootSaga from '@store/rootSaga'

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware()
	const middlewares = [sagaMiddleware]

	const enhancer =
		process.env.NODE_ENV === 'production'
			? compose(applyMiddleware(...middlewares))
			: composeWithDevTools(applyMiddleware(...middlewares))

	const store = createStore(rootReducer as RootReducerType, enhancer)
	store.sagaTask = sagaMiddleware.run(rootSaga)

	return store
}

const wrapper = createWrapper(configureStore, {
	debug: process.env.NODE_ENV === 'development'
})

export default wrapper

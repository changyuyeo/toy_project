import { combineReducers } from 'redux'

import userReducers from '@store/user/user.reducer'

const rootReducer = combineReducers({
	user: userReducers
})

export default rootReducer

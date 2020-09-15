import { combineReducers } from 'redux-immutable';

import { reducer as mainReducer } from '@/pages/main/redux';

const reducer = combineReducers({
  main: mainReducer
})

export default reducer;
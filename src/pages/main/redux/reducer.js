import { Map } from 'immutable';

import * as actionType from './constants';

const defaultState = Map({
  collapsed: false
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionType.CHANGE_COLLAPSED:
      return state.set("collapsed", action.collapsed);
    default:
      return state;
  }
}

export default reducer;
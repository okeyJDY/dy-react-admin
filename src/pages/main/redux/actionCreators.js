import * as actionType from './constants';

export const changeCollapsedAction = collapsed => ({
  type: actionType.CHANGE_COLLAPSED,
  collapsed: collapsed
})
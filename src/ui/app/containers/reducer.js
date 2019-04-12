/**
 * reducer.js
 *
 * This file contains the reducer used to set values in the Redux store.
 * Note that the Redux store is immutable.
 */

import { fromJS } from 'immutable';

import { DISPATCH_ACTIONS } from './constants';

// TODO: Initialize more things in the Redux store if needed
const initialState = fromJS({
  luckyNumber: -1
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_LUCKY_NUMBER':
      // TODO: Set things in the Redux store
      // Latha
      console.log(action.value);
      break;
    default:
      return state;
  }
}

export default reducer;

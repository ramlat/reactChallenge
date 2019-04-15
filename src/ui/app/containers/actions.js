/**
 * actions.js
 *
 * This file contains the various actions used by Redux.
 */

import { DISPATCH_ACTIONS } from './constants';

export function getLuckyNumber(username) {
  return {
    type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER,
    payload: username
  };
}

// TODO: Add more actions if needed
export function addUserToStore(firstNm, lastNm) {
  return {
    type: DISPATCH_ACTIONS.ADD_USER_TO_STORE,
    payload: {
      firstNm,
      lastNm
    }
  };
}

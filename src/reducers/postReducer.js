import { FETCH_POST_SUCCEED, CREATE_POST_SUCCEED } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POST_SUCCEED:
      return {
        ...state,
        items: [...action.payload]
      }
      break;
    case CREATE_POST_SUCCEED:
      return {
        ...state,
        item: action.payload
      }
      break;
    default:
      return state;
  }
}
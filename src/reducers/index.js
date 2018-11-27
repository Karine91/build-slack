import * as actionTypes from "../actions/types";
import { combineReducers } from "redux";

const initialState = {
  currentUser: null,
  isLoading: true
};

const user_reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        currentUser: action.payload.currentUser,
        isLoading: false
      };
    case actionTypes.CLEAR_USER:
      return {
        ...initialState,
        isLoading: false
      };
    default:
      return state;
  }
};

const initialChannelState = {
  currentChannel: null
};

const channel_reducer = (state = initialChannelState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_CHANNEL:
      return {
        ...state,
        currentChannel: action.payload.currentChannel
      };
    default:
      return state;
  }
};

const rootReduser = combineReducers({
  user: user_reducer,
  channel: channel_reducer
});

export default rootReduser;

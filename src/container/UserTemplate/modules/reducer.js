import * as ActionType from "./constant";

let initialState = {
  data: null,
  err: null,
};

const listMoviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_HOME_DATA_REQUEST:
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionType.FETCH_HOME_DATA_SUCCESS:
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case ActionType.FETCH_HOME_DATA_FAILED:
      state.data = null;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default listMoviceReducer;

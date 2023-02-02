import * as types from "../actionType";

const initialState = {
  comments: [],
  loading: false,
};

const commentReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        loading: false,
      };

    case types.ADD_COMMENTS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default commentReducers;

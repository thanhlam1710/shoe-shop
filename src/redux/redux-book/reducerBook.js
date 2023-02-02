import * as types from "../actionType";

const initialState = {
  books: [],
  book: {},
  loading: false,
};

const bookReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BOOK:
      return {
        ...state,
        books: action.payload,
        loading: false,
      };
    case types.DELETE_BOOK:
      return {
        ...state,
        loading: false,
      };
    case types.ADD_BOOK:
      return {
        ...state,
        loading: false,
      };
    case types.GET_SINGLE_BOOK:
      return {
        ...state,
        book: action.payload,
        loading: false,
      };
    case types.UPDATE_BOOK:
      return {
        ...state,
        loading: false,
      };
    // case types.PAGE_BOOK:
    //   return {
    //     ...state,
    //     books: action.payload,
    //     loading: false,
    //   };
    default:
      return state;
  }
};

export default bookReducers;

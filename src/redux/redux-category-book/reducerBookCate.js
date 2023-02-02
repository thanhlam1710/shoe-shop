import * as types from "../actionType";

const initialState = {
  categories: [],
  category: {},
  loading: false,
};

const bookCateReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BOOK_CATE:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case types.DELETE_BOOK_CATE:
      return {
        ...state,
        loading: false,
      };
    case types.ADD_BOOK_CATE:
      return {
        ...state,
        loading: false,
      };
    case types.GET_SINGLE_BOOK_CATE:
      return {
        ...state,
        category: action.payload,
        loading: false,
      };
    case types.UPDATE_BOOK_CATE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default bookCateReducers;

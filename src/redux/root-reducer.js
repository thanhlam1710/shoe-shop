import { combineReducers } from "redux";
import bookReducers from "./redux-book/reducerBook";
import bookCateReducers from "./redux-category-book/reducerBookCate";
import cartSlice from "./cart/cartSilce";
import commentReducers from "./comment/reducerComment";

const rootReducer = combineReducers({
  books: bookReducers,
  categories: bookCateReducers,
  cart: cartSlice.reducer,
  comments: commentReducers,
});

export default rootReducer;

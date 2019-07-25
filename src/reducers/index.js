import { combineReducers } from "redux";
import productReducer from "./product-reducer"
//import addPost from "./post-reducers"

export default combineReducers({
    products: productReducer
  });
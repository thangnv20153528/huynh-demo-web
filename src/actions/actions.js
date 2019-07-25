import { GET_PRODUCT, ADD_POST, UPDATE_POST, UPDATED_POST } from './action-types';
import myData from '../Components/App/data.json';

export const getProduct = () => {
    return (dispatch) => {
        let product = [];
    myData.forEach(item => {
      const singleItem = { ...item };
      product = [...product, singleItem];
    });
        dispatch({
            type: GET_PRODUCT,
            payload: product
          });
          }
  };

  // export function deletePost(payload) {
  //   return { type: DELETE_POST, payload };
  // }
  
  export function addPost(payload) {
    return { type: ADD_POST, payload };
  }
  
  export function updPost(payload) {
     return { type: UPDATE_POST, payload };
  }
  
  export function upedPost(payload) {
    return { type: UPDATED_POST, payload };
  }
  
import { GET_PRODUCT, ADD_POST, UPDATED_POST, UPDATE_POST } from '../actions/action-types';
//import myData from '../Components/App/data.json'

const initailState = {
    product: [],
    post: ""
}

export default function(state = initailState, action){
    switch(action.type){
        case GET_PRODUCT:
            return {
            ...state,
            product: action.payload
        }
        case ADD_POST:
            return {
            ...state,
            product: [action.payload, ...state.product]
            };
            case UPDATE_POST:
                return {
                    ...state,
                    post: action.payload
                };
            case UPDATED_POST:
                return {
                    ...state,
                    product: state.product.map(e =>
                    e.id === action.payload.id ? (e = action.payload) : e
                    )
                };
        default:
            return state
    }
    
}
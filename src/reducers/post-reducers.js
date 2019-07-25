// import { ADD_POST, UPDATED_POST, UPDATE_POST } from "../actions/action-types"

// const initialState = {
//     posts: [],
//     search: "",
//     post: ""
//   };

//   export default function(state = initialState, action) {
//     switch (action.type) {
//       // case DELETE_POST:
//       //   return {
//       //     ...state,
//       //     posts: state.posts.filter(post => post.id !== action.payload)
//       //   };
      
//        case UPDATE_POST:
//         return {
//           ...state,
//           post: action.payload
//         };
//       case UPDATED_POST:
//         return {
//           ...state,
//           posts: state.posts.map(e =>
//             e.id === action.payload.id ? (e = action.payload) : e
//           )
//         };
//       default:
//         return state;
//     }
//   }
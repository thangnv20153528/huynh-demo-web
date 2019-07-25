import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import "semantic-ui-css/semantic.min.css";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = [thunk];
const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(...middleware)))

export default store;
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

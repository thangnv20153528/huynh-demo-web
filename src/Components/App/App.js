import React from 'react';
import './App.css';
import Modal from '../Modal/Modal';
import { BrowserRouter as Router } from "react-router-dom";
import RouterURl from '../../routerURl/RouterURl';


class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
           <RouterURl></RouterURl>
            <Modal />
          </div>
        </div>
      </Router>
        
   
    );
  }
}


export default App;

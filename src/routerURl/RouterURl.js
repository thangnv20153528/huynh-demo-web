import React, { Component } from 'react';
import Paginations from '../Components/Product/Pagination';
import AddPost from '../Components/Product/AddPost';
import { Route, Switch } from "react-router-dom";
import UpdatePost from '../Components/Product/UpdatePost';

class RouterURl extends Component {
    render() {
        return (
            <div>
                <Switch>
                        <Route exact path="/pgn" component={Paginations} />
                        <Route path="/add-post" component={AddPost} />
                        <Route path="/ud-post" component={UpdatePost} />
                        
                </Switch> 
            </div>
        );
    }
}

export default RouterURl;
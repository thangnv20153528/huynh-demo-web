import React, { Component } from 'react';
import { Grid, Form, Input, Button } from "semantic-ui-react";
import { ADD_POST } from "../../actions/action-types";
import store from "../../index";
import uuid from "uuid";
import axios from "axios";
//import myData from "../App/data.json";

class AddPost extends Component { 
    state = {
    name: "",
    price: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = e => {
    const { name, price } = this.state;
    e.preventDefault();

    if (name.trim() === "" || price.trim() === "") {
      console.log("please fill out both fields!");
    } else {
        axios({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/posts",
            data: {
              name: name,
              price: price,
              id: uuid()
            }
          }).then(res => {
            store.dispatch({ type: ADD_POST, payload: res.data });
            console.log(res.data)
          });
          
            this.props.history.push("/pgn");
    }
  };

    render() {
      const { name, price } = this.state
        return (
            <div>
                 <Grid.Column width={12}>
                    <Form>
                        <Form.Field
                            name="name"
                            value={name}
                            control={Input}
                            label="Tên sản phẩm"
                            placeholder="Tên sản phẩm"
                            onChange={this.handleChange}
                        />
                        <Form.Field
                            name="price"
                            value={price}
                            control={Input}
                            type="Number"
                            label="Giá tiền"
                            placeholder="Giá tiền"
                            pattern='[0-9]+(\\.[0-9][0-9]?)?'
                            onChange={this.handleChange}
                        />
                        <Button color="red" inverted onClick={this.handleClick}>
                            Thêm sản phẩm
                        </Button>
                         
                    </Form>
                </Grid.Column>
            </div>
        );
    }
}

export default AddPost;
import React from "react";
//import { connect } from "react-redux";
import store from "../../index";
import { UPDATED_POST } from "../../actions/action-types";

import { Grid, Form, Input } from "semantic-ui-react";

class UpdatePost extends React.Component {
  state = {
    id: this.props.product.id,
    name: this.props.product.name,
    price: this.props.product.price
  };
  componentDidUpdate(prevProps) {
    if (prevProps.product !== this.props.product) {
      this.setState({
        id: this.props.product.id,
        name: this.props.product.name,
        price: this.props.product.price
      });
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = e => {
    e.preventDefault();
    const { id, name, price } = this.state;
    const data = {
      id: id,
      name: name,
      price: price
    };
    console.log(data);
    store.dispatch({ type: UPDATED_POST, payload: data });
    // this.setState({
    //   id: id,
    //   name: "",
    //   description: "",
    //   price: ""
    // });
    // this.props.history.push("/");
    e.target.reset();
  };

  render() {
    const { name,  price } = this.state;
    console.log(this.props.product)
    return (
      <Grid.Column>
        <Form onSubmit={this.handleClick}>
          <Form.Field
            name="name"
            value={name}
            control={Input}
            label="Tên Sản Phẩm"
            placeholder="Cập nhật tên sản phẩm"
            onChange={this.handleChange}
          />
          <Form.Field
            name="price"
            value={price}
            control={Input}
            label="Giá Sản Phẩm"
            placeholder="Cập nhật Giá sản phẩm"
            onChange={this.handleChange}
          />
          {/* <Button color="red" onClick={this.handleClick}>
            Submit Product
          </Button> */}
          <Form.Button color="blue" content="Submit" />
        </Form>
      </Grid.Column>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     product: state.products.post
//   };
// }

// export default connect(mapStateToProps)(UpdateProduct);

export default UpdatePost;

import React, { Component } from "react";
import "antd/dist/antd.css";
import {Pagination}  from "antd";
//import myData from "../Product/data.json";
import Product from "./Product";
import { getProduct } from '../../actions/actions';
import { connect } from "react-redux";
//import Item from "../Product/Item";

const size = 20
class Paginations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minValue: 0,
      maxValue: size 
    };
  }
 
  componentDidMount() {
    this.props.getProduct();
 }

 deleteProduct = (id) => {
    let arrProduct = this.props.product;
    arrProduct.splice(id, 1);
    this.setState({products: arrProduct});
  }

  editNameProduct = (id, name) => {
    let arrProduct = this.props.product;
    arrProduct[id].name = name;
    this.setState({products: arrProduct}); 
  }

  handleChange = value => {
    this.setState({
      minValue: (value - 1) * size,
      maxValue: value * size
    });
  };

  render() {
    const { product } = this.props;
    const {minValue,maxValue}=this.state
    //console.log('myData :%o , minValue: %o,  maxValue: %o',data.slice(minValue, maxValue),minValue,maxValue)
    return (
      <div>
        <div id="products" className="row list-group">
          {product &&
            product.length > 0 &&
            product.slice(minValue, maxValue).map((item,index) => {
                return  <Product key = { index } index = {index} edit={(id, name) => {this.editNameProduct(id, name)}} 
      delete = {(id) => {this.deleteProduct(id)}}
      price={ item.price } images={ item.images } hot={ item.hot } id={item.id}>{item.name}</Product>
            })
          }
        </div>
         <div>
          <Pagination
            defaultCurrent={1}
            defaultPageSize={size}
            onChange={this.handleChange}
            total={product && product.length}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  product: state.products.product
});

export default connect(
  mapStateToProps,
  { getProduct }
)(Paginations);

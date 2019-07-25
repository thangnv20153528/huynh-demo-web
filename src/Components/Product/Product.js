import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import UpdatePost from './UpdatePost';
//import store from "../../index";
//import { UPDATE_POST } from "../../actions/action-types";
//import { Button } from "semantic-ui-react";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        };
    }

    show_featured = (featured) => {
        if(featured === true){
            return <span className="tag2 hot">HOT</span>
        }
    };

    format_curency = (price) => {
       return price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    };

    show_info = () => {
        alert(this.props.children);
    };

    buttonEdit = () => {
        this.setState({ editing: true});
    };

    buttonSave = () => {
        this.setState({ editing: false});
        this.props.edit(this.props.index, this.txtname.value);
        
    };
    
    

    buttonDelete = () => {
        this.props.delete(this.props.index);
    }
    renderNormal = () => {
        return <div className="col-md-12 product-info smart-form" style={{ marginTop : 10 }}> 
                    <div className="form-group">
                        <button className="btn btn-info" onClick={() => this.buttonEdit()}>Edit</button>
                        <Link to="/add-post">
                            <button className="btn btn-danger">
                                Thêm
                            </button>
                        </Link>
                        <button className="btn btn-danger" onClick={() => this.buttonDelete()}>Remove</button>
                    </div>
                    {/* <div>
                      <Button
                            color="green"
                            inverted
                            onClick={() =>
                            this.handleUpdate.bind(this.props.item.id, this.props.item.name, this.props.item.price)
                            }
                        >
                            Edit Product
                        </Button>
                      </div> */}
                </div>
    };

    renderForm = () => {
        return <div className="col-md-12 product-info smart-form" style={{ marginTop : 10 }}>
                    <div className="form-group">
                        <input ref={(input) => {this.txtname = input}} defaultValue={ this.props.children } type="text" className="form-control" id="usr" /> 
                    </div>
                    <div className="form-group">
                        <button className="btn btn-info" onClick={() => this.buttonSave()}>Save</button>
                    </div>
                </div>
    };

    show_button = () => {
        if(this.state.editing === false){
            return this.renderNormal();
        }
        else{
            return this.renderForm();
        }
    }

    render() {
        return (
           
            <div className="col-xs-12 col-md-6">
                {/* First product box start here*/}
                <div className="prod-info-main prod-wrap clearfix">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 col-xs-12">
                            <div className="product-image"> 
                                <img src={this.props.images} alt="" className="img-responsive" /> 
                                 {this.show_featured(this.props.hot)}
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-12 col-xs-12">
                            <div className="product-deatil">
                                <h5 className="name">
                                    <a href="true">
                                    {this.props.children}
                                    </a>
                                    <a href="true">
                                    <span>Product Category</span>
                                    </a>                            
                                </h5>
                                <p className="price-container">
                                    <span>{this.format_curency(this.props.price)} VNĐ</span>
                                </p>
                                <span className="tag1" /> 
                            </div>
                            <div className="description">
                                <p>A Short product description here </p>
                            </div>
                            <div className="product-info smart-form">
                                <div className="row">
                                    <div className="col-md-12"> 
                                        <a  href="true" data-toggle="modal" data-target="#myModal" className="btn btn-danger">Add to cart</a>
                                        <a href="true" onClick={this.show_info.bind(this)} className="btn btn-info">More info</a>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="rating">Rating:
                                            <label htmlFor="stars-rating-5"><i className="fa fa-star text-danger" /></label>
                                            <label htmlFor="stars-rating-4"><i className="fa fa-star text-danger" /></label>
                                            <label htmlFor="stars-rating-3"><i className="fa fa-star text-danger" /></label>
                                            <label htmlFor="stars-rating-2"><i className="fa fa-star text-warning" /></label>
                                            <label htmlFor="stars-rating-1"><i className="fa fa-star text-warning" /></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />
                         { this.show_button() } 
                        

                    </div>
                </div>
            </div>

        );
    }
}

export default Product;
// const mapStateToProps = state => {
//     return {
//       item: state.products.post
//     };
//   };
  
//   export default connect(mapStateToProps)(Product);
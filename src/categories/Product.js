import React from 'react';
import { Link } from 'react-router-dom';
import { CartData } from '../ContextReducer/Context';
import './Product.css';
import StarRateIcon from '@material-ui/icons/StarRate';

const Product = (props) => {
    const { dispatch } = CartData()

    const goToPreview = () => {
        dispatch({ type: "ADD_TO_PREVIEW", item: props.detail })
    }

    const addToCart = () => {
        dispatch({ type: "ADD_TO_CART", item: props.detail })
    }

    return (
        <div className="product">
            <div className="info">
                <h4>{props.detail.title}</h4>
                <span>₹ {props.detail.price}</span>
                <div className="rating">
                    <h5>{props.detail.rating}</h5>
                    <StarRateIcon style={{ fontSize: '20px' }} />
                </div>
                <span>{props.detail.category}</span>
            </div>
            <img src={props.detail.image} alt="" />
            <div className="product-button">
                <Link to="/preview"><button onClick={goToPreview}>Preview</button></Link>
                <button onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;

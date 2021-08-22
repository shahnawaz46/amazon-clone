import React from 'react';
import './Preview.css';
import { CartData } from '../ContextReducer/Context';
import StarRateIcon from '@material-ui/icons/StarRate';

const Preview = () => {
    const { state, dispatch } = CartData()

    const addToCart = () => {
        dispatch({ type: "ADD_TO_CART", item: state.preview })
    }

    return (
        <div className="preview-div">
            <div className="preview-image">
                <img src={state.preview.image} alt="not found" />
            </div>
            <div className="preview-product-info">
                <h2 className="preview-data preview-font-size">{state.preview.title}</h2>

                {state.preview.features?.length > 0 ?
                    <ul className="prevew-features-list preview-data">
                        {state.preview.features.map((value, index) => <li key={index}>{value}</li>)}
                    </ul>
                    :
                    <p className="preview-data">{state.preview.description}</p>
                }

                <h4 className="preview-data">Category: &nbsp; {state.preview.category}</h4>
                <h3 className="preview-data">Price: &nbsp; ₹ {state.preview.price}</h3>
                <div className="rating">
                    <h5>{state.preview.rating}</h5>
                    <StarRateIcon style={{ fontSize: '20px' }} />
                </div>
                <button className="preview-button" onClick={addToCart}>Add to cart</button>
            </div>
        </div>
    )
};

export default Preview;

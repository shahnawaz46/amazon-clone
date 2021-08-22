import React, { useState, useEffect } from 'react';
import './Cart.css';
import { CartData } from '../ContextReducer/Context';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import StarRateIcon from '@material-ui/icons/StarRate';
import { Link } from 'react-router-dom';


const Cart = () => {
    const { state, dispatch } = CartData()

    const [total, setTotal] = useState()
    const [itemLength, setItemLength] = useState()

    const removeComaFromString = (value) => {
        let price = ''
        for (let i = 0; i < value.length; i++) {
            if (value[i] === ',')
                continue;
            else
                price += value[i]
        }
        return price;
    }

    useEffect(() => {
        setTotal(state.cart.reduce((total, curr) => total + (Number(removeComaFromString(curr.price)) * Number(curr.qty)), 0))
        setItemLength(state.cart.reduce((total, curr) => total + Number(curr.qty), 0))
    }, [state.cart])

    console.log(total);

    const removeItem = (items) => {
        dispatch({ type: "REMOVE_FROM_CART", id: items.id })
    }

    const decrement = (items) => {
        dispatch({ type: "DECREMENT", item: items })
    }

    const increment = (items) => {
        dispatch({ type: "INCREMENT", item: items })
    }

    return (
        <div className="cart-div">
            <div className="my-cart">
                <span className="shoping-card">Shopping Cart</span> <hr />
                {
                    state.cart.length > 0 ? state.cart.map((items) =>
                        <div className="items" key={items.id}>
                            <div className="cart-images">
                                <img src={items.image} alt="error" />
                            </div>
                            <div className="items-info">
                                <h3 className="item-info-detail">{items.title}</h3>
                                <h3 className="item-info-detail">₹ {items.price}</h3>
                                <div className="rating">
                                    <h5>{items.rating}</h5>
                                    <StarRateIcon style={{ fontSize: '20px' }} />
                                </div>

                                <div className="cart-icons-div">
                                    <h4 className="cart-icons">Qty: {items.qty}</h4>

                                    <div className="add-remove-icon">
                                        <RemoveIcon className="cart-icons click" onClick={() => decrement(items)} />
                                        <AddIcon className="cart-icons click" onClick={() => increment(items)} />
                                    </div>

                                    <DeleteIcon onClick={() => removeItem(items)} className="cart-icons click" />
                                </div>
                            </div>
                        </div>) : <h4>Cart is Empty</h4>
                }
            </div>

            <div className="item-price">
                <h3 className="item-price-detail">Total Item: {itemLength}</h3>
                <h4 className="item-price-detail">Total Price: ₹ {total}</h4>
                <Link to="/payment"><button type="submit" className="proceed-button">Proceed to Check out</button></Link>
            </div>
        </div>
    );
};

export default Cart;

import React, { useContext, useReducer } from 'react';
import { createContext } from 'react';
import { reducer } from './Reducer';

const cart = createContext()

const initialState = {
    cart: [],
    preview: {},
    user: '',
    search: []
}

const Context = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <cart.Provider value={{ state, dispatch }}>
            {children}
        </cart.Provider>
    )
}

export default Context;

export const CartData = () => useContext(cart)
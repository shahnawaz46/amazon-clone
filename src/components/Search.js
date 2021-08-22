import React from 'react';
import { CartData } from '../ContextReducer/Context';
import Product from '../categories/Product';
import './Search.css';

const Search = () => {
    const { state } = CartData()

    return (
        <div className="search-div">
            {
                state.search.length > 0 ?
                    state.search.map((product) => <Product key={product.id} detail={product} />)
                    : <h3>Sorry Result Not Available in our Database</h3>
            }
        </div>
    );
};

export default Search;
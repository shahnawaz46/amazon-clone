import React from 'react';
import './AllProduct_Category.css';
import Product from './Product';
import { ProductAPI } from './ProductAPI';

const AllProducts = () => {
    return (
        <div className="all-product-div">
            <img className="product_image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_2x._CB432469748_.jpg" alt="" />
            <div className="product-info">
                {
                    ProductAPI.map((object_of_products) => object_of_products.product_data.map((product) => <Product key={product.id} detail={product} />))
                }
            </div>
        </div>
    );
};

export default AllProducts;

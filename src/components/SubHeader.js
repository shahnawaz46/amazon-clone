import React from 'react';
import './SubHeader.css';
import { NavLink } from 'react-router-dom';

const SubHeader = () => {
    return (
        <div className="sub-header-div">
            <ul className="sub-header-ul">
                <NavLink to="/" className="link" exact activeClassName="active-link"><li>All</li></NavLink>
                <NavLink to="/category/mobiles" className="link" activeClassName="active-link"><li>Mobiles</li></NavLink>
                <NavLink to="/category/tv" className="link" activeClassName="active-link"><li>TV</li></NavLink>
                <NavLink to="/category/laptop" className="link" activeClassName="active-link"><li>Laptop</li></NavLink>
                <NavLink to="/category/men-clothes" className="link" activeClassName="active-link"><li>Men's Clothing</li></NavLink>
                <NavLink to="/category/women-clothes" className="link" activeClassName="active-link"><li>Women's Clothing</li></NavLink>
                <NavLink to="/category/men-shoes" className="link" activeClassName="active-link"><li>Men's Shoes</li></NavLink>
                <NavLink to="/category/women-shoes" className="link" activeClassName="active-link"><li>Women's Shoes</li></NavLink>
                <NavLink to="/category/books" className="link" activeClassName="active-link"><li>Books</li></NavLink>
                <NavLink to="/category/kitchen" className="link" activeClassName="active-link"><li>Kitchen's</li></NavLink>
                <NavLink to="/category/cosmetic" className="link" activeClassName="active-link"><li>Cosmetics</li></NavLink>
            </ul>
        </div>
    );
};

export default SubHeader;

import React, { useState, useEffect } from 'react';
import './Header.css';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { CartData } from '../ContextReducer/Context';
import { Firebase } from '../firebase/Firebase';
import { ProductAPI } from '../categories/ProductAPI';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


const Header = () => {
    const [itemLength, setItemLength] = useState()
    const { state, dispatch } = CartData()
    const [search, setSearch] = useState()
    const searchData = []
    const [condition, setCondition] = useState(false)

    const logOut = () => {
        Firebase.auth().signOut()
    }

    useEffect(() => {
        setItemLength(state.cart.reduce((total, curr) => total + Number(curr.qty), 0))
    }, [state.cart])


    const searchItem = () => {
        for (let i = 0; i < ProductAPI.length; i++) {
            for (let j = 0; j < ProductAPI[i].product_data.length; j++) {
                if (search && (ProductAPI[i].product_data[j].title.toLowerCase()).includes(search.toLowerCase())) {
                    searchData.push(ProductAPI[i].product_data[j])
                }
            }
        }
        dispatch({ type: "SEARCH_VALUE", search_item: searchData })
    }


    return (
        <>
            {/* Laptop / tablets header */}
            <div className="computer-header">
                <Link to="/"><img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="amazon-logo" alt="error" /></Link>

                <div className="search-header" >
                    <input type="text" className="search-bar" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <Link to={search && "/search"} className="search-icon" ><SearchIcon onClick={searchItem} /></Link>
                </div>

                <div className="right-nav-bar">
                    <Link to={!state.user && "/signup_login"} >
                        <div className="nav-bar-option" onClick={logOut}>
                            <span className="line-one">{state.user ? state?.user.split("@")[0] : "Hello user"}</span>
                            <span className="line-two">{state.user ? "Sign out" : "Sign in"}</span>
                        </div>
                    </Link>

                    <Link to="/return">
                        <div className="nav-bar-option">
                            <span className="line-one">Returns</span>
                            <span className="line-two">&Orders</span>
                        </div>
                    </Link>

                    <Link to="/cart">
                        <div className="nav-bar-cart">
                            <span className="line-one"><ShoppingCartOutlinedIcon /></span>
                            <span className="line-two cart-number">{itemLength}</span>
                        </div>
                    </Link>
                </div>
            </div>



            {/* mobile header */}

            <div className="mobile-header">
                <div className="header-logo-cart">
                    <MenuIcon style={{ fontSize: '35px' }} onClick={() => setCondition(true)} />

                    <div className={condition ? "menu-item menu-item-slide" : "menu-item"}>
                        <div className="menu-item-navbar">
                            <Link to={!state.user && "/signup_login"} >
                                <div className="nav-bar-option" onClick={logOut}>
                                    <span className="line-one">{state.user ? state?.user.split("@")[0] : "Hello user"}</span>
                                    <span className="line-two">{state.user ? "Sign out" : "Sign in"}</span>
                                </div>
                            </Link>

                            <Link to="/return">
                                <div className="nav-bar-option">
                                    <span className="line-one">Returns</span>
                                    <span className="line-two">&Orders</span>
                                </div>
                            </Link>
                        </div>
                        <CloseIcon onClick={() => setCondition(false)} />
                    </div>

                    <div className="amazon-logo-link">
                        <Link to="/"><img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="amazon-logo" alt="error" /></Link>
                    </div>

                    <Link to="/cart">
                        <div className="nav-bar-cart">
                            <span className="line-one"><ShoppingCartOutlinedIcon /></span>
                            <span className="line-two cart-number">{itemLength}</span>
                        </div>
                    </Link>
                </div>

                <div className="search-header" >
                    <input type="text" className="search-bar" onChange={(e) => setSearch(e.target.value)} />
                    <Link to={search && "/search"} className="search-icon" ><SearchIcon onClick={searchItem} /></Link>
                </div>
            </div>
        </>
    )
};

export default Header;
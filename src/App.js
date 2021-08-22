import React, { useEffect } from 'react';
import Header from './components/Header';
import Cart from './components/Cart';
import Return from './components/Return';
import SignupLogin from './components/SignupLogin';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Firebase } from './firebase/Firebase';
import { CartData } from './ContextReducer/Context';
import Preview from './components/Preview';
import SubHeader from './components/SubHeader';
import AllProducts from './categories/AllProducts';
import Category from './categories/Category';
import Search from './components/Search';
import Payment from './components/Payment';



function App() {
  const { dispatch } = CartData()

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((auth) => {
      if (auth)
        dispatch({ type: 'SET_USER', user: auth.email })
      else
        dispatch({ type: 'SET_USER', user: '' })
    })
  }, [dispatch])

  return (
    <Router>

      <Switch>

        <Route path="/" exact>
          <Header />
          <SubHeader />
          <AllProducts />
          <Footer />
        </Route>

        <Route path="/category/:category">
          <Header />
          <SubHeader />
          <Category />
          <Footer />
        </Route>

        <Route path="/return" component={Return} />

        <Route path="/cart">
          <Header />
          <Cart />
          <Footer />
        </Route>

        <Route path="/preview">
          <Header />
          <Preview />
          <Footer />
        </Route>

        <Route path="/search">
          <Header />
          <Search />
        </Route>

        <Route path="/payment" component={Payment} />

        <Route path="/signup_login" component={SignupLogin} />

      </Switch>

    </Router>
  );
};

export default App;

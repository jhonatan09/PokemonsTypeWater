import React,{useContext} from 'react';
import {DataContext} from '../Store'
import Header from '../Component/Header';
import Home from './Home';
import { Switch, Route} from 'react-router-dom';
import Product from './Product';
import OrderPlacedComponent from '../Component/OrderPlaced'

const Main = () => {
    const {CloseShop} = useContext(DataContext)

    return (
        <div>
            <Header />
                {CloseShop?

                    <OrderPlacedComponent />
                    :

                    <Switch>
                        <Route exact path="/PokemonsTypeWater/">
                            <Home />
                        </Route>
                        <Route path="/PokemonsTypeWater/Product">
                            <Product />
                        </Route>
                    </Switch>
                }
        </div>
    )
}

export default Main;
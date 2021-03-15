import React,{useContext} from 'react';
import {useLocation} from 'react-router-dom';
import Cart from '../../Component/ModalCart';
import {DataContext} from '../../Store';
import {Link} from 'react-router-dom';

const Product = () => {
    const location = useLocation()
    const {ClickAddToCart} = useContext(DataContext);
    return (
        <div className="Product">
            <Link to={'/PokemonsTypeWater/'}>
                Voltar para home
            </Link>
            <div className="Product-body">
                <div className="left-side">
                    <h1>
                        {location.state.items.name}
                    </h1>
                    <div className="image">
                        <img src={location.state.items.sprites.front_default} alt={location.state.items.name}/>
                    </div>
                </div>
                <div className="right-side">
                    <span className="price">
                        Price: R$ {location.state.items.prices.toLocaleString('pt-br', {minimumFractionDigits: 2})}
                    </span>
                    <button className="product-btn-add-cart" onClick={() => ClickAddToCart(location.state.items)}>
                        add to cart
                    </button>
                </div>
            </div>
            <Cart />
        </div>
    )

}

export default Product;
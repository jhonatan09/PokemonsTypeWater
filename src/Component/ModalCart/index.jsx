import React,{ useContext} from 'react';
import {DataContext} from '../../Store';
import CardsInfo from '../CardsInfo'

const ModalCart = () => {

    const {openModal, cartDetails, totalPrice, OrderPlaced} = useContext(DataContext);


    return (
        <div className={`cart ${openModal? 'active': ''}`}>
            <div className="cart-body">
                <h1 className="cart-body_title">
                    Carrinho
                </h1>
                <div className="cart-body-items">
                    {cartDetails.length === 0?

                        <span className="empty">Carrinho vazio</span>
                        :

                        cartDetails.map(details => {
                            return (     
                                <CardsInfo name={details.name} valor={details.prices} image={details.sprites.front_default} />
                            
                            )
                        })

                    }
                </div>
                <span className="price-total">
                    Preço total: {totalPrice}
                </span>
                <button className="cart-body_btn" onClick={() => OrderPlaced()}>
                    Finalizar Compra
                </button>
            </div>
        </div>
    )
}

export default ModalCart;
import React, {useContext} from 'react';
import {DataContext} from '../../Store'
import { useHistory } from 'react-router-dom';


const OrderPlaced = () => {
    const history = useHistory();
    const {setCloseShop} = useContext(DataContext)

    setTimeout(() => {
        localStorage.removeItem('@B2W:Order');
        history.go(0); 
        setCloseShop(false)
        
    }, 3000)

    return (
        <div className="orderplaced">
            <div className="orderplaced-content">
                <h1>
                    Obrigado pela compra!
                </h1>
                <span>
                    Seu produto foi enviado para o financeirio.
                </span>
            </div>
        </div>
    )

}

export default OrderPlaced
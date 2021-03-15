import React, {useContext, useEffect} from 'react';
import {DataContext} from '../../Store'


const CardsInfo = ({name, valor, image}) => {

    const {setTotalPrice, changeValue} = useContext(DataContext);

    useEffect(() => {
        setTotalPrice(currentValue => currentValue + valor)
       

    },[changeValue])

    return (
        <div className="cart-body_details">
             <img src={image} alt={name}/>
            <span>
                Name: {name}
            </span>
            <span>
                Name: {valor.toLocaleString('pt-br', {minimumFractionDigits: 2})}
            </span>
        </div>
    )
}


export default CardsInfo
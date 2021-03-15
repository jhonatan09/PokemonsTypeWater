import React, {useContext} from 'react';
import {DataContext} from '../../Store';
import {Link} from 'react-router-dom';

const Card = () => {
    const {data, ClickAddToCart, dataAdd} = useContext(DataContext);

    
    return (
        <div className="persons">

            {

                dataAdd.length === 0 ?
            
                    data.map( (items, index) => {
                        const valor = items.height + items.order;
                        items["prices"] = valor;
                       
                        return (
                            <div className="card" key={index} >
                                <Link to={{ pathname:"/PokemonsTypeWater/Product", state: {items} }}>
                                <img src={items.sprites.front_default} alt={items.name}/>
                                <h3>{items.name}</h3>
                                <span>Price: R${valor.toLocaleString('pt-br', {minimumFractionDigits: 2})}</span>
                                </Link>
                                <button onClick={() => ClickAddToCart(items)}>
                                    Add to cart
                                </button>
                            </div>
                        )
                    })

                :
            
                    dataAdd.map( (items, index) => {
                        const valor = items?.height + items?.order;
                        
                        return (
                            
                            <>
                                {items != null? 
                                    <>
                                    <span className="hidden" key={items.id}>
                                        {items["prices"] = valor}
                                    </span>
                                    <div className="card" key={index} >
                                        <Link to={{ pathname:"/PokemonsTypeWater/Product", state: {items} }}>
                                        <img src={items.sprites.front_default} alt={items.name}/>
                                        <h3>{items.name}</h3>
                                        <span>Price: R${valor.toLocaleString('pt-br', {minimumFractionDigits: 2})}</span>
                                        </Link>
                                        <button onClick={() => ClickAddToCart(items)}>
                                            Add to cart
                                        </button>
                                    </div>
                                </>
                                : 
                                    ''
                                }
                                
                            </>
                        )
                    })


            
            }

        </div>
    )

}

export default Card;
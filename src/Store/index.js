import React, {useState, useEffect} from "react"
import axios from 'axios';
import Auth from '../services';



const DataContext = React.createContext()


function DataContextProvider(props) {

 

  
  const [data, setData] = useState([]);
  
  const [totalPrice, setTotalPrice] = useState(0);

  const [dataAdd, setDataAdd] = useState([]);

  const [cartDetails, setCartDetails] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [changeValue, setChangeValue] = useState(false);


  const [CloseShop, setCloseShop] = useState(false)
  

  

  useEffect(() => {
    const ShowData = async () => {
        const res =  await Auth.SearchPokemonsApi();
        Loading(res.pokemon)
    }
    ShowData()
},[])







const Loading = async (data) => {
  let _pokemon = await Promise.all(data.map(async pokemon => {
    let pokemonDatas = await Auth.SearchPokemons(pokemon.pokemon.url);
    return pokemonDatas
  }))

  setData(_pokemon)
}


const HandleClick = async(namePoke) => {
  if(namePoke){
    const res =  await Auth.SearchPokemonsInput(namePoke);
    setDataAdd([res])
  } else {
    setDataAdd([])
  }
}

let dados = localStorage.getItem('@B2W:Order');
  let dadosArr = JSON.parse(dados)
  

useEffect(() => {
  if(dados != null){
    setCartDetails(dadosArr)
  }

},[])


const ClickAddToCart = (details) => {
  setCartDetails([...cartDetails, details]);
  localStorage.removeItem('@B2W:Order');
  localStorage.setItem('@B2W:Order', JSON.stringify(cartDetails));
  setChangeValue(currentValor => currentValor != changeValue);
}


const ToggleCartMob = () => {
  console.log("entrou")
  setOpenModal(currentVa => currentVa = !openModal)
}


const OrderPlaced = () => {
  setCloseShop(currentVa => currentVa = !CloseShop)
  setOpenModal(currentVa => currentVa = !openModal)
  
  
}

    

    return (
        <DataContext.Provider value={{data, HandleClick, setCartDetails, ClickAddToCart, openModal, cartDetails, dataAdd, setTotalPrice, totalPrice, changeValue, setChangeValue, ToggleCartMob, OrderPlaced, CloseShop, setCloseShop}}>
            {props.children}
        </DataContext.Provider>
    )

}




export {DataContextProvider, DataContext}

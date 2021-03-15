import React, {useState, useContext} from 'react';
import {DataContext} from '../../Store';
import Logo from '../../image/pokemon-png-logo.png';
import { FaCartArrowDown } from "react-icons/fa";


const Header = () => {

    const {HandleClick, ToggleCartMob} = useContext(DataContext)
    const [inputData, setInputData] = useState('')
   

    return (
        <div className="header">
            <div className="logo">
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="content">
                <input 
                    type="text" 
                    placeholder="Search yours favorite pokemon" 
                    onChange={(e) => setInputData(e.target.value)}
                />
                <button onClick={() => {HandleClick(inputData)}}>
                    Search
                </button>
                <div className="icon-cart mob" onClick={() => ToggleCartMob()}>
                    <FaCartArrowDown />
                </div>
            </div>
        </div>
    )
}

export default Header;
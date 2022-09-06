import React from 'react'
import Logo from '../../img/obidattlogo.png'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
        <img src={Logo} alt="" />
        <div className="Search">
            <input type="text" placeholder='#explore the structure'/>
            <div className="s-icon">
                <UilSearch/>
            </div>
        </div>
    </div>
  )
}

export default LogoSearch
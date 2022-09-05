import React from 'react'
import './Auth.css'
import Logo from '../../img/obidattlogo.png'

const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
                <h1>OBIDIENT Movement</h1>
                <h6>Let's build the structure in every local govt</h6>
            </div>
        </div>

        <h1>Form</h1>
    </div>
  )
}

export default Auth
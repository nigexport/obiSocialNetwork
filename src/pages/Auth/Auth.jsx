import React, { useState } from 'react';
import './Auth.css';
import Logo from '../../img/postpic7.png';
import { useDispatch } from 'react-redux';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const dispatch = useDispatch()

  const [data, setData] = useState({firstname: "", lastname: "", password: "", confirmpass: "", username: ""})
  
  const [confirmPass, setConfirmPass] = useState(true);
  const handleChange = (e)=> {
    setData({...data, [e.target.name]: e.target.value})
  };


  const handleSubmit = (e)=> {
    e.preventDefault();

    if(isSignUp) {
      data.password === data.confirmpass? dispatch(signUp(data)) : setConfirmPass(false);
    }else
    {
      dispatch(logIn(data))
    }
  };

  const resetform=()=>{
    setConfirmPass(true);
    setData({firstname: "", lastname: "", password: "", confirmpass: "", username: "",})
  };
  return (
    <div className="Auth">      
      {/* LeftSide */}
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
              <h1>ObiDatti 2023! Let's take back our country. We need 20 million votes to win this election.</h1>                                             
            </div>
        </div>

        {/* RightSide */}
        <div className="a-right">
          <form action="" className="infoForm authForm" onSubmit={handleSubmit}>
            <h3>{isSignUp ? "Sign up. Join The Structure":"Log In. Continue The Movement "}</h3>                     

            {isSignUp && (
              <div>
              <input type="text" placeholder='First Name' className='infoInput' name='firstname' onChange={handleChange}/>
              <input type="text" placeholder='Last Name' className='infoInput' name='lastname' onChange={handleChange}/>
            </div>

            )}        
        
        <div>
          <input type="text" className="infoInput" name='username' placeholder='Username' onChange={handleChange}/>
        </div>

        <div>
          <input type="password" className="infoInput" name='password' placeholder='Password' onChange={handleChange} />
          
          {isSignUp && (
            <input type="password" className="infoInput" name='confirmpass' placeholder='Confirm Password' onChange={handleChange} value={data.confirmpass}/>
          )}
          
        </div>
        <span style={{display: confirmPass? "none": "block", color: 'red', fontSize: '12px', alignSelf: "flex-end", marginRight: "5px"}}>
          * Confirm Password is not same
        </span>
        <div>
          <span style={{fontSize: "12px", cursor: "pointer"}} onClick = {() => {setIsSignUp((prev) => !prev); resetform()}}>
            {isSignUp ? "Already have an account. Login!": "Don't have an account? Sign Up"}
            </span>
        </div>
        <button className="button infoButton" type='submit'>
          {isSignUp ? "Sign up": "Log In"}
          </button>
      </form>
    </div>
    </div>
  );
};

export default Auth
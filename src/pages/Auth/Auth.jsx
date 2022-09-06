import React from 'react'
import './Auth.css'
import Logo from '../../img/postpic7.png'


const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
              <h1>ObiDatti 2023!</h1>
              <div>* Peter Obi for President!</div>    
              <div>* Join this movement for a better Nigeria</div>
              <div>* The youths must take back their country</div>
              <div>* 176,846 polling booths, 774 LGAs in 36 states</div>
              <div>* To win elections, we need 2 volunteers per polling booth</div>
              <div>* Volunteers will move door to door wooing voters</div>
              <div>* To win presidency, 150 voters in each polling booth must vote Labor Party</div>
              <div>* Labor Party must win 25% voters of 24 states in Nigeria</div>
              <div>* 2019 elections, Buhari - 15.2 million votes, Atiku - 11.3 million. GO AND VERIFY!</div>
                                              
            </div>
        </div>
        <LogIn />
    </div>
  );
};
function LogIn() {
  return (
    <div className="a-right">
      <form className='infoForm authForm'>
        <h3>Log In</h3>

        <div>
          <input type="text" placeholder="Username" className="infoInput" name="username" />
        </div>

        <div>
        <input type="password" placeholder="Password" className="infoInput" name="password" />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            I don't have an account. Sign up!
          </span>
          <button className='button infoButton'>Login</button>
          </div>        
      </form>
    </div>
  );
};


function SignUp() {
  return(
    <div className="a-right">
      <form action="" className="infoForm authForm">
        <h3>Sign up</h3>

        <div>
          <input type="text" placeholder='First Name' className='infoInput' name='firstname' />
          <input type="text" placeholder='Last Name' className='infoInput' name='lastname' />

        </div>

        <div>
          <input type="text" className="infoInput" name='username' placeholder='Username' />
        </div>

        <div>
          <input type="text" className="infoInput" name='password' placeholder='Password' />
          <input type="text" className="infoInput" name='confirmpass' placeholder='Confirm Password' />

        </div>

        <div>
          <span style={{fontSize: '12px'}}>I already have an account. Login!</span>
        </div>
        <button className="button infoButton" type='submit'>Signup</button>
      </form>
    </div>
  )
}

export default Auth
import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import * as FormData from 'form-data'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../Contexts/LoginContext'
import viablelogo from "../assets/viablelogo.png"
import LOGIN from "../assets/LOGIN.png"
import hero from "../assets/hero.png"


const Login = () => {

    // const [username, setUsername] = useState("");
    const {username, setUsername}= useContext(LoginContext)
    const { setLogged}= useContext(LoginContext)
    const [password, setPassword] = useState("");
    const storageemail = localStorage.getItem("email")

    const navigate= useNavigate()

    const isInvalid = password === "" ||  username === ""  ;

    const handleLogin = (e)=>{
        e.preventDefault();
        if (isInvalid) {
            console.log("Error")
            alert("Error! Please fill the fields")
           }
           else {
    
        var data = new FormData();
data.append('username', username);
data.append('password', password);

var config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'http://thevariables.pythonanywhere.com/accounts/login/',
  headers: { 
    // ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));

  localStorage.setItem("username", username)
  localStorage.setItem("password", password)
  localStorage.setItem("accesstoken", response.data.access)
  localStorage.setItem("refreshtoken", response.data.refresh)
setLogged(true)
navigate('/profile')
})
.catch(function (error) {
  console.log(error);
  alert('The username or password entered is wrong')
});


    }
}


  return (
    <div  className="bg-[#132C33] w-[1920px] h-[1080px] relative overflow-hidden scrollbar-hide flex">
   
           <img className='absolute w-[250px] h-[85px] left-[65px] top-[40px]' src={viablelogo} alt="logo"></img>
<form onSubmit={handleLogin}>
   <p className='text-[#69DCEB] absolute w-[1000px] h-[55px] left-[385px] top-[200px] font-[700] text-[45px] leading-[96px]'>LOGIN</p>
        <label className=' text-[#69DCEB] absolute left-[289px] top-[310px] text-sm'>Username</label>    
        <input className='rounded-[10px] absolute w-[400px] h-[35px] left-[289px] top-[340px] bg-[#EFFFFA]'
             type='text'
             placeholder='username'
              name='username'
               aria-label='Username' 
               value={username}
                onChange={(e) => setUsername(e.target.value)}></input>



                <br/>
                <label className=' text-[#69DCEB] absolute left-[289px] top-[390px] text-sm'>Password</label>   
            <input className='absolute w-[400px] h-[35px] left-[289px] top-[420px] bg-[#EFFFFA] rounded-[10px]'
             placeholder='password' 
            type='password' 
            name='password' 
            aria-label='Password'
             value={password}
              onChange={(e) => setPassword(e.target.value)}></input>

               <button className='text-[#69DCEB] text-sm absolute left-[570px] top-[460px]'>Forgot Password?</button>

              <br/>
              <button className='rounded-[10px] absolute w-[400px] h-[35px] left-[289px] top-[530px] bg-[#00ADB5]'>LOGIN</button>
           
            </form>
            <br/>
           

            <p className='text-[#EFFFFA] text-sm absolute left-[289px] top-[500px]' >Don't have an account? <Link to='/register'> <button className='text-[#69DCEB] font-medium'
            type='submit' >Sign up</button></Link></p>
           
           <div className='absolute w-[500px] h-[500px] left-[900px] top-[60px] rounded-[20] bg-[#EFFFFA]'><img src={hero}></img></div>
        </div>
    
    
  )
}

export default Login
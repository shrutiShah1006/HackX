import React, {useState} from "react"
import {Routes, Route} from "react-router-dom"
import Register from "./components/Register"
import Login from "./components/Login"
import CompanyRegister from "./components/CompanyRegister"
import CompanyLogin from "./components/CompanyLogin"
import Home from "./components/Home"
import PrivateRoute from "./components/PrivateRoute"
import Profile from "./components/Profile"
import NoMatch from "./components/NoMatch"
import Company from "./components/Company"
import Explore from "./components/Explore"
import Landing from "./components/Landing"
import {LoginContext} from "./Contexts/LoginContext"




function App() {

  const [logged, setLogged]= useState(false);
  const [username, setUsername]= useState("")

  return (
    <div className="App">
      {/* <LoginContext.Provider value={{username, setUsername, logged, setLogged}}>
       <Routes>
       <Route path={'/'} element={<Home/>}/>
        <Route path={'/register'} element={<Register/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route element={<PrivateRoute isLoggedIn={logged}/>}>
          <Route path="/profile" element={<Profile />}/>
        </Route>
        <Route path="/company" element={<Company/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="*" element={<NoMatch/>}/>
       </Routes>
       </LoginContext.Provider> */}
        <LoginContext.Provider value={{username, setUsername, logged, setLogged}}>
       <Routes>
    
        <Route path={'/register'} element={<Register/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/clogin'} element={<CompanyLogin/>}/>
        <Route path={'/cregister'} element={<CompanyRegister/>}/>
        <Route path={'/'} element={<Landing/>}/>
        <Route element={<PrivateRoute isLoggedIn={logged}/>}>
          <Route path="/profile" element={<Profile />}/>
          <Route path={'/home'} element={<Home/>}/>
          <Route path="/company" element={<Company/>}/>
        <Route path="/explore" element={<Explore/>}/>
        </Route>
        
        <Route path="*" element={<NoMatch/>}/>
       </Routes>
       </LoginContext.Provider>
     
    </div>
  );
}

export default App;

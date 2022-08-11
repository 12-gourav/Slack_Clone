
import React, { useState } from "react";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import {Route,Routes} from "react-router-dom";
import Login from "./Components/Login";
import About from "./Components/About";
import Chat from "./Components/Chat";
import {useDispatch,useSelector} from "react-redux";
const App = () =>{
  const [users,setUsers] = useState("hiii");
  const dispatch = useDispatch();
  const {user} = useSelector(state=>state.auth);





  return(
    <>
    {
      !user ? (
        <Login/>
      ):(
        <>
          <div className="app">
    <Header/>
    <div className="app__body">
      <SideBar/>
      <Routes>
      <Route path="/" element={<About/>}></Route>
      
      <Route path="/room/:id" element={<Chat/>}></Route>
    </Routes>
    </div>
    </div>
        </>
      )
    }
  


  
    </>
  )
}

export default App;

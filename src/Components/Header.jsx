import React from 'react';
import "./header.css";
import img from "../assets/react.svg";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import {useSelector} from "react-redux";

const Header = () => {
const {user} = useSelector(state=>state.auth);

  return (
    <div className="header">
        <div className="header__left">
        <Avatar
  alt={user?.displayName}
  src={user?.photoURL}
  sx={{ width: 24, height: 24 }}
/>
            
            <AccessTimeIcon/>

        </div>
        <div className="header__search">
<SearchIcon/>
<input type="text" placeholder='Enter Channel name'/>
        </div>
        <div className="header__right" >
<InfoIcon />
        </div>
    </div>
  )
}

export default Header
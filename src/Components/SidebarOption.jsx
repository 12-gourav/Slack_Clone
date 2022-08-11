import React from 'react';
import {useNavigate} from "react-router-dom";
import db from "../firebase";

const SidebarOption = (Props) => {
  const Navigate = useNavigate();
  

  const selectChannel =()=>{
    if(Props.id){
      Navigate(`/room/${Props.id}`);
    }
  }
const addChannel = ()=>{
const channelName = prompt("Please enter the chnannel name");
if(channelName){
db.collection('rooms').add({
  name:channelName
})
}
}

  return (

    <div className="sidebarOptions" onClick={Props.addChannelOption ? addChannel : selectChannel}>
{Props.Icon && <Props.Icon className="sidebarOptions__icon"/>}
{Props.Icon ? (<h3>{Props.title}</h3>):(<h3 className="sidebarOptions__channel">
  <span className="sidebarOptions__hash">#</span>{Props.title}</h3>)}
    </div>
  )
}

export default SidebarOption
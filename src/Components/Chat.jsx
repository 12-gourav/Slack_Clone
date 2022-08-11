import React, { useEffect } from 'react';
import {useParams} from "react-router-dom";
import "./header.css";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoIcon from '@mui/icons-material/Info';
import db from "../firebase";
import { useState } from 'react';
import Message from './Message';
import ChatInput from './ChatInput';

const Chat = () => {
    const param = useParams();
    const [roomDetails,setRoomDetails] = useState();
    const [roomMessage,setRoomMessage] = useState([]);


    useEffect(()=>{
      if(param.id){
        db.collection("rooms").doc(param.id).onSnapshot((snapshot)=>(
setRoomDetails(snapshot.data())
 ))
      }///closew

//// code for chats
db.collection('rooms').doc(param.id).collection('messages').orderBy('timestamp','asc').onSnapshot( snapshot =>
  setRoomMessage(
  snapshot.docs.map(doc=> doc.data())
)
)

    },[param.id])

console.log(roomMessage);


  return (
    <>
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelname"><strong>#{roomDetails?.name}</strong>
          <StarBorderIcon/>
          </h4>
        </div>
        <div className="chat__headerRight">
          <p><InfoIcon/> Details</p>
        </div>
      </div>
      <div className="chat__messages">
        {
          roomMessage.map((m,index)=>(
            <Message key={index} message={m?.message} timestamp={m?.timestamp}
            username={m?.username} userImage={m?.userimage} link={m?.link} image={m?.image}/>
          ))
        }
      
      </div>
       <ChatInput channelName={roomDetails?.name} channelId={param.id}/>
      </div>
      </>
  )
}

export default Chat
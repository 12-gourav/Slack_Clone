import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import db from "../firebase";
import {useSelector} from "react-redux";
import firebase from "firebase/compat/app";
import "./header.css";
import { Input } from '@mui/material';
import { storage } from '../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';




const ChatInput = (Props) => {
const [input,setInput] = useState("");
const {user} = useSelector(state=>state.auth);
const [link,setLink] = useState('');
const [imgUrl, setImgUrl] = useState(null);
const [state,setState] = useState([]);
const [progresspercent, setProgresspercent] = useState(0);

const handleLink = () => {
  const linkp = prompt("Please Enter Your Link :)");
  setLink(linkp);
  setInput(linkp);
}
const sendMessage = (event) => {

    event.preventDefault();
    const file = state;
    console.log(file);

    if (file){

        const storageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        uploadTask.on("state_changed",
          (snapshot) => {
            const progress =
              Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgresspercent(progress);
          },
          (error) => {
            alert(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setImgUrl(downloadURL)
            });
          }
        );
    console.log(imgUrl);
    } 

   

    if(Props.channelId){
        db.collection("rooms").doc(Props.channelId).collection("messages").add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            username:user.displayName,
            userimage:user.photoURL,
            link:link,
          
          
        }

        );
      
    }
    setInput("");
    setLink("");




  }

  return (
    <div className="chatInput">
        <form onSubmit={sendMessage}>
    
            <Input className="in" value={input} type="text" placeholder={`Message #${Props?.channelName}`}  onChange={(e)=>setInput(e.target.value)}/>
            <div className='btns'>
            <Button className='send' type="submit" disabled={input=="" ? true : false} ><SendIcon/></Button>
            <div>
            <Button className='send' type="button"onClick={()=>handleLink()} >  <AttachFileIcon/></Button>
          
            {/* <input  className='choose' type="file" name='file' onChange={(e)=>{setState(e.target.files[0])}}></input> */}
    </div>
            </div>
          
         
        </form>
    </div>
  )
}

export default ChatInput
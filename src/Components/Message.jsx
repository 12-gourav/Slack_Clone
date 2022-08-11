import React from 'react'
import "./header.css";
const Message = ({message,timestamp,username,userImage,link,image}) => {
  return (
    <div className="message">
        <img src={userImage} alt="userimage"/>
        <div className="message__info">
            <h4>{username} <span className="message__timestamp">
                {new Date(timestamp?.toDate()).toUTCString()}</span></h4>
            <p>{message}</p>
            <a href={link}>{link}</a>
          
            {image && (
              <img src={image} className="sendimage" alt="hii"/>
            )}
        </div>

    </div>
  )
}

export default Message
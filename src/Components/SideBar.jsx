import React, { useEffect, useState } from 'react'
import "./header.css";
import CreateIcon from '@mui/icons-material/Create';
import CircleIcon from '@mui/icons-material/Circle';
import SidebarOption from './SidebarOption';
import InsertComment from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import db from "../firebase";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
const SideBar = () => {
  const {user} = useSelector(state=>state.auth)
  const [channels,setChannels] = useState([]);
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };



  useEffect(()=>{
db.collection('rooms').onSnapshot((snapshot)=>(
  setChannels(snapshot.docs.map((doc)=>({
    id:doc.id,
    name:doc.data().name
  })))
))
  },[])


  return (
    <div className="sidebar">
      <div className="sidebar__header">
 <div className="sidebar__info">

          <h2>Core Computer...</h2>
          <h3>
            <CircleIcon/>
       {user?.displayName}
          </h3>
      
 </div>
 <CreateIcon/>

      </div>
      <Accordion className='zxcv' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='sum' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className='sum'
        >
          <Typography className='typo'>Feautures</Typography>
          {/* <SidebarOption Icon={ExpandLessIcon} title={"Show less"}/> */}
        </AccordionSummary>
        <AccordionDetails  className='sum'>
        <SidebarOption Icon={InsertComment} title={"Threads"}/>
      <SidebarOption Icon={InboxIcon} title={"Mentions & reactions"}/>
      <SidebarOption Icon={DraftsIcon} title={"Saved items"}/>
      <SidebarOption Icon={TurnedInNotIcon} title={"Channel browser"}/>
      <SidebarOption Icon={PeopleAltIcon} title={"People & user groups"}/>
      <SidebarOption Icon={AppsIcon} title={"Apps"}/>
      <SidebarOption Icon={FileCopyIcon} title={"File browser"}/>
        </AccordionDetails>
      </Accordion>
    
   
      <hr/>

      <Accordion className='zxcv'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='sum' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className='sum'
        >
      <Typography className='typo'>Channels</Typography>
        </AccordionSummary>
        <AccordionDetails className='sum'>
 
      <SidebarOption Icon={AddIcon} addChannelOption title={"Add Channel"}/>
      {
  channels.map((channel)=>(
    <SidebarOption title={channel.name}  key={channel.id} id={channel.id}/>
  ))
}
        </AccordionDetails>
      </Accordion>
    
  
    </div>
  )
}

export default SideBar
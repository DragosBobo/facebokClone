import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Header() {
  return (
    <div className='header'> 
     <div className="header__left">   
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" 
      alt="" />
      <div className="header__input">
          <SearchIcon/>
            <input type="text" placeholder='Search Facebook '/>
      </div>
    
      </div>
      <div className="header__center"> 
      <div className="header__option  header__option--active">  
       <HomeIcon />
       </div> 
       <div className="header__option 
      ">
          <FlagIcon/>
            
      </div>
      <div className="header__option">
          <SubscriptionsOutlinedIcon/>
           
      </div>
      <div className="header__option">
          <SupervisedUserCircleIcon/>
            
      </div>
      <div className="header__option">
          <StorefrontOutlinedIcon/>
            
      </div>
       </div>
      <div className="header__right"> 
      <div className="header__info">
          <Avatar />
          <h4>hello</h4>
          <IconButton> 

              <AddIcon/>
          </IconButton>
          <IconButton> 

              <ForumIcon/>
          </IconButton>
          <IconButton> 

              <NotificationsActiveIcon/>

          </IconButton>
          <IconButton> 

              <ExpandMoreIcon/>
          </IconButton>
          </div>  </div>
 </div>
  )
}

export default Header
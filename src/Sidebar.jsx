import { ExpandMoreOutlined, LocalHospital } from '@mui/icons-material';
import React from 'react'
import "./Sidebar.css";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PeopleIcon from '@mui/icons-material/People';
import SidebarRow from './SidebarRow';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
function Sidebar() {
  return (
    <div className='sidebar'>  
        <SidebarRow src='https://scontent.ftsr1-2.fna.fbcdn.net/v/t39.30808-1/261398703_4339500649491565_8151971164601361986_n.jpg?stp=dst-jpg_p240x240&_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=FfT0n9nIbdUAX-DiAk7&_nc_ht=scontent.ftsr1-2.fna&oh=00_AT9gpH3aGKIr6wsoMD8AFEwDzlN4QdvRpzptWtqNDe6nUg&oe=621986F5' title='dragos'  />

        <SidebarRow Icon={LocalHospital}title="Covid-19 Information Center"  />
        <SidebarRow Icon={EmojiFlagsIcon  }title="Pages"  />
        <SidebarRow Icon={ PeopleIcon}title=" Friends"  />
        <SidebarRow Icon={ChatIcon}title="Messenger"  />
        <SidebarRow Icon={StorefrontIcon }title="MarketPlace"  />
        <SidebarRow Icon={ VideoLibraryIcon}title="Videos"  />
        <SidebarRow Icon={ExpandMoreOutlined}title="marketplace"  />
    
    </div>
  )
}

export default Sidebar
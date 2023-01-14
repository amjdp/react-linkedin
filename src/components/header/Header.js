import React from 'react';
import styles from "./Header.module.css";

import Search from '@mui/icons-material/Search';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import Home from '@mui/icons-material/Home';
import Chat from '@mui/icons-material/Chat';
import BusinessCenter from '@mui/icons-material/BusinessCenter';
import Notifications from '@mui/icons-material/Notifications';
import logo from "../../logo.svg";
import HeaderOptions from '../header_options/HeaderOptions';

function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.header__left}>
            <img src={logo} alt="logo"/>
            <div className={styles.header__search}>
            <Search/>
            <input type="text" placeholder='search' />
            </div>
            
        </div>
        <div className={styles.header__right}>
            <HeaderOptions Icons={Home} title = "Home" />
            <HeaderOptions Icons={SupervisorAccount} title = "My Network"/>
            <HeaderOptions Icons={BusinessCenter} title = "Jobs"/>
            <HeaderOptions Icons={Chat} title = "Chat"/>
            <HeaderOptions Icons={Notifications} title = "Notifications"/>
            <HeaderOptions avatar="https://shorturl.at/fgio9" title = "Me" />
        </div>
    </div>
  );
}

export default Header;
import React from 'react' ; 
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import * as FaIcons from 'react-icons/fa';
// import './sidebar.css';
import styles from './Sidebar.module.css';
import { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import {SidebarData} from '../utils/SidebarData';

const Sidebar = () => {
    const [isOpenSidebar,setIsOpenSidebar] = useState(false);
    const showSidebar = () =>{
        setIsOpenSidebar(prevState => !prevState);
    }
    const navMenuClass = isOpenSidebar ? [styles.navMenu,styles.active].join(' ') : styles.navMenu; 
    const listNavItems = SidebarData.map((item, index) => {
      return (
        <li key={index} className={styles.navText}>
          <Link to={item.path}>
            {item.icon}
            <span className={styles.span}>{item.title}</span>
          </Link>
        </li>
      );
    });
    return(
        <Fragment>
          <div className = {styles.navbar}>
            <div className = {styles.menuBars}>
              <Link to = '#' >
                <FaIcons.FaBars onClick = {showSidebar}/>
              </Link>
            </div>
            <h1 className  = {styles.heading}>Library Management</h1>
          </div>
          <nav className={navMenuClass}>
            <ul className = {styles.navMenuItems} onClick={showSidebar}>
              <li className={styles.navbarToggle}>
                <Link to='#' className={styles.menuBarsText}>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {listNavItems}
            </ul>
          </nav>
        </Fragment>
    );
}
export default Sidebar ;
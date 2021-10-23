import React from 'react' ; 
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import * as FaIcons from 'react-icons/fa';
// import './sidebar.css';
import styles from './Sidebar.module.css';
import { useState ,useContext} from 'react';
import * as AiIcons from 'react-icons/ai';
import {SidebarData} from '../utils/SidebarData';
import AuthContext from './store/auth-context';
const Sidebar = (props) => {
    const [isOpenSidebar,setIsOpenSidebar] = useState(false);
    const [isLogin,setIsLogin] = useState(true);
    const showSidebar = () =>{
        setIsOpenSidebar(prevState => !prevState);
    }
    const authCtx = useContext(AuthContext);
   
    const logoutHandler = (path) => {
      if(path === '/login'){
        authCtx.logout();
        localStorage.removeItem('token');
        setIsLogin(false);
      }
    }

    const navMenuClass = isOpenSidebar ? [styles.navMenu,styles.active].join(' ') : styles.navMenu; 
    const listNavItems = SidebarData.map((item, index) => {
      return (
        <li key={index} className={styles.navText} onClick={logoutHandler}>
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
            {authCtx.isLoggedIn?<div className = {styles.menuBars}>
              <Link to = '#' >
                <FaIcons.FaBars onClick = {showSidebar}/>
              </Link>
            </div>:null}
            <h1 className  = {styles.heading}>Library Management</h1>
          </div>
          <nav className={navMenuClass}>
            {authCtx.isLoggedIn?<ul className = {styles.navMenuItems} onClick={showSidebar}>
              <li className={styles.navbarToggle}>
                <Link to='#' className={styles.menuBarsText}>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {listNavItems}
            </ul>:null}
          </nav>
        </Fragment>
    );
}
export default Sidebar ;
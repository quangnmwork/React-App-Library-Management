import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    
  },
  {
    title: 'Upload Book',
    path: '/upload',
    icon: <AiIcons.AiFillFolderAdd />,
    
  },
  {
    title: 'Management Book',
    path: '/manage',
    icon: <IoIcons.IoMdListBox />,
    
  },
  {
    title: 'Log out',
    path:'/login',
    icon : <IoIcons.IoMdLogOut/>
  }
];

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';

const items = [
  <SidebarItem>Dashboard</SidebarItem>,
  <SidebarItem>Profile</SidebarItem>,
  <SidebarItem>Settings</SidebarItem>,
  <SidebarItem>Logout</SidebarItem>,
];

ReactDOM.render(
  <Sidebar background="#8064A2" closeOnBackdropClick={true} width="200" content={items}>
    <App />
  </Sidebar>,
  document.getElementById('root')
);

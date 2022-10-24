import React from 'react';
import { NavLink , Link } from 'react-router-dom';
import Selector from './selector';
import { useTranslation } from 'react-i18next';
import { GB , IR } from 'country-flag-icons/react/3x2'
import Home from './home';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

const Sidebar = () => {
  const { t, i18n } = useTranslation();
  const changeLanguageHandler = (e) => {
    var style = document.createElement('style');
      const languageValue = e.target.value;
      i18n.changeLanguage(languageValue);
      if(languageValue === 'fa'){
        style.innerHTML =`
        .sidebar {
          direction : rtl;
        }
        .items {
          direction : rtl;
          text-align : right;
        }
        `;
        document.head.appendChild(style);
     }
      else {
        style.innerHTML =`
        .sidebar {
          direction : ltr;
        }
        .items {
          direction : ltr;
          text-align : left;
        }
        `;
        document.head.appendChild(style);
      }
  }

  return (
    <div className='sidebar'>
    <div style={{ display: 'grid', height: '100vh',width:'200px', overflow: 'scroll initial',position:'fixed'}} className=" col-md-2">
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <p>
            {t('menu')}
          </p>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
          <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home" className='items'>{t('home')}</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns" className='items'>{t('dashboard')}</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/selector" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="camera" className='items'>{t('image Selector')}</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user" className='items'>{t('profile')}</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line" className='items'>{t('analytics')}</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent> 
        <CDBSidebarFooter prefix={<i className="fa fa-bars fa-large"></i>}>
          <center>
            <select className="custom-select" style={{width: 50}} onChange={changeLanguageHandler}>
              <option value="en" className=''>English</option>
              <option value="fa" >فارسی</option>
            </select>
            {/* <IR style={{width:'2em' , marginRight:'1em'}} onChange={changeLanguageHandler} value={'fa'}/>
            <GB style={{width:'2em'}} onChange={changeLanguageHandler} value={'en'}/> */}
        </center>
        </CDBSidebarFooter>
      </CDBSidebar> 
    </div>
    </div>
  );
};

export default Sidebar;
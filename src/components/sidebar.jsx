import React from 'react';
import { NavLink , Link } from 'react-router-dom';
import Selector from './selector';
import { useTranslation } from 'react-i18next';
import { GB , IR } from 'country-flag-icons/react/3x2'
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
      const languageValue = e.target.value;
      i18n.changeLanguage(languageValue);
      if(languageValue === 'fa'){
        document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");
     }
    else {
        document.getElementsByTagName('html')[0].setAttribute("dir", "ltr");
    }
  }

  return (
    <div style={{ display: 'grid', height: '100vh',width:'200px', overflow: 'scroll initial',position:'fixed'}} className="col-md-2">
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <p>
            {t('menu')}
          </p>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
          <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">{t('home')}</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">{t('dashboard')}</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/selector" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="camera">{t('image Selector')}</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">{t('profile')}</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">{t('analytics')}</CDBSidebarMenuItem>
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
  );
};

export default Sidebar;
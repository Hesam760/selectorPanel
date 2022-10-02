import React, { Component } from 'react';
import Selector from './components/selector';
import Sidebar from './components/sidebar';
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Main from './components/main';
import { useTranslation } from "react-i18next";
import { useState } from 'react';

function App() {
    const { t, i18n } = useTranslation();

    const changeLanguageHandler = (e) => {
         const languageValue = e.target.value;
        i18n.changeLanguage(languageValue);
    }
        return (
            <div className='row'>
            <Sidebar/>
            {/* <Main/> */}
           </div>
        );
}
 
export default App;
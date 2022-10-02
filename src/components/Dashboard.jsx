import React, { Component } from 'react';
import { useTranslation } from "react-i18next";

const Dashboard = () => {
    const { t, i18n } = useTranslation();
    const changeLanguageHandler = (e) => {
        const languageValue = e.target.value;
        i18n.changeLanguage(languageValue);
    }

    return (
        <>  
            {/* <select className="custom-select" style={{width: 200 ,display:'flex', justifyContent:'center', position:'relative', left:'1000px'}} onChange={changeLanguageHandler}>
                <option value="en" >English</option>
                <option value="fa" >فارسی</option>
            </select> */}
        <h1 style={{marginBottom:'3em',textAlign:'center',color:'white',backgroundColor:'black',paddingBottom:'1.1em'}}>{t('dashboard')}</h1>
        </> 
    );
}
 
export default Dashboard;
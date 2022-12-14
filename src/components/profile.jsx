import React, { Component } from 'react';
import { useTranslation } from 'react-i18next';

const Profile = () => {
    const { t, i18n } = useTranslation();
    const changeLanguageHandler = (e) => {
        const languageValue = e.target.value;
        i18n.changeLanguage(languageValue);
    }
    return (
        <>
        <h1 style={{marginBottom:'3em',textAlign:'center',color:'white',backgroundColor:'black',paddingBottom:'1.1em'}}>{t('profile')} </h1>
        </> 
    );
}
 
export default Profile;
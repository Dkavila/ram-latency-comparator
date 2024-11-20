import React from 'react';
import { useTranslation } from 'react-i18next'; 
import './Header.css'; 

const Header = ({ setLanguage }) => {
  const { t, i18n } = useTranslation(); 

  const handleLanguageChange = (event) => {
    const language = event.target.value;
    i18n.changeLanguage(language); 
    setLanguage(language); 
  };

  return (
    <header className="header">
      <h1>{t('header.app_name')}</h1>
      <div className="language-selector">
        <label htmlFor="language-select">{t('language')}</label>
        <select id="language-select" onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="pt">Português</option>
          <option value="es">Español</option>
        </select>
      </div>
    </header>
  );
};

export default Header;

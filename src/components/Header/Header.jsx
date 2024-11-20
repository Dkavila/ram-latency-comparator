// src/components/Header/Header.jsx

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; 
import './Header.css'; 

const Header = ({ setLanguage }) => {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setLanguage(language);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const currentLanguage = i18n.language.toUpperCase();

  return (
    <header className="header">
      <h1>{t('header.app_name')}</h1>
      <div className="language-selector">
        <button
          className="language-button"
          onClick={toggleDropdown}
        >
          {currentLanguage}
        </button>
        {dropdownOpen && (
          <div className="language-dropdown">
            <button onClick={() => handleLanguageChange('en')}>EN</button>
            <button onClick={() => handleLanguageChange('pt')}>PT</button>
            <button onClick={() => handleLanguageChange('es')}>ES</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

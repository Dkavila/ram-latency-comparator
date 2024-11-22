// src/components/Header/Header.jsx

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';
import logo from '../../assets/logo.png';

const Header = ({ setLanguage }) => {
  const { t, i18n } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setLanguage(language);
    setExpanded(false);
  };

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const languages = ['en', 'pt', 'es'];
  const currentLanguage = i18n.language;

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <h1>{t('header.app_name')}</h1>
      <div className="language-selector">
        <button
          className={`language-button ${expanded ? 'expanded' : ''}`}
          onClick={toggleExpansion}
        >
          {expanded ? '' : currentLanguage.toUpperCase()}
        </button>
        <div className={`language-options ${expanded ? 'show' : ''}`}>
          {languages.map((lang) => (
            <button key={lang} onClick={() => handleLanguageChange(lang)}>
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

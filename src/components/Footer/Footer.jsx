// src/components/Footer/Footer.jsx

import React from 'react';
import './Footer.css';
import { t } from 'i18next';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Derick Avila. {t('footer.rightsReserved')}</p>
      <p>
        <a href="https://www.linkedin.com/in/derick-avila" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{' '}
        |{' '}
        <a href="https://github.com/Dkavila/ram-latency-comparator" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;

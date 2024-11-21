// src/components/Disclaimers/Disclaimers.jsx

import React, { useState } from 'react';
import './Disclaimers.css';
import { useTranslation } from 'react-i18next';

const Disclaimers = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className="disclaimers-btn-container">
        <button className="disclaimers-btn" onClick={toggleModal}>
          {t('disclaimers.title')}
        </button>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>{t('disclaimers.title')}</h3>
              <button className="close-btn" onClick={toggleModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>{t('disclaimers.goodScores')}</p>
              <p>{t('disclaimers.latencyCalculation')}</p>
              <p>{t('disclaimers.scoreExplanation')}</p>
              <p>{t('disclaimers.subjectivity')}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Disclaimers;

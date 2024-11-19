import React, { useState } from 'react';
import './MemoryForm.css';
import { useTranslation } from 'react-i18next';

const MemoryForm = ({ addMemory }) => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [cl, setCl] = useState('');
  const [type, setType] = useState('DDR1');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (speed && cl) {
      addMemory({ name: name || '', speed, cl, type });
      setName('');
      setSpeed('');
      setCl('');
      setType('DDR1');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="memory-form">
      <input
        type="text"
        placeholder={t('memoryForm.name')}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder={t('memoryForm.speed')}
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
      />
      <input
        type="number"
        placeholder={t('memoryForm.cl')}
        value={cl}
        onChange={(e) => setCl(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="DDR1">DDR1</option>
        <option value="DDR2">DDR2</option>
        <option value="DDR3">DDR3</option>
        <option value="DDR4">DDR4</option>
        <option value="DDR5">DDR5</option>
      </select>
      <button type="submit">{t('memoryForm.add')}</button>
    </form>
  );
};

export default MemoryForm;

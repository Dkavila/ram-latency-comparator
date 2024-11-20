// src/components/MemoryForm/MemoryForm.jsx

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../Fields/Input/Input';
import Select from '../Fields/Select/Select';
import './MemoryForm.css';

const MemoryForm = ({ addMemory }) => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [cl, setCl] = useState('');
  const [type, setType] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!speed) newErrors.speed = t('memoryForm.required');
    if (!cl) newErrors.cl = t('memoryForm.required');
    if (!type) newErrors.type = t('memoryForm.required');

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      addMemory({ name: name || '', speed, cl, type });
      setName('');
      setSpeed('');
      setCl('');
      setType('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="memory-form">
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={t('memoryForm.name')}
        showError={!!errors.name}
        errorMessage={t('memoryForm.required')}
      />
      <Input
        type="number"
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
        placeholder={t('memoryForm.speed')}
        showError={!!errors.speed}
        errorMessage={errors.speed}
      />
      <Input
        type="number"
        value={cl}
        onChange={(e) => setCl(e.target.value)}
        placeholder={t('memoryForm.cl')}
        showError={!!errors.cl}
        errorMessage={errors.cl}
      />
      <Select
        id="memory-type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        error={errors.type}
        options={[
          { value: 'DDR1', label: 'DDR1' },
          { value: 'DDR2', label: 'DDR2' },
          { value: 'DDR3', label: 'DDR3' },
          { value: 'DDR4', label: 'DDR4' },
          { value: 'DDR5', label: 'DDR5' },
        ]}
        placeholder={t('memoryForm.type')}
      />
      <button type="submit">{t('memoryForm.add')}</button>
    </form>
  );
};

export default MemoryForm;

import React, { useState } from 'react';
import './MemoryForm.css';

const MemoryForm = ({ addMemory }) => {
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [cl, setCl] = useState('');
  const [type, setType] = useState('DDR1');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (speed && cl) {
      addMemory({ name: name || 'Sem nome', speed, cl, type });
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
        placeholder="Nome da Memória (opcional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Speed (MT/s)"
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
      />
      <input
        type="number"
        placeholder="CL"
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
      <button type="submit">+</button>
    </form>
  );
};

export default MemoryForm;

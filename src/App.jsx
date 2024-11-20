import React, { useState } from 'react';
import MemoryForm from './components/MemoryForm/MemoryForm';
import MemoryList from './components/MemoryList/MemoryList';
import Header from './components/Header/Header'; // Importando o Header
import './App.css';

const App = () => {
  const [memories, setMemories] = useState([
    { id: 1, name: 'Memory 1', speed: 8000, cl: 1, type: 'DDR5' },
    { id: 2, name: 'Memory 2', speed: 8000, cl: 10, type: 'DDR5' },
    { id: 3, name: 'Memory 3', speed: 8000, cl: 20, type: 'DDR5' },
    { id: 4, name: 'Memory 4', speed: 8000, cl: 30, type: 'DDR5' },
    { id: 5, name: 'Memory 5', speed: 8000, cl: 40, type: 'DDR5' },
    { id: 6, name: 'Memory 6', speed: 8000, cl: 45, type: 'DDR5' },
    { id: 7, name: 'Memory 7', speed: 8000, cl: 50, type: 'DDR5' },
    { id: 8, name: 'Memory 8', speed: 8000, cl: 60, type: 'DDR5' },
    { id: 9, name: 'Memory 9', speed: 8000, cl: 70, type: 'DDR5' },
    { id: 10, name: 'Memory 10', speed: 8000, cl: 80, type: 'DDR5' },
  ]);
  const [idCounter, setIdCounter] = useState(11);
  const [language, setLanguage] = useState('en');

  const addMemory = (memory) => {
    setMemories([...memories, { ...memory, id: idCounter }]);
    setIdCounter(idCounter + 1);
  };

  const removeMemory = (id) => {
    setMemories(memories.filter((memory) => memory.id !== id));
  };

  return (
    <div className="main-container">
      <div className="app-container">
        <Header setLanguage={setLanguage} />
        <MemoryForm addMemory={addMemory} />
        <MemoryList memories={memories} removeMemory={removeMemory} />
      </div>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import MemoryForm from './components/MemoryForm/MemoryForm';
import MemoryList from './components/MemoryList/MemoryList';
import Header from './components/Header/Header';
import Disclaimers from './components/Disclaimers/Disclaimers';
import './App.css';
import Footer from './components/Footer/Footer';

const App = () => {
  const [memories, setMemories] = useState([]);
  const [idCounter, setIdCounter] = useState(0);
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
        <Disclaimers />
      </div>
      <Footer />
    </div>
  );
};
export default App;

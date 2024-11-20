// src/components/MemoryList/MemoryList.jsx

import React from 'react';
import { calculateLatency } from '../../utils/latencyCalculator';
import { calculateScore } from '../../utils/scoreCalculator';
import { calculateColor } from '../../utils/colorCalculator';
import { useTranslation } from 'react-i18next';
import './MemoryList.css';

const MemoryList = ({ memories, removeMemory }) => {
  const { t } = useTranslation(); 
  
  return (
    <table>
      <thead>
        <tr>
          <th>{t('memoryList.header.id')}</th>
          <th>{t('memoryList.header.name')}</th>
          <th>{t('memoryList.header.speed')}</th>
          <th>{t('memoryList.header.cl')}</th>
          <th>{t('memoryList.header.type')}</th>
          <th>{t('memoryList.header.latency')}</th>
          <th>{t('memoryList.header.score')}</th>
          <th>{t('memoryList.header.actions')}</th>
        </tr>
      </thead>
      <tbody>
        {memories.map((memory) => {
          const latency = calculateLatency(memory.cl, memory.speed);
          const score = calculateScore(latency, memory.type);
          const color = calculateColor(score);

          return (
            <tr key={memory.id}>
              <td>{memory.id}</td>
              <td>{memory.name}</td>
              <td>{memory.speed}</td>
              <td>{memory.cl}</td>
              <td>{memory.type}</td>
              <td>{latency !== null ? latency : 'N/A'}</td>
              <td style={{ color: color }}>{score.toFixed(2)}</td>
              <td>
                <button onClick={() => removeMemory(memory.id)}>
                  {t('memoryList.remove')}
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MemoryList;

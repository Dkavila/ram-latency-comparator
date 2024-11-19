import React from 'react';
import { calculateLatency } from '../../utils/latencyCalculator'; 
import { calculateScore } from '../../utils/scoreCalculator';
import { calculateColor } from '../../utils/colorCalculator';
import './MemoryList.css';

const MemoryList = ({ memories, removeMemory }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>MT/s</th>
          <th>CL</th>
          <th>Tipo</th>
          <th>Latência (ns)</th>
          <th>Nota</th>
          <th>Ações</th>
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
                <button onClick={() => removeMemory(memory.id)}>Remover</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MemoryList;

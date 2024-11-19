import React from 'react';
import { calculateLatency } from '../../utils/latencyCalculator'; // Função de latência
import { calculateScore } from '../../utils/scoreCalculator'; // Função de nota
import { calculateColor } from '../../utils/colorCalculator'; // Função de cor

const MemoryList = ({ memories, removeMemory }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>MT/s</th>
          <th>CL</th>
          <th>Tipo</th> {/* Nova coluna para Tipo */}
          <th>Latência (ns)</th>
          <th>Nota</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {memories.map((memory) => {
          const latency = calculateLatency(memory.cl, memory.speed);  // Calcular latência
          const score = calculateScore(latency, memory.type);  // Calcular nota com base na latência
          const color = calculateColor(score);  // Calcular a cor baseada na nota
          
          return (
            <tr key={memory.id}>
              <td>{memory.id}</td>
              <td>{memory.name}</td>
              <td>{memory.speed}</td>
              <td>{memory.cl}</td>
              <td>{memory.type}</td> {/* Exibindo o tipo de memória */}
              <td>{latency !== null ? latency : 'N/A'}</td>
              <td style={{ color: color }}>{score.toFixed(2)}</td> {/* Aplicando a cor */}
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

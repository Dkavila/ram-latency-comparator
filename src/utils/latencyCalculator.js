// src/utils/latencyCalculator.js

export const calculateLatency = (cl, mts) => {
    // Verifica se os valores são válidos
    if (isNaN(cl) || isNaN(mts) || cl <= 0 || mts <= 0) {
      return 'N/A'; 
    }
  
    // Calcula a latência usando a fórmula fornecida
    const latency = (1 / (mts / 2) * cl) * 1000;
  
    // Retorna a latência com até 3 casas decimais
    return latency.toFixed(3);
  };
  
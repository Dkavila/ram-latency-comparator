const getMemoryBonus = (memoryType) => {
  const memoryData = {
    DDR1: { bonus: 0 },               // DDR1 é a base (sem bônus)
    DDR2: { bonus: 0.2 },             // DDR2 tem um pequeno bônus
    DDR3: { bonus: 0.5 },             // DDR3 tem um bônus moderado
    DDR4: { bonus: 0.8 },             // DDR4 tem um bônus considerável
    DDR5: { bonus: 1.0 }              // DDR5 tem o maior bônus
  };

  return memoryData[memoryType] || { bonus: 0 };
};

export const calculateScore = (latency, memoryType) => {
  // Definir os limites de latência para a transição de notas
  const minLatency = 0;  // Latência mínima
  const maxLatency = 18; // Latência máxima para pontuação 0
  const targetLatency = 10;  // Latência para pontuação 6

  // Se a latência for menor ou igual a 0, a nota é 10
  if (latency <= minLatency) {
    return 10;
  }

  // Se a latência for maior ou igual a 18, a nota é 0
  if (latency >= maxLatency) {
    return 0;
  }

  // Cálculo da pontuação com base na latência
  let score;
  if (latency <= targetLatency) {
    score = 10 - (latency / targetLatency) * 3.5;
  } else {
    score = 6 - (latency - targetLatency) * 0.5;
  }

  // Ajustes baseados no tipo de memória (bônus para memórias mais recentes)
  const { bonus } = getMemoryBonus(memoryType);
  const finalScore = Math.min(Math.max(score + bonus, 0), 10);

  // Retornar a pontuação final, com o bônus aplicado
  return parseFloat(finalScore.toFixed(2)); // Garantir 2 casas decimais
};

const getMemoryBonus = (memoryType) => {
  const memoryData = {
    DDR1: { bonus: 0 },
    DDR2: { bonus: 0.2 },
    DDR3: { bonus: 0.5 },
    DDR4: { bonus: 0.8 },
    DDR5: { bonus: 1.0 }
  };

  return memoryData[memoryType] || { bonus: 0 };
};

export const calculateScore = (latency, memoryType) => {
  const minLatency = 0;
  const maxLatency = 18;
  const targetLatency = 10;

  if (latency <= minLatency) {
    return 10;
  }

  if (latency >= maxLatency) {
    return 0;
  }

  let score;
  if (latency <= targetLatency) {
    score = 10 - (latency / targetLatency) * 3.5;
  } else {
    score = 6 - (latency - targetLatency) * 0.5;
  }

  const { bonus } = getMemoryBonus(memoryType);
  const finalScore = Math.min(Math.max(score + bonus, 0), 10);

  return parseFloat(finalScore.toFixed(2));

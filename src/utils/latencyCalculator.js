// src/utils/latencyCalculator.js

export const calculateLatency = (cl, mts) => {
    if (isNaN(cl) || isNaN(mts) || cl <= 0 || mts <= 0) {
      return 'N/A'; 
    }

    const latency = (1 / (mts / 2) * cl) * 1000;
    return latency.toFixed(3);
  };
  
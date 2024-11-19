import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import MemoryList from "../../../src/components/MemoryList/MemoryList.jsx";

describe('MemoryList Component', () => {
  const memories = Array.from({ length: 80 }, (_, index) => ({
    id: index + 1,
    name: `Memory ${index + 1}`,
    speed: 8000,
    cl: index + 1,
  }));

  it('renders MemoryList table correctly', () => {
    render(<MemoryList memories={memories} removeMemory={vi.fn()} />);
    
    memories.forEach((memory) => {
      const memoryElement = screen.queryByText(memory.name);
      expect(memoryElement).toBeTruthy(); 
    });
  });

  it('calculates latency and score correctly', () => {
    render(<MemoryList memories={memories} removeMemory={vi.fn()} />);
    
    const latency1 = screen.queryByText('0.250');
    expect(latency1).toBeTruthy();

    const score1 = screen.queryByText('9.84');
    expect(score1).toBeTruthy();

    const latency2 = screen.queryByText('0.500');
    expect(latency2).toBeTruthy();

    const score2 = screen.queryByText('9.69');
    expect(score2).toBeTruthy();
  });
});

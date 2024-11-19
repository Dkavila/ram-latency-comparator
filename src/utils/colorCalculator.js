export const calculateColor = (score) => {

  
  // Garante que a nota esteja entre 0 e 10
  const normalizedScore = Math.max(0, Math.min(10, score));

  if(normalizedScore >= 9){
      const red = 0; 
      const green = Math.floor((normalizedScore - 4) * 60); 
      const blue = Math.floor((normalizedScore - 5) * 60);
      return `rgb(${red}, ${green}, ${blue})`; // Retorna a cor no formato RGB
  }

  if(normalizedScore >= 7){
      const red = Math.floor((normalizedScore - 8) * 60); 
      const green = Math.floor((normalizedScore - 5) * 60); 
      const blue = Math.floor((normalizedScore - 5) * 30);
      return `rgb(${red}, ${green}, ${blue})`; // Retorna a cor no formato RGB
  }

  if(normalizedScore >= 5){
    const red = Math.floor((normalizedScore -2) * 61); 
      const green = Math.floor((normalizedScore - 3) * 70); 
      const blue = Math.floor((normalizedScore - 3) * 30);
    return `rgb(${red}, ${green}, ${blue})`; // Retorna a cor no formato RGB
}

  if(normalizedScore >= 3){
    const red = Math.floor((normalizedScore - 1) * 59); 
    const green = Math.floor((normalizedScore -4 ) * 15); 
    const blue = Math.floor((normalizedScore - 4) * 15);
    return `rgb(${red}, ${green}, ${blue})`; // Retorna a cor no formato RGB
  }

  if(normalizedScore >= 0){
    const red = Math.floor((normalizedScore) * 60); 
    const green = Math.floor((normalizedScore -3) * 15); 
    const blue = Math.floor((normalizedScore -1) * 15);
    return `rgb(${red}, ${green}, ${blue})`; // Retorna a cor no formato RGB
  }


  const red = Math.floor(
    normalizedScore < 5 ? normalizedScore * 25 : normalizedScore 
      // O vermelho é intensificado quando a nota for abaixo de 5
  );
  const green = Math.floor(
    normalizedScore < 5 ? normalizedScore : normalizedScore   // Aumenta o verde gradualmente após a nota 4
  );
  // Ajustando para que o amarelo seja visível na faixa de 4-6
  const blue = Math.floor(
    normalizedScore < 5 ? normalizedScore * 25 : (normalizedScore - 5) * 51 // O azul começa a aparecer após a nota 5
  );
  return `rgb(${red}, ${green}, ${blue})`; // Retorna a cor no formato RGB
};

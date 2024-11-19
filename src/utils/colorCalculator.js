export const calculateColor = (score) => {

    const normalizedScore = Math.max(0, Math.min(10, score));

  if(normalizedScore >= 9){
      const red = 0; 
      const green = Math.floor((normalizedScore - 4) * 60); 
      const blue = Math.floor((normalizedScore - 5) * 60);
      return `rgb(${red}, ${green}, ${blue})`;
  }

  if(normalizedScore >= 7){
      const red = Math.floor((normalizedScore - 8) * 60); 
      const green = Math.floor((normalizedScore - 5) * 60); 
      const blue = Math.floor((normalizedScore - 5) * 30);
      return `rgb(${red}, ${green}, ${blue})`;
  }

  if(normalizedScore >= 5){
    const red = Math.floor((normalizedScore -2) * 61); 
      const green = Math.floor((normalizedScore - 3) * 70); 
      const blue = Math.floor((normalizedScore - 3) * 30);
    return `rgb(${red}, ${green}, ${blue})`;
}

  if(normalizedScore >= 3){
    const red = Math.floor((normalizedScore - 1) * 59); 
    const green = Math.floor((normalizedScore -4 ) * 15); 
    const blue = Math.floor((normalizedScore - 4) * 15);
    return `rgb(${red}, ${green}, ${blue})`;
  }

  if(normalizedScore >= 0){
    const red = Math.floor((normalizedScore) * 60); 
    const green = Math.floor((normalizedScore -3) * 15); 
    const blue = Math.floor((normalizedScore -1) * 15);
    return `rgb(${red}, ${green}, ${blue})`;
  }


  const red = Math.floor(
    normalizedScore < 5 ? normalizedScore * 25 : normalizedScore 
  );
  const green = Math.floor(
    normalizedScore < 5 ? normalizedScore : normalizedScore
  );
  const blue = Math.floor(
    normalizedScore < 5 ? normalizedScore * 25 : (normalizedScore - 5) * 51 
  );
  return `rgb(${red}, ${green}, ${blue})`;
};

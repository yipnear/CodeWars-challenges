function SeriesSum(num) 
{
  
  let resultado = 0;
  
  let soma = 1;
  
  for (let i = 0; i < num; i++)
  {
    
    if (i === 0)
    {
      resultado = 1;
    }
    
    else
    {
      
      soma += 3;
      
      resultado = resultado + (1 / soma);
      
    }
    
  }
  
  return resultado.toFixed(2);
  
  
};
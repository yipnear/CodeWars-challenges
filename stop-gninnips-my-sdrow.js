function spinWords(frase){
  
  const arrayPalavras = frase.split(' ');
  
  let fraseFinal = '';
  
  arrayPalavras.map((str, i) => {
    if (str.length >= 5) 
    {
    
       arrayPalavras[i] = str.split('').reverse().join('');
    }
    
    else
    {
      arrayPalavras[i] = str;    
    }
    
    fraseFinal = arrayPalavras.join(' ');
    
  });
  
  return fraseFinal;
  
}
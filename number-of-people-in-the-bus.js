var number = function(busStops){
  
  let pessoasChegam = 0;
  let pessoasSaem = 0;
  
  for (let i = 0; i < busStops.length; i++)
   {
     pessoasChegam += busStops[i][0];
     pessoasSaem += busStops[i][1];
   }
  
  let quantidadeFinal = pessoasChegam - pessoasSaem;
  
  return quantidadeFinal
  
}
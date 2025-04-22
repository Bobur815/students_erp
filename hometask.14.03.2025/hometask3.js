function yoshniTop(N, K) {
    let A=(K*N)/(K-1);
    let V=A-N; 
    return { Ali: A, Vali: V };
  }
  
  let N=5;
  let K=3;
  
  let natija=yoshniTop(N, K);
  console.log("Alining yoshi: " + natija.Ali);
  console.log("Valining yoshi: " + natija.Vali);
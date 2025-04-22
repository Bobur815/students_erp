function kattaKichikSonlarYiginisi(N) {
    let sonlar=N.toString().split('').map(Number);
    let maxSon = Math.max(...sonlar);
    let minSon = Math.min(...sonlar);
    return maxSon+minSon;
  }
  
  let N=123;
  let natija = kattaKichikSonlarYiginisi(N);
  console.log(natija);
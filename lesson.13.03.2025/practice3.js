function toqSonTop(n) {
    toqSonlar=0
    for (let i = 1; i< n; i++) {
      if (i%2!==0){
        toqSonlar+=i
      }
    }

return toqSonlar
}

console.log(toqSonTop(10));
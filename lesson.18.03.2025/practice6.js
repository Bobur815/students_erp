let a = [1, 3, 3, 5, 5, 7, 8, 9, 10];

let b = [...new Set(a)].sort((a, b) => b - a);

let ikkinchiMax = b[1];
console.log(ikkinchiMax);
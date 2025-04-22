function sum(n) {
    let birinchiRaqam = Math.floor(n / 10);
    let ikkinchiRaqam = n % 10;
    return birinchiRaqam + ikkinchiRaqam;
}

console.log(sum(123));

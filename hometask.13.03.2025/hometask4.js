function nolSoni(n, m) {
    let count = 0;

    for (let i = n; i <= m; i++){
        while (i%5 === 0 && i > 0) {
            count++;
            i /= 5;
        }
    }
    return "Ko'paytmaning oxiridagi nollar soni: " + count;
}

let n = 10;
let m = 25;
console.log(nolSoni(n, m));
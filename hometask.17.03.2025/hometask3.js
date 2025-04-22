function raqamTekshir(raqam) {
    let andoza = /^30[A-Z]{2}\d{3}[A-Z]$/;
    return andoza.test(raqam) ? "yes" : "no";
}

console.log(raqamTekshir("30AB123C"));
console.log(raqamTekshir("30ABC12C"));
console.log(raqamTekshir("145ABC154"));
console.log(raqamTekshir("30XY999Z"));
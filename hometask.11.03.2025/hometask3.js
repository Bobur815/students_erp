let R_A=5;
let B_A=5;
let R_U=10;
let B_U=10;
let R_O=5;
let B_0=5;

if (R_A>B_A) {
    console.log("Qizil jamoa g'olib!");
} else if (B_A>R_A) {
    console.log("Ko'k jamoa g'olib!");
} else {
    if (R_U>B_U) {
        console.log("Qizil jamoa g'olib!");
    } else if (B_U>R_U) {
        console.log("Ko'k jamoa g'olib!");
    } else {
        if (R_O<B_0) {
            console.log("Qizil jamoa g'olib!");
        } else if (B_0<R_O) {
            console.log("Ko'k jamoa g'olib!");
        } else {
            console.log("Durrang!");
        }
    }
}
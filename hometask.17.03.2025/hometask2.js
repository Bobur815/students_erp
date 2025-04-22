function tartiblashtir(s) {
    let toq="";
    let juft="";

    for (let i=0; i<s.length; i++) {
        if (i%2===0) {
            toq+=s[i];
        } else {
            juft+=s[i];
        }
    }

    return toq+juft;
}

let s = "Abduraxmon";
let natija=tartiblashtir(s);
console.log(natija);

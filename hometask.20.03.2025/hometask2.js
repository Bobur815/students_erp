function kimBirinchYetibKeldi(A, B) {
    if (A<B) {
        console.log("Vali");
    } 
    
    else if (A>B) {
        console.log("Ali");
    } 
    
    else{
        console.log("Same");
    }
}

let A = parseInt(prompt("Valining masofasi: "));
let B = parseInt(prompt("Alining masofasi: "));

kimBirinchYetibKeldi(A, B);
let x=parseFloat(prompt("x:"));
let y=parseFloat(prompt("y:"));

if (isNaN(x) || isNaN(y)) {
    alert("Iltimos, to'g'ri son kiriting");
} else {
    let surat=x+(y/(x**2+4));
    let maxraj=Math.exp(-(x+2))+Math.sqrt(x**2+4);
    let A=(y+1)*(surat/maxraj);

    let B=1+Math.tan((A*Math.PI)/2)**2*(x**2+4)**(1/5);

    console.log(`A =${A}`);
    console.log(`B = ${B}`);
    alert(`Natijalar:\nA = ${A}\nB = ${B}`);
}
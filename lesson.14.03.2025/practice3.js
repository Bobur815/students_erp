let a=10
function test() {
    var b=20
    if (true) {
        let c=30
        console.log(a,b,c);
    }
    console.log(a,b);
}

test()
console.log(a);
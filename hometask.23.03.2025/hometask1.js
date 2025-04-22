function boboVaNabira(x,y) {
    let boboYoshi=2022-y;
    let nabiraYoshi=2022-x;
    let boboYilOxiri=y%100;

    if (boboYoshi===boboYilOxiri) {
        console.log(nabiraYoshi, boboYoshi);
    } 
    else {
        console.log("NO");
    }
}

boboVaNabira(1912, 1859);
boboVaNabira(1916, 1866);
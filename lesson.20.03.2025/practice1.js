let map = new Map([
    ["name", "Ali"],
    ["age", "23"],
    ["str", "salom"],
    [20, "alik"],
    [true, "true"]
]);

let obj = Object.fromEntries(map);

console.log(obj);
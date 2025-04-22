let user = {
    name: "ali",
    product:{
        type:[
            {name:"savzi",narx:12},
            {name:"nok",narx:120},
            {name:"olma",narx:102}
        ],
        others:[
            {name:"shim",narx:1299},
            {name:"mayka",narx:10020},
            {name:"fudbolka",narx:1902}
        ]
    }
}
//savzi, olmani narxi, fudbolka, shim narxi

let { product: {type:[{name},{},{narx}],others:[{narx:n},{},{name:f}]} } = user
console.log(name,narx,n,f);
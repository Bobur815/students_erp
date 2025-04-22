const { table } = require("console")
let readline=require("readline")

let app=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let questions=[
    "Nil daryosi uzunligi",
    "O'zbekiston poytaxti"
]

app.question("Isming nima?", name=>{
    app.question("Yoshing nechada?", age=>{
        console.table({"name":"Ali","age":23})
        app.close()
    })
})
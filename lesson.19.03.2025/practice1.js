let a = [
    {name:"Ali", surname: "Valiyev", age:23}, 
    {name:"Qodir", surname: "SAlimov",age:2}, 
    {name:"Ali", surname: "Valiyev",age:23}, 
    {name:"Ali", surname: "Salimov", age:20}, 
    {name:"Dilshod",surname: "Qodirov",age:23}
];

function myFilter(a,b) {
    return a.filter(obj=>{
        for (let key in b){
            if (obj[key]!==b[key]){
                return false
            }
        }
        return true;
    });
}

console.log(myFilter(a,{age:10}));
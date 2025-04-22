let ajx=new XMLHttpRequest()

ajx.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1", true)

ajx.setRequestHeader("Content-Type", "application/json")

ajx.onload=()=>{
    console.log(JSON.parse(ajx.responseText));
}

let newPost=JSON.stringify({
    userID:12,
    body: "Salom",
    title: "Alik"  
});

ajx.send()
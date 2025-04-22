const users={
    users:{
        password:"pass123",
        token:"abc123token"
    }
}

async function login(username,password) {
    const user = await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (users[username]) {
                resolve(users[username])
            }
            else{
                reject(new Error("Username topilmadi"))
            }
        },500)
    })

    const isPasswordCorrect=await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (user.password===password) {
                resolve(true)
            }
            else{
                reject(new Error("Parol noto'g'ri"))
            }
        },500)
    })

    if (isPasswordCorrect) {
        return user.token
    }
}

(async () => {
    try{
        const token=await login("user","pass123")
        console.log("Token:",token);        
    }
    catch(error){
        console.log("Login xatosi");        
    }
})()
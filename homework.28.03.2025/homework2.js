function isValidEmail(email) {
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

function fetchUserById(id) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const users={
                1:{id:1,name:"Ali",email:"ali@gmail.com"},
                2:{id:2,name:"Vali",email:"vali@gmail.com"}
            }
            const user=users[id]
            if (user) {
                resolve(user)
            }
            else{
                reject("Foydalanuvchi topilmadi")
            }
        }, 1000)
    })
}

async function getUserData(id) {
    const user=await fetchUserById(id)
    if (!isValidEmail(user.email)) {
        throw new Error("Email noto'g'ri formatda");
    }
    return user
}

(async () => {
    try {
        const user = await getUserData(1)
        console.log(user);
    } 
    catch (error) {
    console.log("Xatolik:", error.message);
    }
})()
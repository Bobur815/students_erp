async function saveData(data) {
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (!data.name||typeof data.age!=="number") {
                reject(new Error("Ma'lumot to'g'ri"))
            }
            else{
                resolve()
            }
        },1000)
    })

    await new Promise((resolve) => {
        setTimeout(()=>{
            console.log("Ma'lumot saqlandi:",data)
            resolve()
        },2000)
    })
    return "Success!"
}

(async () => {
    try {
        await saveData({name:"John", age:23})
        console.log("Data saqlandi");
    } catch (error) {
        console.log("Xatolik yuz berdi");            
    }
})()
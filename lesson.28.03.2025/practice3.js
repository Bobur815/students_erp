async function getUserData(id) {
    try {
        let response=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
            throw new Error("Foydalanuvchi topilmadi");
        }
        let user=await response.json();

        if (!validateEmail(user.email)){
            throw new Error("Noto'g'ri email formati");
        }

        return user;
    } catch (error) {
        throw error;
    }
}

function validateEmail(email) {
    let emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

(async ()=>{
    try {
        let user = await getUserData(1);
        console.log(user);
        
    } catch (error) {
        console.log("Xatolik:", error.message);
    }
})();
async function fetchData(APIs) {
    try {
        let responses=await Promise.all(APIs.map(api=>fetch(api).then(res=>res.json())));
        return responses;
    } catch (error) {
        throw new Error("Ma'lumotlarni olishda xatolik yuz berdi");
    }
}

let apis=[
    'https://jsonplaceholder.typicode.com/users/1',
    'https://jsonplaceholder.typicode.com/users/2',
    'https://jsonplaceholder.typicode.com/users/3'
];

(async () => {
    try {
        let results=await fetchData(apis);
        console.log(results);
    } catch (error) {
        console.log("Xatolik:", console.error.message);       
    }
})()
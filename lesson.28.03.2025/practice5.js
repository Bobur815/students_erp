async function processData(data) {
    try {
        if (!data || typeof data !== 'object') {
            throw new Error("Noto'g'ri ma'lumot turi");
        }
        if (!data.id) {
            throw new Error("ID mavjud emas");
        }

        if (data.value===null||data.value===undefined) {
            throw new Error("Value noto'g'ri");
        }

        console.log("Ma'lumot qayta ishlanmoqda:", data);
        return `Processed data: ${JSON.stringify(data)}`;
    } catch (error) {
        throw new Error(`Xatolik yuz berdi: ${error.message}`);
    }
}

(async () => {
    try {
        let result = await processData({id:1, value: 42});
        console.log(result);
        
    } catch (error) {
        console.log(error.message);
    }
})();
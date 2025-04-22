class DataProcessingError extends Error{
    constructor(message){
        super(message)
        this.name="DataProcessingError"
    }
}

async function processData(data) {
    if (!data||typeof data.id!=="number") {
        throw new DataProcessingError("ID noto'g'ri yoki yo'q");        
    }
    if (data.value==null) {
        throw new DataProcessingError("Vslue null yoki aniqlanmagan");        
    }
    const result={
        id:data.id,
        processedValue:data.value*2
    }
    return result
}

(async () => {
    try {
        await processData({id:1,value:null})
    } catch (error) {
        console.log(error.message);        
    }
})()
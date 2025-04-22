function fakeApiCall(api) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`${api} response`)
        },1000)
    })
}

async function fetchData(apis) {
    const promises=apis.map(api=>fakeApiCall(api))
    const results=await Promise.all(promises)
    return results
}

(async () => {
    const apis = ['api1', 'api2', 'api3']
    const results=await fetchData(apis)
    console.log(results);    
})()
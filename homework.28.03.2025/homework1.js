async function loadFiles(files) {
    const results=[];
    for (const file of files) {
        await new Promise((resolve)=>{
            setTimeout(()=>{
                const message = `${file} loaded`
                console.log(message);
                results.push(message)
                resolve();
            }, 1000)
        })
    }
    return results
}

(async () => {
    const files=['file1', 'file2', 'file3']
    const result=await loadFiles(files);
    console.log(result);
})()
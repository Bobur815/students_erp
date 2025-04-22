async function loadFiles(files) {
    for (let file of files) {
        await new Promise(resolve=>setTimeout(resolve, 1000));
        console.log(`${file} loaded`);
    }
    return "All files loaded"
}

let files = ['file1', 'file1', 'file3'];
loadFiles(files).then(result=>console.log(result));
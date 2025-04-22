function soatniChiqar() {
    setInterval(()=>{
        let hozir=new Date();
        let soat=hozir.getHours().toString().padStart(2, '0');
        let daqiqa=hozir.getMinutes().toString().padStart(2, '0');
        let sekund=hozir.getSeconds().toString().padStart(2, '0');

        console.clear();
        console.log(`${soat}:${daqiqa}:${sekund}`);
    }, 1000);
}

soatniChiqar();
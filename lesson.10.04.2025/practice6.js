class Timer{
    constructor(target){
        this.res = 0
        this.target = target
    }
    start(){

        this.interval = setInterval(()=>{
            this.res++
            console.log(this.res);
        },1000)

        this.end = setTimeout(() =>{
            clearInterval(this.interval)
        }, (this.target + 1) * 1000)
    }
    stop(){
        clearInterval(this.interval)
        clearTimeout(this.end)
    }
    getTime(){
        console.log(this.res)
        return this.res
    }
}
const timer = new Timer(60);
timer.start();
setTimeout(() => {
    timer.stop()
}, 6010);
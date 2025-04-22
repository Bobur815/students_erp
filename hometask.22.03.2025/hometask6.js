class Timer {
    constructor() {
        this.startTime=0;
        this.elapsedTime=0;
        this.running=false;
    }

    start() {
        if (!this.running) {
            this.startTime=Date.now()-this.elapsedTime;
            this.running=true;
        }
    }

    stop() {
        if (this.running) {
            this.elapsedTime=Date.now()-this.startTime;
            this.running=false;
        }
    }

    reset() {
        this.startTime=0;
        this.elapsedTime=0;
        this.running=false;
    }

    getTime() {
        return this.running ? Date.now()-this.startTime : this.elapsedTime;
    }
}

const timer=new Timer();
timer.start();

setTimeout(()=>{
    timer.stop();
    console.log(timer.getTime());
    timer.reset();
    console.log(timer.getTime());
}, 2000);
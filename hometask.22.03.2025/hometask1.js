class Counter {
    constructor() {
        this.count=0;
    }
    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }
    getCount() {
        return this.count;
    }
    reset() {
        this.count=0;
    }
}

const counter=new Counter();
counter.increment();
counter.increment();
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount());
counter.reset();
console.log(counter.getCount());
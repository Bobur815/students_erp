class Student {
    constructor(ism,yosh,kurs) {
        this.ism=ism
        this.yosh=yosh
        this.kurs=kurs
    }

    getInfo(){
        return `${this.ism}, ${this.yosh} yosh, ${this.kurs}-kurs`
    }

    nextCourse(){
        this.kurs+=1
    }
}

const student = new Student("Ali", 20, 2)
console.log(student.getInfo());
student.nextCourse();
console.log(student.getInfo());
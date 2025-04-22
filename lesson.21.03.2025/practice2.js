function untilDay(birthday) {
    result=0
    for (let i = 0; i < birthday.length; i++) {
        for (let j = 0; j < currentDay.length; j++) {
            result=currentDay[j]-birthday[i]          
        }
    }
}

let birthday = new Date(2006,22,8)
let currentDay=new Date(2025,21,3)
let nextBirthday=new Date(2025,22,8)
console.log(untilDay(birthday));
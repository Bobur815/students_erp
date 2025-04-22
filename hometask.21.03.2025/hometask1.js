function untilDay(birthday, currentDay) {
    let timeDiff=birthday.getTime()-currentDay.getTime();
    let daysLeft=Math.ceil(timeDiff/(1000 * 60 * 60 * 24));
    return daysLeft;
}

let birthday=new Date(2006, 7, 8);
let currentDay=new Date(2025, 2, 21);
let nextBirthday=new Date(2025, 7, 8);

console.log(untilDay(nextBirthday, currentDay));
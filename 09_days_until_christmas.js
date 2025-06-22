const today = new Date();
let cmas = new Date(today.getFullYear(), 11, 25);
if (today > cmas) cmas.setFullYear(today.getFullYear() + 1);
const oneDay = 1000 * 60 * 60 * 24;
const daysLeft = Math.ceil((cmas - today) / oneDay);
console.log(`${daysLeft} days left until Christmas!`);

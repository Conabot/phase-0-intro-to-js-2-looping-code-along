// Code your solutions in this file

function  writeCards(names, events) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
    }
    return messages;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));


function countDown(number) {
    while (number > 0) {
        console.log(number);
        number -= 1;
    }
    console.log(number);
}
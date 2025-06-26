/*let min = +prompt('random min sonini kiriting')
let max = +prompt('random max sonini kiriting')

let randomNumber = Math.random() * (max - min) + min;
let random = Math.ceil(randomNumber)

console.log(random);*/
alert('Sizda hozir random sonlar chiqishni boshledi😉');

let randomNumber = Math.floor(Math.random() * 100) + 1;

alert("Random orqali chiqan son: " + randomNumber);

let javob = confirm("biz random sonni 2 ga kopaytirmoqchi va bo'lmoqchimiz!");

if (javob){
    let kopaytma = randomNumber * 2;
    let bolindi2 = randomNumber / 2;
    let bolindi3 = bolindi2 / 3;
    let qoldiq = randomNumber % 3;

    alert(
        "Random orqali chiqan son: " + randomNumber + "\n" +
        "biz uni 2 ga ko'paytirib " + kopaytma + " sonini chiqardik," +"\n" +
        "va shu sonni 2 ga bo'lib: " + bolindi2 + " sonini chiqardik," + "\n" +
        "va shu sonni 3 ga bolgandagi qoldiq: " + qoldiq.toFixed(2)
    );
}else{
    alert("nme otmenani bosdin gey🏳️‍🌈💩");
}                                                                
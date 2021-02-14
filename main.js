const message = document.querySelector('.message');
const playerSelect = document.querySelector('.playerSelect');
const compSelected = document.querySelector('.compSelected');
const btns = document.querySelectorAll('.btn');
const winnermsg = document.querySelector('.winnermsg');
let points = document.querySelector('.points');
const coins = ['Heads', 'Tails'];

let Pcount = 0;
let Ccount = 0;

btns.forEach(btn => {
    btn.addEventListener('click', tossCoin);

});

function tossCoin(e) {


    let random = Math.floor(Math.random() * btns.length);
    let compToss = coins[random];
    let playerClick = e.target.textContent;

    if (playerClick === compToss) {
        Pcount++;
        winnermsg.textContent = `Player wins`;
        winnermsg.style.color = 'green';
    } else {
        Ccount++;
        winnermsg.textContent = `Computer wins`;
        winnermsg.style.color = 'red';
    }
    points.innerHTML = `Player Points:` + Pcount + '<br>' + `Computer Points:` + Ccount;
    playerSelect.textContent = `Player selected: ${playerClick}`;
    compSelected.textContent = `Computer selected: ${compToss}`;
}
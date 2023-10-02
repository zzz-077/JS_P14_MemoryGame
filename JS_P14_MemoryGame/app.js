const box = document.querySelectorAll(".box");
const table_score = document.querySelector(".table h1 span");
const start_btn = document.querySelector(".start_btn button");

/*
let s = 0;
setInterval(() => {
    s++;
    if (s > 0 && s <= 3) {
        LightPopUp();
    } else clearInterval;
}, 300);
*/
/*======creating arrays =====*/
let arrPop = [];
let arrBx = [];
/*======creating random number generator =====*/
function LightPopUp() {
    let number = Math.floor(Math.random() * box.length);
    box[number].classList.add("light");
    setTimeout(() => {
        box[number].classList.remove("light");
    }, 350);
    arrPop.push(number);
    console.log("arrPop" + arrPop);
}

/*======creating box array, where its push each click =====*/

let checkBoxclickFunc = function () {
    box.forEach((bx, index) => {
        bx.addEventListener("click", () => {
            BoxClick(index);
            console.log("arrBx" + arrBx);
        });
    });
};

function BoxClick(index) {
    arrBx.push(index);
}

/*======creating start game btn =====*/
let firsttime = true;
start_btn.addEventListener("click", () => {
    if (firsttime == true) {
        callfunction();
        firsttime = false;
    }
});

let k = 0;
let check = false;
let score = 0;
/*======creating Compare function thats compare arrPop and arrBx =====*/
function compare() {
    // callfunction();
    k = 0;
    for (let i = 0; i < arrPop.length; i++) {
        console.log("hello");
        if (arrPop[i] == arrBx[i]) {
            score++;
            table_score.innerHTML = score;
            console.log("EQUAL");
            k++;
        } else {
            score = 0;
            table_score.innerHTML = score;
            console.log("NOTEQUAL");
            check = true;
            break;
        }
    }
    if (k == arrPop.length) {
        callfunction();
        console.log("helllo");
    } else if (check == true) alert("Game ended");
}

function callfunction() {
    LightPopUp();
    checkBoxclickFunc();
    setInterval(() => {
        compare();
    }, 1000);
}

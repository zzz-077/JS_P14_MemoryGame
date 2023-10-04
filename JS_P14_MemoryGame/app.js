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

/*======creating start game btn =====*/
let firsttime = true;
start_btn.addEventListener("click", () => {
    if (firsttime == true) {
        callfunction();
        firsttime = false;
    }
});

let k = 0;
let lightloopend = false;
let check = false;
let score = 0;
let i;
/*======creating Compare function thats compare arrPop and arrBx =====*/
function compare() {
    k = 0;
    for (i = 0; i < arrPop.length; i++) {
        if (arrPop[i] == arrBx[i]) {
            score++;
            table_score.innerHTML = score;
            // console.log("EQUAL");
            k++;
        } else {
            score = 0;
            table_score.innerHTML = score;
            // console.log("NOTEQUAL");
            k = 0;
            break;
        }
    }
    if (k == arrPop.length) callfunction();
    else alert("Game ended");
}

function callfunction() {
    if (firsttime == true) {
        LightPopUp();
        firsttime = false;
    } else {
        for (i = 0; i < arrPop.length; i++) {
            LightPopUp();
        }
    }

    for (i = 0; i < arrPop.length; i++) {
        function checkBoxclickFunc(ind) {
            box.forEach((bx, index) => {
                bx.removeEventListener("click", BoxClick);
                bx.addEventListener("click", () => {
                    BoxClick(index);
                    console.log("arrBx" + arrBx + "[" + ind + "]");
                });
            });
        }

        function BoxClick(index) {
            arrBx.push(index);
        }

        checkBoxclickFunc(i);
        if (i == arrPop.length - 1) {
            check = true;
            console.log("thirdloop" + "[" + i + "]");
        }
    }
    if (check == true) compare();
}

/*shablonia es rogor mushaobs loop shi click function yvelaze cal calke*/
// for (let i = 0; i < 10; i++) {
//     function test(index) {
//         start_btn.addEventListener("click", () => {
//             console.log("hello" + index + ":");
//         });
//     }
//     test(i);
// }

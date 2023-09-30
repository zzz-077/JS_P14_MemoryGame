const box = document.querySelectorAll(".box");
const table_score = document.querySelector(".table h1 span");
const start_btn = document.querySelector(".start_btn button");
let score = 0;
let loose = false;
let arr = [];
function LightPopUp() {
    let number = Math.floor(Math.random() * box.length);

    box[number].classList.add("light");
    setTimeout(() => {
        box[number].classList.remove("light");
    }, 350);
    arr.push(number);
    return number;
}

for (let j = 0; j < 3; j++) {
    // setInterval(() => {}, 300);
    LightPopUp();
}

let keep = 0;
let itt = 0;
let itt_fol;
start_btn.addEventListener("click", () => {
    /*
    box.forEach((bx, i) => {
        itt++;
        itt_fol = itt;
        for (let j = 0; j < itt; j++) {
            LightPopUp();
            console.log("helloo");
        }

        
        bx.addEventListener("click", () => {
            for (let k = 0; k < arr.length; k++) {
                if (i == arr[k]) {
                    score++;
                    table_score.innerHTML = score;
                    keep++;
                } else {
                    keep = 0;
                    score = 0;
                    table_score.innerHTML = score;
                    break;
                }
            }
            if (keep > 0) {
                LightPopUp();
            }
            console.log("i=" + i);
            console.log("light=" + arr);
            // console.log(arr);
            itt = itt_fol;
        });
    });
    */
});

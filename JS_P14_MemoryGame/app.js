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
    // return number;
}

start_btn.addEventListener("click", () => {
    LightPopUp();

    box.forEach((bx, i) => {
        bx.addEventListener("click", () => {
            LightPopUp();
            for (let k = 0; k < arr.length; k++) {
                if (i == arr[k]) {
                    score++;
                    table_score.innerHTML = score;
                } else {
                    score = 0;
                    table_score.innerHTML = score;
                }
            }
            // console.log("i=" + i);
            // console.log("light=" + arr);
            // console.log(arr[i]);
            console.log(arr);
        });
    });
});

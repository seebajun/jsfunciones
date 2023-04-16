document.addEventListener("keydown", function (event) {
    if (event.key === "a"){
        document.querySelector("#div1").style.backgroundColor = "#F2B263";
        document.querySelector("#div2").style.backgroundColor = "#F2B263";
        document.querySelector("#div3").style.backgroundColor = "#F2B263";
        document.querySelector("#div4").style.backgroundColor = "#F2B263";
    } else if (event.key === "s") {
        document.querySelector("#div1").style.backgroundColor = "#F2E8DF";
        document.querySelector("#div2").style.backgroundColor = "#F2E8DF";
        document.querySelector("#div3").style.backgroundColor = "#F2E8DF";
        document.querySelector("#div4").style.backgroundColor = "#F2E8DF";
    } else if (event.key === "d") {
        document.querySelector("#div1").style.backgroundColor = "#F2C6C2";
        document.querySelector("#div2").style.backgroundColor = "#F2C6C2";
        document.querySelector("#div3").style.backgroundColor = "#F2C6C2";
        document.querySelector("#div4").style.backgroundColor = "#F2C6C2";
    }
})

// haciendo nuevas convinaciones con otras
// document.addEventListener("keyup", function (event) {
//     if (event.key === "q"){
//         document.querySelector("#div1").style.backgroundColor = "#F2668B";
//         document.querySelector("#div4").style.backgroundColor = "#F2C777";
//     } else if (event.key === "c"){
//         document.querySelector("#div2").style.backgroundColor = "#4C3959";
//         document.querySelector("#div3").style.backgroundColor = "#2198A6";
//     } else if (event.key === "e"){
//         document.querySelector("#div2").style.backgroundColor = "#F2668B";
//         document.querySelector("#div3").style.backgroundColor = "#2198A6";
//     } else if (event.key === "z"){
//         document.querySelector("#div2").style.backgroundColor = "#F2C777";
//         document.querySelector("#div3").style.backgroundColor = "#2198A6";
// }
// })

document.querySelectorAll("div").forEach((item) => {
    item.addEventListener("click", (event) => {
        item.style.backgroundColor = "#F28585";
    });
});
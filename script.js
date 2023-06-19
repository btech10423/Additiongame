let fn1 = document.getElementById("firstNumber")
let fn2 = document.getElementById("secondNumber");
let a = Math.ceil(Math.random() * 100);
let b = Math.ceil(Math.random() * 100)
fn1.textContent = a;
fn2.textContent = b;

function check() {
    let inp = document.getElementById("userInput").value;
    let para = document.getElementById("gameResult");
    if (parseInt(inp) === a + b) {
        para.textContent = "Congratulations! you got it right";
        para.style.backgroundColor = "#028a0f";
    } else {
        para.textContent = "Please Try Again!";
        para.style.backgroundColor = "#1e217c";
    }
}

function restart() {
    a = Math.ceil(Math.random() * 100);
    b = Math.ceil(Math.random() * 100)
    fn1.textContent = a;
    fn2.textContent = b;
    let inp = document.getElementById("userInput");
    inp.value = "";
    let para = document.getElementById("gameResult");
    para.textContent = ""
}
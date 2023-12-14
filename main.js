let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
function increment() {
    count += 1;
    countEl.innerHTML = count;
}
function save() {
    let countStr = count + " - ";
    saveEl.innerHTML += countStr;
    countEl.innerHTML = 0;
    count = 0;
}
function reset() {
    countEl.innerHTML = 0;
    saveEl.textContent = "details :";

}

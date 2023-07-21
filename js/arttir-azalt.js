let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')
let sifirlaBtn = document.querySelector('#sifirla')

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)
sifirlaBtn.addEventListener("click", clickEvent)

function clickEvent() {
    console.log(this.id)
    if (this.id == "increase") { counter += 1 }
    else if (this.id == "decrease") { counter -= 1 }
    else if (this.id == "sifirla") { counter = 0 }
    localStorage.setItem('counter', counter)
    counterDOM.innerHTML = counter
}

const dierolls = []
const rollbutton = document.querySelector("#Rollbutton")
const numdice = document.querySelector("#numdice")
const sum = document.querySelector("#Total")
const allrolls = document.querySelector("#allrolls")



let total = 0
rollbutton.addEventListener('click', function () {
    let userinput = numdice.value

    let index = 0
    while (index < userinput) {
        let allrolls = Math.floor(Math.random() * 6) + 1
        dierolls.push(allrolls)
        sum.innerHTML = total += allrolls
        index += 1
    }
})
allrolls.addEventListener('click', function () {
    for (let index = 0; index < dierolls.length; index += 1) {
        const newDiceString = '<li class="dice">' + dierolls + "</li>";
        allrolls.innerHTML += newDiceString;

    }
})

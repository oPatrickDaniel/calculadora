
const display_result = document.getElementById("display_result")
const display_preview = document.getElementById("display_preview")

function config_opacity() {
    if (display_preview.innerText == "0") {
        display_preview.classList.add("opacity")
    } else {
        display_preview.classList.remove("opacity")
    }
}

function inner_digit(num) {

    let display_result = document.getElementById("display_result")

    if (display_result.innerHTML == 0) {

        display_result.innerText = num.value

    } else {

        display_result.innerText += num.value
    }
}

function inner_preview(operator) {

    if (display_preview.innerHTML == 0 && operator != ",") {

        display_preview.innerText = display_result.textContent + operator.value

    } else {

        display_preview.innerText += display_result.textContent + operator.value
    }

    display_result.innerText = "0"
    config_opacity()
}

function C() {
    display_preview.innerText = "0"
    display_result.innerText = "0"
    config_opacity()
}

function CE() {
    display_result.innerText = "0"
    config_opacity()
}

function del() {
    let display_result = document.getElementById("display_result").innerHTML
    if (display_result.length < 2) {

        document.getElementById("display_result").innerHTML = 0
    } else {
        document.getElementById("display_result").innerHTML = display_result.substring(0, display_result.length - 1)
    }
}

function sqrt() {
    display_result.innerText = Math.sqrt(display_result.innerHTML)
}

function pow() {
    display_result.innerText = Math.pow(display_result.innerHTML, 2)
}

function fracture() {
    display_result.innerText = display_result.innerHTML / 100
}

function percentage() {
    let base_valor = display_preview.innerHTML
    let percentage = display_result.innerHTML

    let result = base_valor.substring(0, base_valor.length - 1) * (percentage / 100)
    display_result.innerText = result
}



function final_result() {

    result = display_preview.innerHTML + display_result.innerHTML
    display_preview.innerText = "0"
    display_result.innerText = eval(result)
    config_opacity()
}



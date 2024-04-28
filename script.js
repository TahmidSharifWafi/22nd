const inputContainer = document.getElementById("input-container")
const btn = document.querySelector("#btn")
var operend = ""

const input1 = document.createElement('input')
input1.id = 'input1'
input1.type = 'number'
input1.placeholder = 'Number 1'
inputContainer.appendChild(input1)



const input2 = document.createElement('input')
input2.type = 'number'
input2.id = 'input2'
input2.placeholder = 'Number 2'
input2.classList = ['hidenseek']
inputContainer.appendChild(input2)



// const result = document.createElement('p')
// result.id = 'result'


const layout2 = document.querySelector(".Layout2")
layout2.classList.add('hidenseek')

const layout1 = document.querySelector(".Layout1")

/*
! Don't delete this function.
function addValue(inputValue, buttonText) {
	inputValue += buttonText

    return inputValue
}


function buttonClick() {
	
}
*/

const result = document.querySelector("#result")

/*
* These won't be work.
const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")
*/




var a = 1
const one = document.querySelector("#no-1-no1")
function first() {
	input1.value += a
}
one.addEventListener("click", first)

var b = 2
const two = document.querySelector("#no-1-no2")
function second() {
	input1.value += b
}
two.addEventListener("click", second)

var c = 3
const three = document.querySelector("#no-1-no3")
function third() {
	input1.value += c
}
three.addEventListener("click", third)

var d = 4
const four = document.querySelector("#no-1-no4")
function forth() {
	input1.value += d
}
four.addEventListener("click", forth)

var e = 5
const five = document.querySelector("#no-1-no5")
function fifth() {
	input1.value += e
}
five.addEventListener("click", fifth)

var f = 6
const six = document.querySelector("#no-1-no6")
function sixth() {
	input1.value += f
}
six.addEventListener("click", sixth)

var g = 7
const seven = document.querySelector("#no-1-no7")
function seventh() {
	input1.value += g
}
seven.addEventListener("click", seventh)

var h = 8
const eight = document.querySelector("#no-1-no8")
function eighth() {
	input1.value += h
}
eight.addEventListener("click", eighth)

var i = 9
const nine = document.querySelector("#no-1-no9")
function ninth() {
	input1.value += i
}
nine.addEventListener("click", ninth)

var j = 0
const zero = document.querySelector("#no-1-no0")
function the_zero() {
	input1.value += j
}
zero.addEventListener("click", the_zero)

var k = '.'
const dot = document.querySelector("#no-1-nod")
function dotted() {
	input1.value += k
}
dot.addEventListener("click", dotted)
 
/*
 ! --------------------------------
*/

var a2 = 1
const one2 = document.querySelector(".no-2-no1")
function first2() {
	input2.value += a2
}
one2.addEventListener("click", first2)

var b2 = 2
const two2 = document.querySelector(".no-2-no2")
function second2() {
	input2.value += b2
}
two2.addEventListener("click", second2)

var c2 = 3
const three2 = document.querySelector(".no-2-no3")
function third2() {
	input2.value += c2
}
three2.addEventListener("click", third2)

var d2 = 4
const four2 = document.querySelector(".no-2-no4")
function forth2() {
	input2.value += d2
}
four2.addEventListener("click", forth2)

var e2 = 5
const five2 = document.querySelector(".no-2-no5")
function fifth2() {
	input2.value += e2
}
five2.addEventListener("click", fifth2)

var f2 = 6
const six2 = document.querySelector(".no-2-no6")
function sixth2() {
	input2.value += f2
}
six2.addEventListener("click", sixth2)

var g2 = 7
const seven2 = document.querySelector(".no-2-no7")
function seventh2() {
	input2.value += g2
}
seven2.addEventListener("click", seventh2)

var h2 = 8
const eight2 = document.querySelector(".no-2-no8")
function eighth2() {
	input2.value += 2
}
eight2.addEventListener("click", eighth2)

var i2 = 9
const nine2 = document.querySelector(".no-2-no9")
function ninth2() {
	input2.value += i2
}
nine2.addEventListener("click", ninth2)

var j2 = 0
const zero2 = document.querySelector(".no-2-no0")
function the_zero2() {
	input2.value += j2
}
zero2.addEventListener("click", the_zero2)

const k2 = '.'
const dot2 = document.querySelector("#no-2-nod")
function dotted2() {
	input2.value += k2
}
dot2.addEventListener("click", dotted2)

// --------------------------------

const plus = document.querySelector(".operend_plus")
const minus = document.querySelector(".operend_minus")
const product = document.querySelector(".operend_product")
const divide = document.querySelector(".operend_divise")

function toogleToSecond() {
	layout2.classList.remove('hidenseek')
	layout1.classList.add('hidenseek')

	input2.classList.remove('hidenseek')
	input1.classList.add('hidenseek')
}


// const ac = document.querySelector(".ac")

// function toogleToFirst() {
// 	input1.innerHTML = ""
// 	input2.innerHTML = ""
// 	result.innerHTML = ""
// 	layout2.classList.add('hidenseek')
// 	layout1.classList.remove('hidenseek')

// 	input2.classList.add('hidenseek')
// 	input1.classList.remove('hidenseek')
// }
// ac.addEventListener("click", toogleToFirst)


function addition() {
	var input2Value = input2.valueAsNumber
	var input1Value = input1.valueAsNumber
	result.innerText = input1Value + input2Value
}

plus.addEventListener("click", function() {
	toogleToSecond();
	operend = "plus"
} )
btn.addEventListener("click", function() {
	switch (operend) {
		case "plus":
			addition()
			break;
		case "minus":
			substraction()
			break;
		case "product":
			multiplication()
			break;
		case "divide":
			division()
			break;
		default:
			break;
	}	
} )


function substraction() {
	var input2Value = input2.valueAsNumber
	var input1Value = input1.valueAsNumber
	result.innerText = input1Value - input2Value
}

minus.addEventListener("click", function() {
	toogleToSecond();
	operend = "minus"
} )

function multiplication() {
	var input2Value = input2.valueAsNumber
	var input1Value = input1.valueAsNumber
	result.innerText = input1Value * input2Value
}

product.addEventListener("click", function() {
	toogleToSecond();
	operend = "product"
} )

function division() {
	var input2Value = input2.valueAsNumber
	var input1Value = input1.valueAsNumber
	result.innerText = input1Value / input2Value
}

divide.addEventListener("click", function() {
	toogleToSecond();
	operend = "divide"
} )

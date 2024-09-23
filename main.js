let a = ''
let b = ''
let operator = ''
let number = ''
let result = '0'

//operator functions
function add(a, b) {
  return Math.round((Number(a) + Number(b)) * 100000000) / 100000000
}

function subtract(a, b) {
  return Math.round((Number(a) - Number(b)) * 100000000) / 100000000
}

function multiply(a, b) {
  return Math.round(Number(a) * Number(b) * 100000000) / 100000000
}

function divide(a, b) {
  if (Number(b) == 0) return 'error'
  return Math.round((Number(a) / Number(b)) * 100000000) / 100000000
}

function percent(a, b = 1) {
  console.log('a=', a, 'b=', b, '!b=', !!!b)
  return Math.round(((Number(a) * Number(b)) / 100) * 100000000) / 100000000
}

function dotCheck(num) {
  if (num.includes('.')) return ''
  if (num == '') return '0.'
  return '.'
}

function plusMinusCheck(num) {
  if (num.includes('-')) {
    num = num.replace('-', '')
    return num
  }
  num = '-' + num
  return num
}

const display = document.querySelector('.display')

const btns = document.querySelectorAll('.num')
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    number = e.target.innerText
    if (!operator) {
      a += number
      display.innerText = a
    } else {
      b += number
      display.innerText = b
    }
    console.log('a=', a, 'b=', b, 'o=', operator)
  })
})

const operators = document.querySelectorAll('.Operator')
operators.forEach((oper) => {
  oper.addEventListener('click', (e) => {
    operator = e.target.innerText
    display.innerText = operator
    b = ''
    console.log('a=', a, 'b=', b, 'o=', operator)
  })
})

const ac = document.querySelector('.AC')
ac.addEventListener('click', () => {
  a = b = operator = number = ''
  result = '0'
  display.innerText = result
  console.log('a=', a, 'b=', b, 'o=', operator)
})

const dot = document.querySelector('.dot')
const bd = dot.addEventListener('click', () => {
  if (!operator) {
    a += dotCheck(a)
    display.innerText = a
  } else {
    b += dotCheck(b)
    display.innerText = b
  }
  console.log('a=', a, 'b=', b, 'o=', operator)
})

const plusMinus = document.querySelector('.PlusMinus')
plusMinus.addEventListener('click', () => {
  if (!operator) {
    a = plusMinusCheck(a)
    display.innerText = a
  } else {
    b = plusMinusCheck(b)
    display.innerText = b
  }
  console.log('a=', a, 'b=', b, 'o=', operator)
})

const equal = document.querySelector('.equal')
equal.addEventListener('click', () => {
  switch (operator) {
    case '+':
      b != ''
        ? ((result = String(add(a, b))), console.log(result))
        : ((result = String(add(a, a))), console.log(result))
      break
    case '-':
      b != ''
        ? ((result = String(subtract(a, b))), console.log(result))
        : ((result = String(subtract(a, a))), console.log(result))
      break
    case '*':
      b != ''
        ? ((result = String(multiply(a, b))), console.log(result))
        : ((result = String(multiply(a, a))), console.log(result))
      break
    case '/':
      b != ''
        ? ((result = String(divide(a, b))), console.log(result))
        : ((result = String(divide(a, a))), console.log(result))
      break
    case '%':
      b != ''
        ? ((result = String(percent(a, b))), console.log(result))
        : ((result = String(percent(a))), console.log(result))
      break
  }
  if (result.length > 11) {
    result = 'e' + result.slice(0, 10)
  }

  display.innerText = result
  a = result
  console.log('a=', a, 'b=', b, 'o=', operator, 'res=', result)
})

//add keyboard
/*
class KeyControls {
  constructor(
    keyList = [
      'Numpad0',
      'Numpad1',
      'Numpad2',
      'Numpad3',
      'Numpad4',
      'Numpad5',
      'Numpad6',
      'Numpad7',
      'Numpad8',
      'Numpad9',
      'NumpadSubtract',
      'NumpadAdd',
      'NumpadMultiply',
      'NumpadDivide',
      'NumpadDecimal',
      'NumpadEnter',
      'Backspace',
    ]
  ) {
    this.keyList = keyList
    this.keys = {}

    addEventListener('keydown', (e) => this.changeState(e))
    addEventListener('keyup', (e) => this.changeState(e))
  }
  changeState(e) {
    if (!this.keyList.includes(e.code)) return
    this.keys[e.code] = e.type === 'keydown' ? true : false
    console.log(this.keys)
  }
}

this.keyboard = new KeyControls([
  'Numpad0',
  'Numpad1',
  'Numpad2',
  'Numpad3',
  'Numpad4',
  'Numpad5',
  'Numpad6',
  'Numpad7',
  'Numpad8',
  'Numpad9',
  'NumpadSubtract',
  'NumpadAdd',
  'NumpadMultiply',
  'NumpadDivide',
  'NumpadDecimal',
  'NumpadEnter',
  'Backspace',
])
this.keys = this.keyboard.keys

if (this.keys.NumpadDecimal) {
  this.bd
}
*/

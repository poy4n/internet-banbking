console.log('MONEY')

var balance1 = document.querySelector('.balance1')
var deposit1 = document.querySelector('.input1')
var depositBtn1 = document.querySelector('.deposit-btn1')
var withdrawBtn1 = document.querySelector('.withdraw-btn1')
var backGround1 = document.querySelector('.money-back1')
var alertMsg1 = document.querySelector('.alert1')

var depositMoney1 = function () {
    balance1.textContent = Number(deposit1.value) + Number(balance1.textContent)
    if (balance1.textContent > '0') {
        backGround1.style.backgroundColor = 'lightgoldenrodyellow'
        alertMsg1.textContent = null;
        withdrawBtn1.disabled = false;
    }
}

var withdrawMoney1 = function () {
    balance1.textContent = Number(balance1.textContent) - Number(deposit1.value)
    if (balance1.textContent === '0' && balance2.textContent === '0') {
        balance1.textContent = 'NO CASH'
        backGround1.style.backgroundColor = 'red'
        alertMsg1.textContent = 'NO MONEY' 
        withdrawBtn1.disabled = true;
    }  
    else if (balance1.textContent === '0' 
    && Number(balance2.textContent) >= Number(deposit1.value)) {
        backGround1.style.backgroundColor = 'lightgreen'
        alertMsg1.textContent = 'SAVING'
        balance1.textContent = deposit1.value
        balance2.textContent = Number(balance2.textContent) - Number(deposit1.value)
        withdrawBtn1.disabled = false;
    }
    else if (Number(deposit1.value) > Number(balance1.textContent) + Number(balance2.textContent)) {
        backGround1.style.backgroundColor = 'red'
        backGround2.style.backgroundColor = 'red'
        alertMsg1.textContent = 'DEPOSIT' 
        balance1.textContent = 'NOT ENOUGH'
        balance2.textContent = 'NOT ENOUGH'
        withdrawBtn1.disabled = true;
    }
    else if (Number(balance1.textContent) < Number(deposit1.value)) {
        backGround1.style.backgroundColor = 'lightgreen'
        alertMsg1.textContent = 'SAVING'
        balance1.textContent = deposit1.value
        balance2.textContent = Number(balance2.textContent) - Number(deposit1.value)
        withdrawBtn1.disabled = false;
    }
}

depositBtn1.addEventListener('click', depositMoney1)
withdrawBtn1.addEventListener('click', withdrawMoney1)

// SAVING

var balance2 = document.querySelector('.balance2')
var deposit2 = document.querySelector('.input2')
var depositBtn2 = document.querySelector('.deposit-btn2')
var withdrawBtn2 = document.querySelector('.withdraw-btn2')
var backGround2 = document.querySelector('.money-back2')
var alertMsg2 = document.querySelector('.alert2')

var depositMoney2 = function () {
    balance2.textContent = Number(deposit2.value) + Number(balance2.textContent)
    if (balance2.textContent > '0') {
        backGround2.style.backgroundColor = 'lightgreen'
        alertMsg2.textContent = null;
        withdrawBtn2.disabled = false;
    }
}

var withdrawMoney2 = function () {
    balance2.textContent = Number(balance2.textContent) - Number(deposit2.value)
    if (balance2.textContent === '0' || balance2.textContent < '0') {
        balance2.textContent = 'NO CASH'
        backGround2.style.backgroundColor = 'red'
        alertMsg2.textContent = 'NO MONEY' 
        withdrawBtn2.disabled = true;
    }
}

depositBtn2.addEventListener('click', depositMoney2)
withdrawBtn2.addEventListener('click', withdrawMoney2)
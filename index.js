const num_btns = Array.from(document.querySelectorAll('.number-btn'));
const action_btns = Array.from(document.querySelectorAll('.action-btn'));
const calculate = document.querySelector('.result-btn');
const clear_btn = document.querySelector('.clear-btn')
const answer = document.querySelector('.answer');

var first = '';
var second = '';
var operator = '';
var operator_selected = false;
var result = 0;
num_btns.forEach(btn =>{
    btn.addEventListener('click', e=>{
        if(!operator_selected){
            first += btn.value
            answer.innerHTML = first
        }else{
            second += btn.value
            answer.innerHTML = second
        }
        
    })
})

action_btns.forEach(btn =>{
    btn.addEventListener('click', e=>{
        if(first != ''){
            operator = btn.value
            operator_selected = true; 
        }else{
            return
        }
        
    })
})

clear_btn.addEventListener('click', e=>{
    first = '';
    second = '';
    operator = '';
    operator_selected = false;
    result = 0;
    answer.innerHTML = 0;
})

calculate.addEventListener('click', e=>{
    if(first != '' && operator_selected == true && second != ''){
        switch (operator){
            case '+':
                result = parseInt(first) + parseInt(second)
                answer.innerHTML = result
                first = result
                second = '';
                operator_selected = false;
                break
            case '-':
                result = parseInt(first) - parseInt(second)
                answer.innerHTML = result
                first = result
                second = '';
                operator_selected = false;
                break
            case '/':
                result = parseInt(first) / parseInt(second)
                answer.innerHTML = result.toFixed(2)
                first = result
                second = '';
                operator_selected = false;
                break
            case '*':
                result = parseInt(first) * parseInt(second)
                answer.innerHTML = result
                first = result
                second = '';
                operator_selected = false;
                break
        }
    }
    
})
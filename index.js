let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let buttonValue = '';
for (item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        screen.value = buttonText;
        if(buttonText=='*'){
            buttonValue +=buttonText;
            screen.value = buttonValue;
        }
        else if(buttonText=='('){
            buttonValue +=buttonText;
            screen.value = buttonValue;
        }
        else if(buttonText==')'){
            buttonValue +=buttonText;
            screen.value = buttonValue;
        }
        else if(buttonText=='C'){
            buttonValue ="";
            screen.value = buttonValue;
        }
        else if(buttonText=='%'){
            buttonValue +=buttonText;
            screen.value = buttonValue;
        }
        else if(buttonText=='1'){
            buttonValue +=buttonText;
            screen.value = buttonValue;
        }
        else if(buttonText=='2'){
            buttonValue +=buttonText;
            screen.value = buttonValue;
        }
        else if(buttonText=='3'){
            buttonValue +=buttonText;
            screen.value = buttonValue;
        }
        else if(buttonText=='4'){
            buttonValue +=buttonText;
            screen.value = buttonValue;
        }
        else if(buttonText=='5'){
            buttonValue +=buttonText;
            screen.value = buttonValue;
        }
        else if(buttonText=='6'){
            buttonValue +=buttonText;
            screen.value = buttonValue;
        }
        else if(buttonText=='7'){
            buttonValue +=buttonText;
            screen.value = buttonValue;
        }
        else if(buttonText=='8'){
            buttonValue +=buttonText;
            screen.value = buttonValue;
        }
        else if(buttonText=='9'){
            buttonValue +=buttonText;
            screen.value = buttonValue;
        }
        else if(buttonText=='0'){
            buttonValue +=buttonText;
            screen.value = buttonValue;
        }
        else if(buttonText=='+'){
            buttonValue +=buttonText;
            screen.value = buttonValue;
        }
        else if(buttonText=='-'){
            buttonValue +=buttonText;
            screen.value = buttonValue;
        }
        else if(buttonText=='/'){
            buttonValue +=buttonText;
            screen.value = buttonValue;
        }
        else if(buttonText=='='){
            screen.value = eval(buttonValue);
        }
        else if(buttonText=='.'){
            buttonValue +=buttonText;
            screen.value = buttonValue;
        }
    })
}
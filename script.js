
let input = document.getElementById("input");

 buttons = document.querySelectorAll("button");
 console.log(buttons);

let screenValue = "";

for(item of buttons){

    item.addEventListener('click',(value)=>{

        buttonText = value.target.innerText;
        console.log('Button text is ', buttonText);

        if(buttonText == '*'){

            buttonText = '*';
            screenValue += buttonText;
            input.value = screenValue;

        }
        else if (buttonText == 'C') {
            screenValue = "";
            input.value = screenValue;
        }
        else if (buttonText == '=') {
            input.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            input.value = screenValue;
        }
    }
 )
}
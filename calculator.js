const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    
         button.addEventListener("click",()=> {

            let value = button.innerText;

            if(value === "C"){
                display.value = "";
            }

            else if(value === "="){

                try{

                    let expression = display.value
                        .replace(/x/g,"⁕")
                        .replace(/÷/g,"/");

                        display.value = eval(expression);
                }

                catch{
                    display.value = "Error";
                }
            }

            else{
                display.value += value;
            }

         });
});


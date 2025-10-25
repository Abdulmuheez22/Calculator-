// let display = document.getElementById("display");
// let buttons = document.querySelectorAll(".btn");
// function updatedPreveiw(){
//     let expr = display.value;    if(!expr || endswithoperator(expr)){
//         preview.textContent = "preview: _ ";
//         return;
//     }
//     let r = evaluateSafe(expr);
//     preview.textContent = "preview" + r;
// }
// buttons.forEach( function(button){
//     button.addEventListener("click", function(){
//         let value = button.textContent;
//         if(value === "C"){
//             display.value = ""
//         }
//         else if(value === "="){
//             display.value = eval(display.value)
//         }
//         else if(value === "DEL"){
//             display.value = display.value.slice(0, -1)
//         }
//         else{
//             display.value += value
//         }
//     })
// })

// document.addEventListener("keydown", function(event){
//     let key = event.key
//     if(!isNaN(key) || ["+","-","/","*","."].includes(key)){
//         display.value += key
//     }
//     else if(key === "Enter"){
//         try{
//             display.value = eval(display.value)
//         }
//         catch{
//             display.value = "Error"
//         }
//     }
//     else if(key === "Backspace"){
//             display.value = display.value.slice(0,-1)
//         }
//         else if (key.toLowerCase === "c"){
//             display.value = "";
//         }
// });





















let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");


    buttons.forEach(function(button){
        button.addEventListener("click", function(){
           let value = button.textContent;
            if(value === "C"){
                display.value = "";
            }
            else if(value === "DEL"){
                display.value = display.value.slice(0, -1) 
            }
            else if(value === "++"){
                display.value = "Error"
            }
            else if(display.value === "--"){
                display.value = "Error"
            }
            else if(display.value === "**"){
                display.value = "Error"
            }
            else if(value === "//"){
                display.value = "Error"
            }
             else if(value === "="){
                   if(display.value === ""){
                display.value = "Invalid"
            }
                try{
                    display.value = eval(display.value)
                }
                catch{
                    display.value = "Error"
                }
            }
            else{
                display.value += value
            }
            
        })
    })
      // function calculate(){
        // let key = event.key
        //  key = button.textContent
        buttons.forEach(function(button){
                       button.addEventListener("keydown", function(key){
            key = button.textContent
            key = display.value
                       })
        })

    // }
    function preview(){
        let preview = document.getElementById("preview");
           try{
            preview.textContent = eval(display.value)
           }
           catch{
            
           }
           
            
    }

    setInterval(function(){
        preview()
    }, 10)
document.addEventListener("keydown", function(event){
    let key = event.key
    if(!isNaN(key) || ["+","-","/","*",".","%"].includes(key)){
        display.value += key;
    }
     else if(key === "Enter"){
        try{
            display.value = eval(display.value)
        }
        catch{
            display.value = "Error"
        }
    }
    else if(key === "Backspace"){
        display.value = display.value.slice(0, -1)
    }
    else if(key === "c"){
        display.value = ""
    }
})


























let sticky = document.querySelector("#sticky");
// let body = document.querySelector("body");
sticky.addEventListener("click", function (e) {
    let sticky = document.createElement("div");
    console.log(1);
    sticky.setAttribute("class", "sticky");
    sticky.innerHTML = `<div class = "navBar">
        <div class = "close"></div>
        <div class = "minimize"></div>
    </div>
    <textarea name = "" class="textarea"></textarea>`

    body.appendChild(sticky);
    let minimize = sticky.querySelector(".minimize");
    let isminimized = false; 
    console.log(minimize); 
    let close = sticky.querySelector(".close");
    let textArea = sticky.querySelector("textarea");
    console.log(close);
    console.log(minimize);
    minimize.addEventListener("click", function () {
        console.log("kuch bhi");
        if(isminimized == false){
            textArea.style.display = "none";  // used to hide 
            console.log(3);
        }
        else{
            textArea.style.display = "block";  // used to show 
        }
        isminimized = !isminimized;  // =! or = ! means isminimized = (!minimized) [negation statement] 
    })
    console.log(2);
    
    close.addEventListener("click", function(){
        // sticky.style.display = "none"; 
        //or 
        console.log(4);
        sticky.remove(); 
    })

})


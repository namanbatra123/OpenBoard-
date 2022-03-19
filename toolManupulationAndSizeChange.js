// tool change logic
let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let rect = document.querySelector("#rect");
let line = document.querySelector("#line");
// let sticky = document.querySelector("#sticky"); 
let options = document.querySelectorAll(".size-box");
let sizeBoxArr = document.querySelectorAll(".size-box");
let pencilSize = 5;
let eraserSize = 5;
let rectSize = 5;
let lineSize = 5;
// let bubbles = document.querySelectorAll(".size");

pencil.addEventListener("click", function () {

    if (curTool == "pencil") {
        options[0].style.display = "flex";
    }
    else {
        for (let i = 0; i < options.length; i++) {  // koi aur clicked aur usko options visible to vo remove ho jaaye 
            options[i].style.display = "none";
        }
        tool.strokeStyle = "red";
        curTool = "pencil";
        tool.lineWidth = pencilSize;
    }
})

eraser.addEventListener("click", function () {
    if (curTool == "eraser") {
        options[1].style.display = "flex";
    }
    else {

        for (let i = 0; i < options.length; i++) {  // koi aur clicked aur usko options visible to vo remove ho jaaye 
            options[i].style.display = "none";
        }
        tool.strokeStyle = "white";
        curTool = "eraser";
        tool.lineWidth = eraserSize;
    }
})

rect.addEventListener("click", function () {
    if (curTool == "rect") {
        options[2].style.display = "flex";
    }
    else {
        for (let i = 0; i < options.length; i++) {  // koi aur clicked aur usko options visible to vo remove ho jaaye 
            options[i].style.display = "none";
        }
        tool.strokeStyle = "red";
        curTool = "rect";
        tool.lineWidth = rectSize;
    }
})

line.addEventListener("click", function () {
    if (curTool == "line") {
        options[3].style.display = "flex";
    }
    else {
        for (let i = 0; i < options.length; i++) {  // koi aur clicked aur usko options visible to vo remove ho jaaye 
            options[i].style.display = "none";
        }
        tool.strokeStyle = "red";
        curTool = "line";
        tool.lineWidth = lineSize;
    }
})



// Color change logic 
let redColor = document.querySelector(".red");
let greenColor = document.querySelector(".green");
let blueColor = document.querySelector(".blue");

redColor.addEventListener("click", function () {
    tool.strokeStyle = "red";
})

greenColor.addEventListener("click", function () {
    tool.strokeStyle = "green";
})

blueColor.addEventListener("click", function () {
    tool.strokeStyle = "blue";
})

// Size change logic 

// pencil 
sizeBoxArr[0].addEventListener("click", function (e) {
    let elements = ["size1", "size2", "size3", "size4"];

    let allTheClasses = e.target.classList;   // saari classes bta deta hai
    let firstClass = allTheClasses[0];
    let test = elements.includes(firstClass);
    if (test) {
        if (firstClass == "size1") {
            pencilSize = 5;
        }
        else if (firstClass == "size2") {
            pencilSize = 10;
        }
        else if (firstClass == "size3") {
            pencilSize = 15;
        }
        else if (firstClass == "size4") {
            pencilSize = 20;
        }
    }
    tool.lineWidth = pencilSize;

})

// eraser
sizeBoxArr[1].addEventListener("click", function (e) {
    let elements = ["size1", "size2", "size3", "size4"];

    let allTheClasses = e.target.classList;   // saari classes bta deta hai
    let firstClass = allTheClasses[0];
    let test = elements.includes(firstClass);
    if (test) {
        if (firstClass == "size1") {
            eraserSize = 5;
        }
        else if (firstClass == "size2") {
            eraserSize = 10;
        }
        else if (firstClass == "size3") {
            eraserSize = 15;
        }
        else if (firstClass == "size4") {
            eraserSize = 20;
        }
    }
    tool.lineWidth = eraserSize;
})

// rect
sizeBoxArr[2].addEventListener("click", function (e) {
    let elements = ["size1", "size2", "size3", "size4"];

    let allTheClasses = e.target.classList;   // saari classes bta deta hai
    let firstClass = allTheClasses[0];
    let test = elements.includes(firstClass);
    if (test) {
        if (firstClass == "size1") {
            rectSize = 5;
        }
        else if (firstClass == "size2") {
            rectSize = 10;
        }
        else if (firstClass == "size3") {
            rectSize = 15;
        }
        else if (firstClass == "size4") {
            rectSize = 20;
        }
    }
    tool.lineWidth = rectSize;
})

// line
sizeBoxArr[3].addEventListener("click", function (e) {
    let elements = ["size1", "size2", "size3", "size4"];

    let allTheClasses = e.target.classList;   // saari classes bta deta hai
    let firstClass = allTheClasses[0];
    let test = elements.includes(firstClass);
    if (test) {
        if (firstClass == "size1") {
            lineSize = 5;
        }
        else if (firstClass == "size2") {
            lineSize = 10;
        }
        else if (firstClass == "size3") {
            lineSize = 15;
        }
        else if (firstClass == "size4") {
            lineSize = 20;
        }
    }
    tool.lineWidth = lineSize;

})

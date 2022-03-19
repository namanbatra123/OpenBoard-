let canvasBoard = document.querySelector("canvas");
let curTool = "";
let body = document.querySelector("body");
let tool = canvasBoard.getContext("2d");   // gives you the tool to draw on that canvas
canvasBoard.height = window.innerHeight;
canvasBoard.width = window.innerWidth;
tool.strokeStyle = "red"; // canvas ki height, width set krne ke baad hi changes reflect hoga
let boardTop = canvasBoard.getBoundingClientRect().top;  // top = vertical distance from the left top corner to the canvasboard
let ix, iy, fx, fy
let drawingMode = false;
body.addEventListener("mousedown", function (e) {
    if (curTool == "pencil" || curTool == "eraser") {
        drawingMode = true;
        tool.beginPath();
        tool.moveTo(e.clientX, e.clientY - boardTop);
    }
    else if (curTool == 'rect' || curTool == "line") {
        ix = e.clientX;
        iy = e.clientY - boardTop;
    }
})
body.addEventListener("mouseup", function (e) {
    if (curTool == "pencil" || curTool == "eraser") {
        drawingMode = false;
    }
    else if (curTool == "rect" || curTool == "line") {
        // line and rect
        fx = e.clientX;
        fy = e.clientY - boardTop;
        let width = fx - ix;
        let height = fy - iy;
        if (curTool == "rect") {
            tool.strokeRect(ix, iy, width, height);
        }
        else if (curTool == "line") {
            tool.beginPath();
            tool.moveTo(ix, iy);
            tool.lineTo(fx, fy);
            tool.stroke();
        }
    }
})
body.addEventListener("mousemove", function (e) {
    if (drawingMode == false) {
        return;
    }
    else {
        if (curTool == "pencil" || curTool == "eraser") {
            fx = e.clientX;
            fy = e.clientY - boardTop;
            tool.lineTo(fx, fy);
            tool.stroke();
            ix = fx;
            iy = fy;
        }
    }
})
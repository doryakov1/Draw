'use strict'

let gCanvas;
let gCtx;
let gIsDrawing;
let gSelectedOption;

function init() {
    gCanvas = document.querySelector(`.my-canvas`);
    gCtx = gCanvas.getContext(`2d`);
    gCanvas.width = window.innerWidth - 20;
    gCanvas.height = window.innerHeight - 100;

}

function drawingOptions() {
    gSelectedOption = document.querySelector(`.drawing-options`).value;
}

function drawing(ev) {
    let { offsetX, offsetY } = ev
    gCtx.beginPath();
    gCtx.moveTo(offsetX, offsetY);
    if (!gIsDrawing) {
        gIsDrawing = true;
    } else {
        gIsDrawing = false;
    }
}

function colorChange(colorValue, key) {
    if (key === 'color') {
        gCtx.fillStyle = colorValue;
        gCtx.strokeStyle = colorValue;
    } else if (key === 'backgroundcolor') {
        document.querySelector(`body`).style.backgroundColor = colorValue;
    }
}

function mouseMove(ev) {
    if (gIsDrawing) {
        let { offsetX, offsetY } = ev;
        switch (gSelectedOption) {
            case 'Mountion':
                drawMountains(offsetX, offsetY);
                break;
            case 'Simple':
                drawSimple(offsetX, offsetY);
                break;
            case 'Sketchy':
                drawSketchy(offsetX, offsetY);
                break;
            case 'Squares':
                drawSquares(offsetX, offsetY);
                break;
            case 'Waves':
                drawWaves(offsetX, offsetY);
                break;
            case 'Lines':
                drawLines(offsetX, offsetY);
                break;
            case 'Grid':
                drawGrid(offsetX, offsetY);
                break;
            case 'Umbrella':
                drawUmbrella(offsetX, offsetY);
                break;
            case 'Shaded':
                drawShaded(offsetX, offsetY);
                break;
            case 'Circles':
                drawCircles(offsetX, offsetY);
                break;
        }

    }
}

function clearCanvas() {
    gIsDrawing = false;
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

function drawUmbrella(offsetX, offsetY) {
    for (let i = 0; i < 10; i++) {
        gCtx.lineTo(offsetX + i * -10, offsetY / 2);
    }
    gCtx.stroke();
    gCtx.restore();
}

function drawGrid(offsetX, offsetY) {
    let gridWidth = offsetX * 2;
    let gridHeight = offsetY * 2;
    for (let iSetx = offsetX; iSetx <= gridWidth; iSetx += 200) {
        for (let jSety = offsetY; jSety <= gridHeight; jSety += 200) {
            gCtx.moveTo(iSetx, 0);
            gCtx.lineTo(iSetx, gridHeight);
            gCtx.stroke();
            gCtx.moveTo(0, jSety);
            gCtx.lineTo(gridWidth, jSety);
            gCtx.stroke();
        }
    }
}

function drawLines(offsetX, offsetY) {
    for (let i = 0; i < 150; i++) {
        gCtx.lineTo(offsetX + i, offsetY * i);
    }
    gCtx.stroke();
    gCtx.restore();
}

function drawWaves(offsetX, offsetY) {
    for (let i = 0; i < 40; i++) {
        gCtx.lineTo(offsetX * i, offsetY * i);
    }
    gCtx.stroke();
    gCtx.restore();
}

function drawCircles(offsetX, offsetY) {
    gCtx.arc(offsetX, offsetY, 50, 0, 2 * Math.PI);
    gCtx.stroke();
    gCtx.restore();
}

function drawSquares(offsetX, offsetY) {
    gCtx.rect(offsetX, offsetY, 150, 100);
    gCtx.stroke();
    gCtx.restore();

}

function drawSketchy(offsetX, offsetY) {
    for (let i = 0; i < 10; i++) {
        gCtx.lineTo(offsetX + i, offsetY - i);
    }
    gCtx.stroke();
    gCtx.restore();
}

function drawSimple(offsetX, offsetY) {
    gCtx.lineTo(offsetX, offsetY);
    gCtx.stroke();
    gCtx.restore();
}

function drawMountains(offsetX, offsetY) {
    for (let i = 0; i < 150; i++) {
        gCtx.lineTo(offsetX * i - i, offsetY / i * 1.34);
    }
    gCtx.stroke();
    gCtx.restore();
}

function drawShaded(offsetX, offsetY) {
    for (let i = 0; i < 10; i++) {
        gCtx.lineTo(offsetX - i * 2, offsetY - i * 4);
    }
    gCtx.stroke();
    gCtx.restore();
}
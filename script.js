const canvas = document.getElementById("grafico");
const ctx = canvas.getContext("2d");

ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
document.getElementById("xmin").value = null;
document.getElementById("xmax").value = null;
document.getElementById("ymin").value = null;
document.getElementById("ymax").value = null;

disegnaAssi();

function disegna(funzione) {
    const xmin = parseFloat(document.getElementById("xmin").value) || -8;
    const xmax = parseFloat(document.getElementById("xmax").value) ||  8;
    const ymin = parseFloat(document.getElementById("ymin").value) || -6;
    const ymax = parseFloat(document.getElementById("ymax").value) ||  6;

    const CoeffX = canvas.width / (xmax - xmin);
    const CoeffY = canvas.height / (ymax - ymin);

    let Xv = xmin;
    let Yv = 0;
    ctx.lineWidth = 3;
    ctx.beginPath();

    do {
        switch (funzione) {
            case 1:
                Yv = Math.pow(Xv, 2);
                ctx.strokeStyle = "red";
                break;
            case 2:
                Yv = Math.pow(Xv, 3);
                ctx.strokeStyle = "green";
                break;
            case 3:
                Yv = Math.sqrt(Xv);
                ctx.strokeStyle = "blue";
                break;
            case 4:
                Yv = Math.cbrt(Xv);
                ctx.strokeStyle = "purple";
                break;
            case 5:
                Yv = Math.sin(Xv);
                ctx.strokeStyle = "#F75E25";
                break;
            case 6:
                Yv = Math.asin(Xv);
                ctx.strokeStyle = "orange";
                break;
            case 7:
                Yv = Math.cos(Xv);
                ctx.strokeStyle = "brown";
                break;
            case 8:
                Yv = Math.acos(Xv);
                ctx.strokeStyle = "#b33b72";
                break;
            case 9:
                Yv = Math.tan(Xv);
                ctx.strokeStyle = "gray";
                break;
            case 10:
                Yv = Math.atan(Xv);
                ctx.strokeStyle = "#007fff";
                break;
            case 11:
                Yv = Math.exp(Xv);
                ctx.strokeStyle = "magenta";
                break;
            case 12:
                Yv = Math.log(Xv);
                ctx.strokeStyle = "#ff7f50";
                break;
            case 13:
                Yv = Math.log10(Xv);
                ctx.strokeStyle = "#116062";
                break;
            case 14:
                Yv = Math.abs(Xv);
                ctx.strokeStyle = "olive";
                break;
            default:
                Yv = 0;
        }

        let Xr = canvas.width/2 + Xv * CoeffX;
        let Yr = canvas.height - canvas.height/2 - (Yv  * CoeffY);

        ctx.lineTo(Xr, Yr);
        Xv += 0.0001;
    } while (Xv <= xmax);

    ctx.stroke();
}


function disegnaAssi() {
    const gridSize = 50;
    const numVerticalLines = Math.ceil(canvas.width / gridSize);
    const numHorizontalLines = Math.ceil(canvas.height / gridSize);

    ctx.beginPath();
    ctx.strokeStyle = "lightgray";
    ctx.lineWidth = 1;

    for (let i = 0; i < numVerticalLines; i++) {
        const x = i * gridSize;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
    }

    for (let i = 0; i < numHorizontalLines; i++) {
        const y = i * gridSize;
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
    }
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(0, canvas.height/2);
    ctx.lineTo(canvas.width, canvas.height/2);
    ctx.moveTo(canvas.width/2, 0);
    ctx.lineTo(canvas.width/2, 800);
    ctx.stroke();

    for(let i = 0; i < canvas.width; i += 50) {
        ctx.beginPath();
        ctx.moveTo(i, canvas.height/2 - 5);
        ctx.lineTo(i, canvas.height/2 + 5);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(canvas.width/2 - 5, i);
        ctx.lineTo(canvas.width/2 + 5, i);
        ctx.stroke();
    }

}


function reset() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    disegnaAssi();
}
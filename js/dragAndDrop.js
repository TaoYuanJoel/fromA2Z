let dropzone;

//curring in javascript
function changeBackground(color) {
    return function (color) {
        this.style('background-color', color);
    }
}


function setup() {
    let canvas=createCanvas(200, 200);
    background(0);

    dropzone = select("#dropzone");
    dropzone.dragOver(highlight);
    // dropzone.dragLeave(unhighlight);
    dropzone.drop(gotFile, unhighlight);
    // dropzone.dragOver(changeBackground('red'));
    // dropzone.dragLeave(changeBackground("white"));
    canvas.dragOver(highlight);
    canvas.drop(gotFile,unhighlight);
}

function highlight() {
    dropzone.style("background", '#ccc');
}



function unhighlight() {
    dropzone.style("background", "#fff")
}

function gotFile(file) {
    createP(file.type + ' ' + file.name + ' ' + file.size)
    let img=createImg(file.data, "global");
    img.hide();
    // img.size(100,100);
    image(img,0,0,width,height)
}
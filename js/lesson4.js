// let txt;

// function preload(){
// txt=loadStrings("txt/rainbow.txt");
// }

function loadFile() {
    loadStrings("txt/rainbow.txt", fileLoaded);
}

function fileLoaded(data) {
    // txt = date;
    let r = select("#rainbow");
    r.html(join(data, "<br>"));
}

function fileSelected(file) {
    // console.log(file);
    createP(file.name + ' ' + file.size + ' ' + file.type)
    if (file.type === "text") {
        let r = select('#rainbow');
        r.html(file.data);
    }else{
        createP("I need a text file");
    }
}

function setup() {
    noCanvas();
    // console.log(txt);
    // createP(join(txt,'<p>----------------</p>'));
    // createP(join(txt,"<br>"))
    createFileInput(fileSelected);

    let button = select("#loadfile");
    button.mousePressed(loadFile);

    // let r = select("#rainbow");
    // r.html(join(txt, "<br>"));

}
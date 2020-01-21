let txt;

function preload(){
txt=loadStrings("txt/rainbow.txt");
}

function setup(){
    noCanvas();
    // console.log(txt);
    // createP(join(txt,'<p>----------------</p>'));
    // createP(join(txt,"<br>"))
    let r=select("#rainbow");
    r.html(join(txt,"<br>"));

}
let textfield;
let output;
let submit;

function setup() {
    noCanvas();
    // textfield = createInput("enter your name");
    textfield = select("#blueberry");
    textfield.changed(newText);//run everytime change and hit enter
    textfield.input(newTyping);//run everytime change

    output = select("#output");
    submit = select("#submit");
    submit.mousePressed(newText);
}

function newText() {
    createP(textfield.value());
    // console.log(input.value());
}

function newTyping() {
    const a=textfield.value();
    output.html(`you type "${a}"`);
    // createP(textfield.value());
}

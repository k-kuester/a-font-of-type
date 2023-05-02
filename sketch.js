let caseImage;

function preload() {
  caseImage = loadImage('https://i.imgur.com/aVLNj8h.jpg');
}

function _input_text(text) {
    //for user input 
    _text = Array.from(text);
}

function inputSetup() {
    //create input box and button 
    fill(0)
        .strokeWeight(0)
        .textSize(16);
    text("please enter your desired text.", 50, 70);
    textStyle(ITALIC);
    text("line breaks are currently unsupported. if desired, the tilde (~) may be used to indicate line breaks.", 50, 90);

  inp = createInput();
  inp.style('font-size', '12px');
  inp.position(50, 60);

  button = createButton('submit');
  button.style('font-size', '12px');
  button.position(220, 60);
  button.mousePressed(pressed);

}

function pressed() {
    //call draw functions
    _text = Array.from(inp.value());

    createCanvas(windowWidth, windowHeight);
    background(255);
    _vertices = _text.map(_map_character);
    _draw_line();
    //_draw_characters(); optionally
}
function _map_character(ch) {
    // map a character to its vertex properties
    //randomization can be changed with int(random(min, max)) 

    for (let i = 0; i < chars.length; i++) {
        //currently hard-coding is the only way to ensure this error works - can be improved
         if (ch == "=" || ch == "+" || ch == "_" || ch == "@" || ch == "<" || ch == ">" || ch == "{" || ch == "}" || ch == "[" || ch == "]" || ch == '"') {
            let x = ch;
            textSize(16);
            textFont('Trebuchet MS');
            fill(0)
                strokeWeight(0)
                .textSize(16);
            text(x + " is an invalid character, not present in the standard California Job Case. \n Please try again.", 50, 80);
            image(caseImage, 100, 150);
            let link = createA("https://learningletterpress2012.files.wordpress.com/2012/02/letterpress_california_job_case_big.gif",
                "job case diagram", "_blank");
            link(100, 100);
            throw new Error ('invalid character');
        } else if (ch == "’") {
            return {
                character: "'",
                x:coordinates[4].x + int(random(-10, 10)),
                y: coordinates[4].y + int(random(-10, 10))
            }
        }else if (ch == 'e') {
            //ligatures and quads can be hard-coded here for recognition
            return {
                character: ch,
                x: coordinates[6].x + int(random (-30, 30)),
                y: coordinates[6].y+ int(random(-90, 90))
            }
        } else if (ch == '~') { // manual line break shortcut, represented by an em-quad starting next line
            return {
                character: ch,
                x: coordinates[50].x + int(random(-10, 10)),
                y: coordinates[50].y + int(random(-20, 20))
            }
        }  else if (ch == chars[i]) {
            return {
            character: ch,
            x: coordinates[i].x + int(random(-10, 10)),
            y: coordinates[i].y + int(random(-20, 20))
            }
        } 
    }
}

function _draw_characters() {
    //draw the chosen character at each point [testing/visualization]
    textSize(20);
    textFont('Georgia');
    stroke('gray');
    textAlign(CENTER);
    fill(0);
    for (let vertex of _vertices) {
        text(vertex.character, vertex.x, vertex.y);
    }
}

function _draw_line() {
    //draws map
    stroke('black');
    noFill();
    curveTightness(1.6);

    beginShape();
    stroke(20);
    curveVertex(0, 0);
    for (let vertex of _vertices) {
        curveVertex(vertex.x, vertex.y);
    }
    curveVertex(windowWidth, windowHeight);
    endShape();
}

function setup() {
    // called by P5 once
    createCanvas(windowWidth, windowHeight);
    background(255);
    inputSetup();
    //_vertices = _text.map(_map_character); (for manual testing)
     
}

function draw() {
    // called by P5 for each frame. currently not in use
    //_draw_characters();
   //_draw_line();
}

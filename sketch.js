//test cases: un-comment desired text
//let _text = Array.from("line break~testing");
let _text = Array.from("This latent mine-these unlaunch'd voices-passionate powers,~Wrath, argument, or praise, or comic leer, or prayer devout,~(Not nonpareil, brevier, bourgeois, long primer merely,)~These ocean waves arousable to fury and to death,~Or sooth'd to ease and sheeny sun and sleep,~Within the pallid slivers slumbering.")
//let _text = Array.from("Whoever you are holding me now in hand, Without one thing all will be useless, I give you fair warning before you attempt me further, I am not what you supposed, but far different. Who is he that would become my follower? Who would sign himself a candidate for my affections? The way is suspicious, the result uncertain, perhaps destructive You would have to give up all else, I alone would expect to be your sole and exclusive standard, Your novitiate would even then be long and exhausting, The whole past theory of your life and all conformity to the lives around you Therefore release me now before troubling yourself any further, let go your hand from my shoulders, Put me down and depart on your way. Or else by stealth in some wood for trial, Or back of a rock in the open air, (For in any roofd room of a house I emerge not, nor in company, And in libraries I lie as one dumb, a gawk, or unborn, or dead,) But just possibly with you on a high hill, first watching lest any person for miles around approach unawares, Or possibly with you sailing at sea, or on the beach of the sea or some quiet island, Here to put your lips upon mine I permit you, With the comrades long-dwelling kiss or the new husbands kiss, For I am the new husband and I am the comrade. Or if you will, thrusting me beneath your clothing, Where I may feel the throbs of your heart or rest upon your hip, Carry me when you go forth over land or sea; For thus merely touching you is enough, is best, And thus touching you would I silently sleep and be carried eternally. But these leaves conning you con at peril, For these leaves and me you will not understand, They will elude you at first and still more afterward, I will certainly elude you, Even while you should think you had unquestionably caught me, behold! Already you see I have escaped from you. For it is not for what I have put into it that I have written this book, Nor is it by reading it you will acquire it, Nor do those know me best who admire me and vauntingly praise me, Nor will the candidates for my love (unless at most a very few) prove victorious, Nor will my poems do good only, they will do just as much evil, perhaps more, For all is useless without that which you may guess at many times and not hit, that which I hinted at; Therefore release me and depart on your way.");
//let _text = Array.from("$.abcdefghijklmnopqrstuvwxyz1234MNOPQRSTUVWXYZ567890,[]--;:()!?/ff a  a   XYZJUABCDEFGHIKLNOWJ'");
//let = _text = Array.from("Hello, world!")

function _input_text(text) {
    //for user input functionality
    _text = Array.from(text);
}

function inputSetup() {
    //create input box and button [non-functional]
  let input = createInput();
  input.position(20, 20);
  _input_text(input);
  input.input(consoleFeedback);
  //extra comment for testing purposes

  let button = createButton('submit');
  button.position(25 + input.width, 65);
  button.mousePressed(pressed);
}

function _map_character(ch) {
    // map a character to its vertex properties
    //randomization can be changed with int(random(min, max)) 

    for (let i = 0; i < chars.length; i++) {
        if (ch == 'e') {
            //ligatures and quads can be hard-coded here for recognition
            return {
                character: ch,
                x: coordinates[6].x + int(random (-30, 30)),
                y: coordinates[6].y+ int(random(-90, 90))
            }
        } else if (ch == "~") {
            return {
                character: ch,
                x: coordinates[50].x + int(random(-10, 10)),
                y: coordinates[50].y + int(random(-20, 20))
            }
        } else if (ch == chars[i]) {
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
    stroke('black');
    noFill();
    curveTightness(1.6);
    //fill('orange');

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
    //inputSetup();
    _vertices = _text.map(_map_character);
     
}

function draw() {
    // called by P5 for each frame
    //_draw_characters();
    _draw_line();
}

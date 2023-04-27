//test cases: un-comment desired text

//let _text = Array.from("Oh me! Oh life! of the questions of these recurring,~Of the endless trains of the faithless, of cities filld with the foolish,~Of myself forever reproaching myself, (for who more foolish than I, and who more faithless?)~Of eyes that vainly crave the light, of the objects mean, of the struggle ever renewd,~Of the poor results of all, of the plodding and sordid crowds I see around me,~Of the empty and useless years of the rest, with the rest me intertwined,~The question, O me! so sad, recurring—What good amid these, O me, O life?~~~~~Answer.~~~~~That you are here—that life exists and identity,~That the powerful play goes on, and you may contribute a verse.");
//let _text = Array.from("This latent mine-these unlaunch'd voices-passionate powers,~Wrath, argument, or praise, or comic leer, or prayer devout,~(Not nonpareil, brevier, bourgeois, long primer merely,)~These ocean waves arousable to fury and to death,~Or sooth'd to ease and sheeny sun and sleep,~Within the pallid slivers slumbering.")
//let _text = Array.from("Whoever you are holding me now in hand, Without one thing all will be useless, I give you fair warning before you attempt me further, I am not what you supposed, but far different. Who is he that would become my follower? Who would sign himself a candidate for my affections? The way is suspicious, the result uncertain, perhaps destructive You would have to give up all else, I alone would expect to be your sole and exclusive standard, Your novitiate would even then be long and exhausting, The whole past theory of your life and all conformity to the lives around you Therefore release me now before troubling yourself any further, let go your hand from my shoulders, Put me down and depart on your way. Or else by stealth in some wood for trial, Or back of a rock in the open air, (For in any roofd room of a house I emerge not, nor in company, And in libraries I lie as one dumb, a gawk, or unborn, or dead,) But just possibly with you on a high hill, first watching lest any person for miles around approach unawares, Or possibly with you sailing at sea, or on the beach of the sea or some quiet island, Here to put your lips upon mine I permit you, With the comrades long-dwelling kiss or the new husbands kiss, For I am the new husband and I am the comrade. Or if you will, thrusting me beneath your clothing, Where I may feel the throbs of your heart or rest upon your hip, Carry me when you go forth over land or sea; For thus merely touching you is enough, is best, And thus touching you would I silently sleep and be carried eternally. But these leaves conning you con at peril, For these leaves and me you will not understand, They will elude you at first and still more afterward, I will certainly elude you, Even while you should think you had unquestionably caught me, behold! Already you see I have escaped from you. For it is not for what I have put into it that I have written this book, Nor is it by reading it you will acquire it, Nor do those know me best who admire me and vauntingly praise me, Nor will the candidates for my love (unless at most a very few) prove victorious, Nor will my poems do good only, they will do just as much evil, perhaps more, For all is useless without that which you may guess at many times and not hit, that which I hinted at; Therefore release me and depart on your way.");
//let _text = Array.from("$.abcdefghijklmnopqrstuvwxyz1234MNOPQRSTUVWXYZ567890,[]--;:()!?/ff a  a   XYZJUABCDEFGHIKLNOWJ'");
//let = _text = Array.from("Hello, world!");
//let _text = Array.from("Oh me! Oh life! of the questions of these recurring,~Of the endless trains of the faithless, of cities fill'd with the foolish,~Of myself forever reproaching myself,(for who more foolish than I, and who more faithless?)~Of eyes that vainly crave the light, of the objects mean, of the struggle ever renew'd,~Of the poor results of all, of the plodding and sordid crowds I see around me,~Of the empty and useless years of the rest, with the rest me intertwined,~The questions, O me! so sad, recurring--What good amid these, O me, O life? ~~~~~Answer.~~~~~~That you are here--that life exists and identity,~That the powerful play goes on, and you may contribute a verse.")
//let _text = Array.from("Sometimes with one I love I fill myself with rage for fear I effuse unreturn'd love,~But now I think there is no unreturn'd love, the pay is certain one way or another~(I loved a certain person ardently and my love was not return'd,~Yet out of that I have written these songs).")
//let _text = Array.from("Shut not your doors to me proud libraries,~For that which was lacking on all your well-fill'd shelves, yet needed most, I bring,~Forth from the war emerging, a book I have made,~The words of my book nothing, the drift of it every thing,~A book separate, not link'd with the rest nor felt by the intellect,~But you ye untold latencies will thrill to every page.")
//let _text = Array.from("This is thy hour O Soul, thy free flight into the wordless,~Away from books, away from art, the day erased, the lesson done,~Thee fully forth emerging, silent, gazing, pondering the themes thou lovest best,~Night, sleep, death and the stars.");
//let _text = Array.from("O me, man of slack faith so long,~Standing aloof, denying portions so long,~Only aware to-day of compact all-diffused truth,~Discovering to-day there is no lie or form of lie, and can be none,~but grows as inevitably upon itself as the truth does upon itself,~Or as any law of the earth or any natural production of the earth does.~~(This is curious and may not be realized immediately, but it must be realized,~I feel in myself that I represent falsehoods equally with the rest,~And that the universe does.)~~Where has fail'd a perfect return indifferent of lies or or the truth?~Is it upon the ground, or in water or fire? or in the spirit of man? or in the meat and blood?~~Meditating among liars and retreating sternly into myself, I see~that there are really no liars or lies after all,~And that nothing fails its perfect return, and that what are called lies are perfect returns,~And that each thing exactly represents itself and what has preceded it,~And that the truth includes all, and is compact just as much as~space is compact,~And that there is no flaw or vacuum in the amount of the truth--but~that all is truth without exception;~And henceforth I will go celebrate any thing I see or am,~And sing and laugh and deny nothing.")

//vars
let caseImage;

function preload() {
  caseImage = loadImage('https://i.imgur.com/aVLNj8h.jpg');
}

function _input_text(text) {
    //for user input functionality
    _text = Array.from(text);
}

function inputSetup() {
    fill(0)
        .strokeWeight(0)
        .textSize(16);
    text("welcome to the interactive demo! \n please enter your desired text.", 50, 70);
    textStyle(ITALIC);
    text("note: copy/paste functionality is currently unsupported.", 50, 110);

    //create input box and button 
  inp = createInput();
  inp.position(50, 50);
  //input.input(consoleFeedback);
  //extra comment for testing purposes

  button = createButton('submit');
  button.position(55 + inp.width, 50);
  button.mousePressed(pressed);

}

function pressed() {
    _text = Array.from(inp.value());

    createCanvas(windowWidth, windowHeight);
    background(255);
    _vertices = _text.map(_map_character);
    _draw_line();
}


function _map_character(ch) {
    // map a character to its vertex properties
    //randomization can be changed with int(random(min, max)) 

    for (let i = 0; i < chars.length; i++) {
        //currently hard-coding is the only way to ensure this error works - to be improved
        if (ch == "=" || ch == "+" || ch == "`" || ch == "_" || ch == "@" || ch == "<" || ch == ">" || ch == "{" || ch == "}" || ch == "[" || ch == "]" || ch == '"') {
            let x = ch;
            textSize(16);
            textFont('Trebuchet MS');
            fill(0)
                strokeWeight(0)
                .textSize(16);
            text(x + " is an invalid character, not present in the standard California Job Case. \n Please try again.", 50, 80);
            image(caseImage, 100, 150);
            let link = createA("https://learningletterpress2012.files.wordpress.com/2012/02/letterpress_california_job_case_big.gif",
                "image source", "_blank");
            link(100, 100);
            throw new Error ('invalid character');
        }
        if (ch == 'e') {
            //ligatures and quads can be hard-coded here for recognition
            return {
                character: ch,
                x: coordinates[6].x + int(random (-30, 30)),
                y: coordinates[6].y+ int(random(-90, 90))
            }
        } else if (ch == "~") { // line break shortcut, represented by an em-quad starting next line
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
    inputSetup();
    //_vertices = _text.map(_map_character);
     
}


function draw() {
    // called by P5 for each frame
    //_draw_characters();
   _draw_line();
}

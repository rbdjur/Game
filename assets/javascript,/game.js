// In div box called: 'card-body' / paragraph called: 'text-white m-0" 
// generate random numbers from 01-50 and display the number in the appropriate div or container

// Check if webpage responds 
console.log("This should be working");

// assign randomScore variable random number
// If random number does not show up maybe add a click event or on.key to get game started.
var randomScore = Math.floor((Math.random() * 50) + 25);
console.log(randomScore);

//Math.floor((Math.random() * 100) + 1)

var random_generated_score_div = document.getElementById("random-number");
console.log("designate element");

// document.getElementById("text-white m-0").innerHTML = randomScore;
// console.log("random number should be inside div");


random_generated_score_div.innerHTML = randomScore;
console.log("random number should be inside div");


// yeezy picture
// 4 numeric values for each picture

var targetNumber = randomScore;
console.log("same number as", randomScore); 

$("#random-number").text(targetNumber);
console.log("number to guess will display as the targetNumber");

var shoes = $("#shoes");
console.log("shoes will look into #shoes");

var counter = 0;
console.log("counter is zero");

var shoeOptions = [5, 7, 3, 4];
console.log("number values for the 4 shoes");

//create for loop to create value for every numberOptions 

for (var i = 0; i < shoeOptions.length; i++) {
    // for each picture, we will create an imageShoe
    var imageShoe = $("<img>");
    console.log("imageShoe variable will highlight the <img> tag");

    // each picture will be given class ".shoe-image"
    imageShoe.addClass("image-shoe"); 
    console.log("add class to each picture");

    shoeImageOptions = ["assets/images/Yeezy350.png", "assets/images/Yeezy750.png", "assets/images/AdidasBoosts.png", "assets/images/AdidasPowerphase.png"];

    imageShoe.attr("src", shoeImageOptions[i]);
    console.log("gives all html with tag src the yeezy picture");

    // each imageShoe will be given data attribute called data-shoeValue/ 
    // data attribute set equal to array value
    imageShoe.attr("data-shoeValue", shoeOptions[i]);
    console.log("each image will be given a shoe value respectively on values of shoeOptions");

    shoes.append(imageShoe);
    console.log("Add the imageShoe value into the shoes variable");
}

// This time, our click event applies to every single crystal on the page. Not just one.
    shoes.on("click", ".image-shoe", function() {

    var shoeValue = ($(this).attr("data-shoeValue"));
    shoeValue = parseInt(shoeValue);
    console.log("on a click function, the .shoe-image attribute will have the funcion that parses shoe value");
   
    counter += shoeValue;
    console.log("counter increases by one incrementally");

    alert("New Score: " + counter);


// put the shoeValue into the current box score. 
    $("#currentscore").html(shoeValue); 
    console.log("puts the shoeValue number into the currentscore div");


    if (counter === targetNumber) {
        alert("You Win!");
    }

    else if (counter >= targetNumber) {
        alert("You lose!!");
    }
    });

    var holdL = 0;
    var comeUp = 0;

    var scoreCounterWins = document.getElementById("scorecounter"); 
    console.log("calls on score counter to put in ComeUp counter in");

    var scoreCounterLoses = document.getElementById("card-footer");
    console.log("calls on the btn btn-primary to put Loses counter in");

    scoreCounterWins = holdL;

    scoreCounterLoses = comeUp;
    
    if (counter === targetNumber) {
        scoreCounterWins++;
        console.log("if target number reach, increase comeup variable by 1")
    }
    else if (counter > targetNumber) {
        scoreCounterLoses++;
        console.log("if counter is greater than target number, increase holdL variable by 1");
    }
    



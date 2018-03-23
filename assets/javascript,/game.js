// In div box called: 'card-body' / paragraph called: 'text-white m-0" 
// generate random numbers from 01-50 and display the number in the appropriate div or container

// Check if webpage responds 
console.log("This should be working");

// assign randomScore variable random number
// If random number does not show up maybe add a click event or on.key to get game started.
var randomScore = Math.floor((Math.random() * 50) + 25);

//Math.floor((Math.random() * 100) + 1)

var random_generated_score_div = document.getElementById("random-number");

// document.getElementById("text-white m-0").innerHTML = randomScore;
// console.log("random number should be inside div");

random_generated_score_div.innerHTML = randomScore;
// yeezy picture
// 4 numeric values for each picture

var targetNumber = randomScore;
console.log("same number as", randomScore); 

$("#random-number").text(targetNumber);

var shoes = $("#shoes");

var counter = 0;

// var shoeOptions = [5, 7, 3, 4];
// console.log("number values for the 4 shoes");

var shoeOptions = [Math.floor((Math.random() * 10) + 2), Math.floor((Math.random() * 10) + 2), Math.floor((Math.random() * 10) + 2), Math.floor((Math.random() * 10) + 2)];
console.log("random number values for the 4 shoes"); 

//create for loop to create value for every numberOptions 

for (var i = 0; i < shoeOptions.length; i++) {
    // for each picture, we will create an imageShoe
    var imageShoe = $("<img>");

    // each picture will be given class ".shoe-image"
    imageShoe.addClass("image-shoe"); 

    shoeImageOptions = ["assets/images/Yeezy350.png", "assets/images/Yeezy750.png", "assets/images/AdidasBoosts.png", "assets/images/AdidasPowerphase.png"];

    imageShoe.attr("src", shoeImageOptions[i]);
    console.log("gives all html with tag src the yeezy picture");

    // each imageShoe will be given data attribute called data-shoeValue/ 
    // data attribute set equal to array value
    imageShoe.attr("data-shoeValue", shoeOptions[i]);

    shoes.append(imageShoe);

}
// This time, our click event applies to every single crystal on the page. Not just one.
    shoes.on("click", ".image-shoe", function() {

    var shoeValue = ($(this).attr("data-shoeValue"));
    shoeValue = parseInt(shoeValue);
   
    counter += shoeValue;

    // alert("New Score: " + counter);

// // put the shoeValue into the current box score. 
    // $("#currentscore").html(shoeValue); 
    // console.log("puts the shoeValue number into the currentscore div");
    
    $("#currentscore").html(counter); 

    if (counter === targetNumber) {
        alert("You Win!");
    }

    else if (counter >= targetNumber) {
        alert("You lose!!");
    }
    });

    // create 2 variables as a counter
    // hold L as loses
    // comeup as wins 
    var holdL = 0;
    var comeUp = 0;
    
    // Create a function that increaes the comeup variable by 1 when counter = targetNumber
    var scoreCounterWins =  function() {
        if (counter === targetNumber) {
            var nodewin = document.getElementById("scorecounter"); 
            nodewin.innerHTML = 100;
            comeUp;
            console.log("calls on score counter to put in ComeUp counter in");
        }else{
            console.log('keep trying')
        }

    };
    scoreCounterWins();

        // Create a function that increaes the comeup variable by 1 when counter = targetNumber

    var scoreCounterLoses = function() {
        if (counter === targetNumber) {
            document.getElementById("scorecounter1"); 
            hodL++;
            console.log("calls on score counter to put in ComeUp counter in");
        }

    };
    scoreCounterLoses();

    

    // var scoreCounterLoses = document.getElementById("card-footer");
    // console.log("calls on the btn btn-primary to put Loses counter in");

    
    // if (counter === targetNumber) {
    //     scoreCounterWins++;
    //     console.log("if target number reach, increase comeup variable by 1")
    // }
    // else if (counter > targetNumber) {
    //     scoreCounterLoses++;
    //     console.log("if counter is greater than target number, increase holdL variable by 1");
    // }

//     var win = document.getElementById("scorecounter"); 
//     count = 0;
//     if (counter === targetNumber) {
//         count += 1;
//         console.log("if target number reach, increase comeup variable by 1");
//     }
//     else if (counter > targetNumber) {
//         count += 1;
//         console.log("if counter is greater than target number, increase holdL variable by 1");
//     }
// };
    
    
    
    
    // button.innerHTML = "Click me: " + count;
    // };

    // var lose = document.getElementById("scorecounter1"),
    // count = 0;
    // button.onclick = function() {
    // count += 1;
    // button.innerHTML = "Click me: " + count;
    // };



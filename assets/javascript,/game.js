// In div box called: 'card-body' / paragraph called: 'text-white m-0" 
// generate random numbers from 01-50 and display the number in the appropriate div or container

// Check if webpage responds 
console.log("This should be working");

// assign randomScore variable random number
// If random number does not show up maybe add a click event or on.key to get game started.
var randomScore = Math.floor(Math.random() * 50);
console.log(randomScore);

var random_generated_score_div = document.getElementById("random-number");
console.log("designate element");

// document.getElementById("text-white m-0").innerHTML = randomScore;
// console.log("random number should be inside div");


random_generated_score_div.innerHTML = randomScore;
console.log("random number should be inside div");


// create values for yeezy picture
// console.log("values for each picture");
// var firstPic = 0;
// var secondPic = 0;
// var thirdPic = 0;
// var fourthPic = 0;
// var randomPicNumber = Math.floor(Math.random() * 10);
// console.log("values of pics and random number generator");

// yeezy picture
// 4 numeric values for each picture

var numberOptions = [5, 7, 3, 4];
console.log("number values for the 4 shoes");

//create for loop to create value for every numberOptions 

for (var i = 0; i < numberOptions.length; i++) {
    // for each picture, we will create an imageShoe
    var imageShoe = $("<img>");
    console.log("imageShoe variable will highlight the <img> tag");

    // each picture will be given class ".shoe-image"
    imageShoe.addClass("shoe-image"); 
    console.log("add class to each picture");

    //each imageShoe will be given a src link to shoe image
    imageShoe.attr("src", ); 
    console.log("put picture html or file source");

    
}

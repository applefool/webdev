//document.write(Math.round(10.3));
//document.write("<br>")

//document.write(Math.round(Math.random()*100));


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum and the minimum is inclusive
}

var foods = ["zap fan", "kfc", "mcd", "enterprise 4 food court","maybank", "subway", "starbuck", "murni","mee soup", "sushi king", "sushi mentai", "old town white coffee","padi house", "satay house", "sushi zen", "taiwan food", "owls cafe", "tgi friday","secret recipe", "marry brown", "A&W", "burger king"]
document.write("<br>")
//document.write(foods.length)  
document.write("<br>")

var randomNumber = getRandomInt(1, foods.length)

document.write("Foods number "+randomNumber)  
document.write("<br>")
document.write(foods[randomNumber])
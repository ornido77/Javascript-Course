// Challenge 1

function ageInDays() {
   var birthYear = prompt("What year were you born?");
   var result = (2021 - birthYear) * 365;
   var h1Tag = document.createElement("h1")
   var textResult = document.createTextNode("You are " +result+ " days old.")
   h1Tag.setAttribute("id", "age-in-days");
   h1Tag.appendChild(textResult);
   document.getElementById('flex-box-result').appendChild(h1Tag);
}

function reset() {
    document.getElementById("age-in-days").remove();
}

function generateCat() {
    var image = document.createElement("img");
    var div = document.getElementById("cat-container");
    image.src = "static/images/cat.gif";
    image.setAttribute("class", "cat")
    div.append(image);
}
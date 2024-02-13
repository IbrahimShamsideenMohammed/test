function generateQuote(){
var btn = document.querySelector("button");
var result = document.getElementById("result");

// btn.addEventListener("click", function(){
    
var word = document.getElementById("in").value;

const dictionary = {
    computer: "An Electronic device...",
    book: "Writing or reading material...",
    machine: "A device that makes works easier"
}

if (word==""){
    result.innerHTML = "Please enter a search keyword...";
    result.style = "color:red;";
}
else if (!dictionary[word]){
    result.innerHTML = word+ " does not exist in this dictionary";
    result.style = "color:red;";
}
else {
    result.innerHTML = dictionary[word];
    result.style = "color:green;";
}
// })
}
setInterval(generateQuote, 6000);


// function revStr(){
//     var word = document.getElementById("in").value;
//     var rev = "";
//     for(let i = word.length-1; i>=0; i--){
//         rev = rev + word[i];
//     }
//     return  rev;
    
// }



// document.querySelector("button").addEventListener("click", function(){
//    document.getElementById("result").innerHTML = revStr();
    
// })

function revstr(){
    var word = document.getElementById("in").value;
    var rev = "";
    for(let i = word.length-1; i>=0; i--){
        rev = rev + word[i];
    }
    return rev;
}

document.querySelector("button").addEventListener("click", function(){
    document.getElementById("result").innerHTML = revstr();
})
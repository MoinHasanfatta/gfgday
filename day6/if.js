//if (condition){
    // check
//} else {
    // recheck
//}
// = assign ==/ === checking
age = 19
if(age < 18){
    console.log("Cannot vote")
} else {
    console.log("please vote")
}

let myText = document.querySelector('h1')
console.log(myText)

function hii(){
    if (myText.textContent == 'I am in GFG batch')
        myText.textContent = 'I like Mern Stack' 
    else  myText.textContent = 'I am in GFG batch'  
}
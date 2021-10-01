/*

const header = document.getElementById('header');
console.log(header);

document.getElementById("header").style.color = "green"
header.innerText = "Hello World";

const errorList = document.getElementsByClassName('error-List');
console.log(errorList)

errorList[0].innerText = "I changed error 1";
//Ex 1 Looping
for (let i = 0; i< errorList.length; i++){
    errorList[i].style.color = "red";
}

//Example 2 Looping
for(error of errorList){
    error.style.color = "green";
}

//Example 3 Looping forEach // Can not do

// errorList.forEach(error => error.style.color = "purple")

const tags = document.getElementsByTagName("p");
console.log(tags);

tags[0].innerText = "I changed the paragraph using getElementsByTagName!";

const listItems = document.getElementsByTagName("li");
console.log(listItems);

listItems[0].style.fontStyle = "italic";
listItems[1].style.fontStyle = "italic";

for (let i = 0; i< listItems.length; i++){
    listItems[i].style.fontStyle = "italic";
}

*/

const header = document.querySelector("#header")
console.log(header);

const errorList = document.querySelector(".error-List");
console.log(errorList);

const errorList2 = document.querySelector("body > div > ul >li:nth-child(2)");
console.log(errorList2);

const headerTags = document.querySelectorAll("h1");
console.log(headerTags);

console.log(headerTagw[1]);

headerTags.forEach((h) => {
    h.syle.color = "blue";
});

const listItems = socument.querySelectorAll(".error-list");

listItems.forEach(li=>{
    li.style.fontStyle = "italic"
})
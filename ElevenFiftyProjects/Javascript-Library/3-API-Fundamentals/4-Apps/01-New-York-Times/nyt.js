const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1 Link to the API
const key = 'Pq2RDA1cRABn86JVB0QtPCPhI1PGV4pF'; // Links the file to our account. Think of it as the power chord metaphor for servers and clients
let url; //3 Declares url as variable

// . is to signify class

// search form
const searchTerm = document.querySelector('.search'); // Pulling a specific class name from the HTML, and assigning it to a variable.
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form'); //Except < that is a tag
const submitBtn = document.querySelector('.submit');
// Results Navigation
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

// Results section
const section = document.querySelector('section'); // tag
//we know they're tags because they don't have a . or a # in front of them.

nav.style.display = 'none'; // preemptively hides buttons so they just won't be there first thing when the page loads.

searchForm.addEventListener('submit', fetchResults); //declares the 'submit' event calls fetchResults function
nextBtn.addEventListener('click', nextPage); // calls function
previousBtn.addEventListener('click', previousPage);

let pageNumber = 0; //declares variable and assigns a value
// console.log ('PageNumber:', pageNumber);
let displayNav = false; // declares it as false

function fetchResults(e){
    e.preventDefault(); // prevents submit action and the refreshing of the page
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.nodeValue; //Building url for our results
   // console.log("URL", url);

    if(startDate.value !== '') { //Checking to see if its not empty. If it is, attach the URl to the empty brackets. Same with the end date
        console.log(startDate.value)
        url += '&begin_date=' + startDate.value;
    };
}

if(endDate.value !== '') {
    console.log(endDate.value)
    url += '&end_date=' + startDate.value;
};


fetch(url) // if url is fetched as a perimeter and it sends a request
.then(function(result) { // perform result function and will obtain
    // console.log(result) < there to see how things were working but we dont need it
    return result.json(); // returns result in json form
})
.then(function(json) { // takes the json results
displayResults(json); // calls a function and passes in the json result
});

function displayResults(json) { //function
   let articles = json.response.docs; // navigating the json with . notation
   // console.log("Display Results", json);
   console.log(json.response.docs);
   // console.log(articles);
}
    while (section.firstChild) { // while section has a first child
    section.removeChild(section.firstChild); //
}
    if (articles.length >= 10 ) { // 50/50
    nav.style.display = 'block'; // shows the nav if ten items are in the array
} else {
    nav.style.display ="none"; //hides it if less than 10 items are in the array.
}
function displayResults(json) {

    while (section.firstChild) {
    section.removeChild(section.firstChild);
}

    let articles = json.response.docs;
    if(articles.length === 0) {
        console.log("No results");
    } else {
        for(let i = 0; i < articles.length; i++) {
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a'); //1
            let current = articles[i]; //2
            console.log("Current:", current); //3
            link.href = current.web_url; //4
            link.textContent = current.headline.main; //5

            // console.log('Current:', current);

            article.appendChild(heading);
            heading.appendChild(link); //6
            section.appendChild(article);
        }
    }
};

//navigation
function displayResults(json) {
    let articles = json.response.docs;
    //This is like a declaration
    if(articles.length >= 10) {
        nav.style.display = 'block'; //shows the nav display if 10 items are in the array.
        nav.style.display = 'none'; //hides the nav display if less than 10 items are in the array.
    } else {
        for(let i = 0; i < articles.length; i++) {
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let para = document.createElement('p');     //1
            let clearFix = document.createElement('div'); //2

            let current = articles[i];
            console.log("Current:", current);

            link.href = current.web_url; //Pay attention to the variables. Current is an object going through the array, each article in the array has a different property. .web_url is a property in there. And we're calling it to put it in the current document. grabs the hyperlink from the article at the time
            link.textContent = current.headline.main; // assigning a new anchor tag which is a key in Current. This line assigns the words that become a link
            para.textContent = 'Keywords: '; // assigns the value "keywords" to the paragraph

            // It is now being ran
            for(let j = 0; j < current.keywords.length; j++) { //loops through j
                let span = document.createElement('span'); //creating a span element
                span.textContent += current.keywords[j].value + ' '; //add text to the span tag. textContent is like HTML
                para.appendChild(span); // appends child. Attaching something to the end of another thing.
            }

            if(current.multimedia.length > 0) {
                img.src = "http://www.nytimes.com/" , current.multimedia[0].url; //display them (here's where you get them)
                img.alt = current.headline.main; // if they won't load, display these words
            }
            clearFix.setAttribute('class', 'clearfix'); // div with a class of clearFix

        

            //They will appear here when we inspect
            article.appendChild(heading); // appends all the variables 
            heading.appendChild(link);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    }
};

function nextPage (e){ // event is a click
    console.log('Next button clicked'); // goes up by one and the function is called
    pageNumber++;
    fetchResults(e);
    console.log("Page number:", pageNumber); //to know what page it is

}

function previousPage (e){ //event is also a 'click
    console.log('Next button clicked');
    if(pageNumber > 0) { // If not on the first page
        pageNumber--; // subtract from the page number
    } else {
        return; //does nothing
    }
    fetchResults(e); //calls function
    console.log("Page:", pageNumber);

} 
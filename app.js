// DOM Basics Exercise

//1)
const portillos = document.getElementById(`portillos`);
        // using .getElementById so don't need #

//2)
const images = document.getElementsByTagName(`img`);
        // put images in an HTML collection

//3)
const centered = document.getElementsByClassName(`center`);
        // using .getElementByClassName so do not need . for class
        // puts item(s) with class=center into HTML Collection

//4)
const ginosEast = document.querySelector(`#ginos`);
        // Since querySelector, need to use # on id's and . on classes
        // also use document.querySelector(`div`); bc it selects the FIRST div which is #ginos div
//5)
const pTags = document.querySelectorAll(`p`);
        // Returns items in a NodeList

//6a)
const h1 = document.querySelector(`h1`);
        // OR document.querySelector(`.center`); First element with the class="center"

//6b)
h1.innerText = `Matt's Favorite Places To Eat In Sweet Home Chicago!`
        // updating the value of one of the keys for an element in the JS representation of document 

//7a)
const others = document.getElementById(`others`);

//7b)
others.innerHTML = `<h3>Other Favorites</h3>`;

//8a)
const aTag = document.querySelector(`a`);

//8b)
aTag.href = `https://www.choosechicago.com/articles/food-drink/5-classic-chicago-foods/`;               
            // href needs to be entered as a stirng in quotes or backticks
//9)
h1.classList.add(`background`);
h1.classList.add(`text-color`);
        // ALSO for .add can add multiple style classes on same line (NOTE:have to place on seperate lines for toggle):
            // h1.classList.add(`background`, `text-color`);

//10)
h1.classList.remove(`background`);
        // accessing (removing) the classList object (background) on the element (h1) 

//11a)
const h4 = document.createElement(`h4`);

//11b)
h4.innerText = `CHICAGO: A great place to eat!`;

//11c)
const body = document.querySelector(`body`);
body.prepend(h4);
        // prepend h4 (adding to beginning) of body elemnt

//12a)
const h5 = document.createElement(`h5`);

//12b)
h5.innerText = `See you in the Windy City Sometime!`;

//12c)
aTag.insertAdjacentElement(`afterend`, h5);
        // Will be added after (afterend) the closing tag of the (aTag) targetElement

//13)
const listItem = document.querySelector(`li`);
listItem.remove();
        // OR  
        //const listItem = document.querySelector(`li`).remove(); 

        // To remove item OTHER than the FIRST item with querySelector:
            // document.querySelector(`li:nth-of-type(3).remove());
            // would remove the 3rd list item 

// BONUS

//14a)
const divs = document.querySelectorAll(`div`);
    // const divs = document.getElementsByTagName(`div`);
    // divs = NodeList so cannot use .classList on 'divs' as there are multiple divs in this NodeList (like an array). Will need to access the index of the NodeList or can use a loop. 
    // for loop will iterate through the divs array/NodeList

for (div of divs){
    div.classList.toggle(`background`);
}
                // for (every element/variable/parameter 'div'  OF  NodeList/array/object/HTMLCollection 'divs') apply {div.classList.toggle(`background`);}


//15a)
const hungry = [
    "Thanks", 
    "A", 
    "Lot", 
    "Now", 
    "I", 
    "Am", 
    "Hungry!"
];

//15b)
// for(word of hungry){
//     document.querySelector(`body`).append(document.createElement(`span`).innerText = `${word} `);
// }

       // selecting body Element
       // appending something new to body element each time through the loop that is in parentheses (createing new element span with innertext of content of current item of array hungry ${item in array} )

for(word of hungry){
    const body1 = document.querySelector(`body`);
    const span = document.createElement(`span`);
    span.innerText = `${word} `;
    body.append(span);
    console.dir(span); 
            // can check spans and innerText for each using console.dir(span);
}

    // Each time the loop runs, for(item of hungry) ${word} will hold one of the values of hungry variable.
    // first time through loop, select body element and create new element of span. Then set text of span to string value of array item with ${item} and will continue through the loop until no more items within the variable of hungry to run through the loop

    // each time go through the loop it redeclares the variable 
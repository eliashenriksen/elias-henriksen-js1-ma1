// Elias Henriksen Javascript 1 MA1 / 20.06.2021

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1

const cat = {
    complain: function() {
        console.log("Meow!");
    }
}

// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add("subheading");

// Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7

function catNameLogger(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

catNameLogger(cats);

// Question 8

function createCats(cats) {
    let catHtml = "";
    for (let i = 0; i < cats.length; i++) {
        if (cats[i].age) {
            cats[i].age = cats[i].age;
        }
        else {
            cats[i].age = "Age unknown.";
        }
        catHtml += "<div>" + "<h5>" + cats[i].name + "</h5>" + "<p>" + cats[i].age + "</p>" + "</div>";
    }
    return catHtml;
}

const catResult = createCats(cats);

const catContainer = document.querySelector(".cat-container");

catContainer.innerHTML = catResult;
const apiKey = "86eea5a475df44aaa8c47f654c426751";
//Featured Cards
let storedData = JSON.parse(localStorage.getItem("FeaturedRecipes"));
if (storedData) {
    document.getElementById("FeaturedItems").style.display = "flex";
    storedData.recipes.forEach(element => {
        let FeaturedCards = addCards(element);
        let Ingredientslist = document.createElement("ul")
        element.extendedIngredients.forEach(element => {
            addIngredients(element, FeaturedCards, Ingredientslist)
        })
        addButton(FeaturedCards)
    })
}
else {
    async function getdata() {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`)
            const data = await response.json();
            localStorage.setItem("FeaturedRecipes", JSON.stringify(data));
        }
        catch (error) {
            (error => console.error(error))
        }
    }
    getdata().then(() => {
        document.getElementById("FeaturedItems").style.display = "flex";
        let featuredData = JSON.parse(localStorage.getItem("FeaturedRecipes"))
        console.log(featuredData)
        featuredData.recipes.forEach(element => {
            let FeaturedCards = addCards(element);
            let Ingredientslist = document.createElement("ul")
            element.extendedIngredients.forEach(element => {
                addIngredients(element, FeaturedCards, Ingredientslist)
            })
            addButton(FeaturedCards)
        })

    })
}
// Searched Recipe Cards
let searchedValue = document.getElementById("SearchBar");
let Searchbtn = document.getElementById("SearchButton");
Searchbtn.addEventListener("click", search);
function search() {
    let EnteredValue = searchedValue.value.toLowerCase();
    document.getElementById("FeaturedItems").style.display = "none";
    if (EnteredValue != "") {
        instructionCard.innerHTML = "";
        document.getElementById("BackButton").style.display = "none";
        document.getElementById("RecipeCards").innerHTML = "";
        document.getElementById("RecipeCards").style.display = "flex";
        let searchedData = JSON.parse(localStorage.getItem(EnteredValue))
        if (searchedData) {
            searchedData.results.forEach(element => {
                let searchCards = addCards(element)
                let SearchedIngredients = JSON.parse(localStorage.getItem(`${element.id}`))
                let Ingredientslist = document.createElement("ul")
                SearchedIngredients.ingredients.forEach(element => {
                    addIngredients(element, searchCards, Ingredientslist)
                })
                addButton(searchCards)
            })
        }
        else {
            async function getdata() {
                try {
                    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${EnteredValue}`)
                    const data = await response.json();
                    localStorage.setItem(EnteredValue, JSON.stringify(data));
                }
                catch (error) {
                    (error => console.error(error))
                }
            }
            getdata().then(() => {
                let searchedData = JSON.parse(localStorage.getItem(EnteredValue))
                searchedData.results.forEach(element => {
                    let searchCards = addCards(element)
                    async function getdata() {
                        try {
                            const response = await fetch(`https://api.spoonacular.com/recipes/${element.id}/ingredientWidget.json?apiKey=${apiKey}`)
                            const data = await response.json();
                            localStorage.setItem(`${element.id}`, JSON.stringify(data));
                        }
                        catch (error) {
                            (error => console.error(error))
                        }
                    }
                    getdata().then(() => {
                        let searchedIngredients = JSON.parse(localStorage.getItem(`${element.id}`))
                        let Ingredientslist = document.createElement("ul")
                        searchedIngredients.ingredients.forEach(element => {
                            addIngredients(element, searchCards, Ingredientslist)

                        })
                        addButton(searchCards)
                    })
                })
            })
        }
    }
}
function addCards(element) {
    let mainrecipeCards = document.getElementById("RecipeCards")
    let Cards = document.createElement("div")
    Cards.classList.add("Card");
    Cards.innerHTML = `<h4>${element.title}</h4> <img src="${element.image}" id="apiimg" alt="ApiImage">  <h3> Ingredients </h3>`
    mainrecipeCards.appendChild(Cards)
    Cards.setAttribute("value", `${element.id}`)
    return Cards
}
function addIngredients(element, mainCards, Ingredientslist) {
    const ingredientsItem = document.createElement("li")
    ingredientsItem.innerText = element.name;
    Ingredientslist.appendChild(ingredientsItem)
    mainCards.appendChild(Ingredientslist)
}
function addButton(mainCards) {
    let mainButton = document.createElement("div")
    mainButton.classList.add("mainbutton")
    mainCards.appendChild(mainButton)
    let btn = document.createElement("button")
    btn.classList.add("Cards-btn")
    btn.innerText = "Show Recipe"
    mainCards.appendChild(btn)
    btn.addEventListener("click", showRecipe);
}

function showRecipe(event) {
    let element = event.target;
    let mainElement = element.parentNode;
    let value = mainElement.getAttribute("value")
    document.getElementById("RecipeCards").style.display = "none";
    document.getElementById("FeaturedItems").style.display = "none";
    const endpoint = `https://api.spoonacular.com/recipes/${value}/information?apiKey=${apiKey}`;
    fetch(endpoint)
        .then(response => response.json())
        .then((data) => {
            createRecipe(data)
            let backButton = document.getElementById("BackButton")
            backButton.style.display = "flex"
            backButton.addEventListener("click", () => {
                instructionCard.innerHTML = "";
                document.getElementById("RecipeCards").style.display = "flex";
                document.getElementById("BackButton").style.display = "none"
            })
        })
        .catch(error => console.log(error));
}
function createRecipe(data) {
    document.getElementById("FeaturedItems").style.display = "none";
    let mainRecipe = document.getElementById("instructionCard")
    let recipeDiv = document.createElement("div")
    recipeDiv.classList.add("CardNew");
    recipeDiv.innerHTML = `<h3> Instructions </h3> <p> ${data.instructions} </p> <h3> Summary</h3> <p> ${data.summary} </p>`
    mainRecipe.appendChild(recipeDiv)
}
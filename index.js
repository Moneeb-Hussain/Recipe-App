let c = 10, b;
console.log(c)
// fetch('https://spoonacular.com/food-api')
//     .then(response => response.json())
// .then(data => localStorage.setItem('data', JSON.stringify(data)))
//     .catch(error => console.log(error))

// const Fetchresult = localStorage.getItem("data")
// const Pars = JSON.parse(Fetchresult)
// console.log(Pars)
// const key = "86eea5a475df44aaa8c47f654c426751"     ;
// fetch('https://api.publicapis.org/entries')
//     .then(response => response.json())
//     .then(data => localStorage.setItem('data', JSON.stringify(data)))
//     .catch(error => console.log(error))

// const Fetchresult = localStorage.getItem("data")
// const Pars = JSON.parse(Fetchresult)
// console.log(Pars)
// fetch('')
//     .then(response => response.json())
//     .then(data => localStorage.setItem('data', JSON.stringify(data)))
//     .catch(error => console.log(error))

// const Fetchresult = localStorage.getItem("data")
// const Pars = JSON.parse(Fetchresult)
// console.log(Pars)
// const apiKey = "86eea5a475df44aaa8c47f654c426751";
// const endpoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;

// fetch(endpoint)
//     .then(response => response.json())
//     .then(data => console.log(data.results[2].title))
//     .catch(error => console.error(error));

// const apiKey = "86eea5a475df44aaa8c47f654c426751";
// const endpoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;

// fetch(endpoint)
//     .then(response => response.json())
//     .then(data => console.log(data.results))
//     .catch(error => console.error(error));
// const apiKey = "86eea5a475df44aaa8c47f654c426751";
// const endpoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;

// fetch(endpoint)
//     .then(response => response.json())
//     .then(data => { data.results.forEach(element => { console.log(element.title) }); })
//     .catch(error => console.error(error));

// let SearchTag = document.getElementById("SearchBar");
// let Searchbtn = document.getElementById("SearchButton");
// Searchbtn.addEventListener("click", search);
// function search() {
//     debugger
//     let EnteredValue = SearchTag.value;
//     const apiKey = "86eea5a475df44aaa8c47f654c426751";
// const endpoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${EnteredValue}`;
//     fetch(endpoint)
//         .then(response => response.json())
//         .then(data => { data.results.forEach(element => { console.log(element.title) }); })
//         .catch(error => console.error(error));
// }
// const apiKey = "86eea5a475df44aaa8c47f654c426751";
// const endpoint1 = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;
// const endpoint2 = `https://api.spoonacular.com/recipes/${715446}/ingredientWidget.json?apiKey=${apiKey}`

// fetch(endpoint1)
//     .then(response => response.json())
//     .then(data => localStorage.setItem('datafromapi', JSON.stringify(data)))
//     .catch(error => console.error(error));
// let data = JSON.parse(localStorage.getItem("datafromapi"))
// console.log(data)
let Localdata = JSON.parse(localStorage.getItem("datafromapi"));
if (Localdata) {
    console.log(Localdata)
    let AppendDiv = document.getElementById("RecipeCards")
    Localdata.results.forEach(element => {
        let Cards = document.createElement("div")
        Cards.classList.add("Card");
        Cards.innerHTML = `<h4>${element.title}</h4> <img src="${element.image}" id="apiimg" alt="ApiImage"> <p> ${element.id}</p> <h3> Ingredients </h3>`
        AppendDiv.appendChild(Cards)
        let gainid = JSON.parse(localStorage.getItem(`${element.id}`));
        if (gainid) {
            let Inglist = document.createElement("ul")
            gainid.ingredients.forEach(element => {
                // console.log(element.name)
                // for (let i = 0; i <= element.name.length; i++) {
                //     const word = element.name[i];
                //     const capitalizedword = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
                //     element.name[i] = capitalizedword;
                // }
                const ingitem = document.createElement("li")
                ingitem.innerText = element.name;
                Inglist.appendChild(ingitem)
                Cards.appendChild(Inglist)
                Cards.addEventListener("click", () => {
                    document.getElementById("RecipeCards").style.display = "none";
                    document.getElementById("SearchCards").style.display = "none";
                });
            })
        }
        else {
            const apiKey = "86eea5a475df44aaa8c47f654c426751";
            const endpoint2 = `https://api.spoonacular.com/recipes/${element.id}/ingredientWidget.json?apiKey=${apiKey}`
            fetch(endpoint2)
                .then(response => response.json())
                .then(data => localStorage.setItem(`${element.id}`, JSON.stringify(data)))
                .catch(error => console.error(error));
            let data = JSON.parse(localStorage.getItem(`${element.id}`))
            let Inglist = document.createElement("ul")
            data.ingredients.forEach(element => {
                const ingitem = document.createElement("li")
                ingitem.innerText = element.name;
                Inglist.appendChild(ingitem)
                Cards.appendChild(Inglist)
            })
        }
    });
}
else {
    const apiKey = "86eea5a475df44aaa8c47f654c426751";
    const endpoint1 = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;
    const endpoint2 = `https://api.spoonacular.com/recipes/${715446}/ingredientWidget.json?apiKey=${apiKey}`

    fetch(endpoint1)
        .then(response => response.json())
        .then(data => localStorage.setItem('datafromapi', JSON.stringify(data)))
        .catch(error => console.error(error));
    let data = JSON.parse(localStorage.getItem("datafromapi"))
}

let SearchTag = document.getElementById("SearchBar");
let Searchbtn = document.getElementById("SearchButton");
Searchbtn.addEventListener("click", search);
function search() {
    SearchCards.innerHTML = "";
    RecipeCards.style.display = 'none';
    let EnteredValue = SearchTag.value;
    let Searchdata = JSON.parse(localStorage.getItem(EnteredValue));
    if (Searchdata) {
        console.log(Searchdata)
        let AppendDivv = document.getElementById("SearchCards")
        console.log(Searchdata.results)
        Searchdata.results.forEach(element => {
            let Cards = document.createElement("div")
            Cards.classList.add("Card");
            Cards.innerHTML = `<h4>${element.title}</h4> <img src="${element.image}" id="apiimg" alt="ApiImage"> <p> ${element.id}</p>`
            AppendDivv.appendChild(Cards)
        })
    }
    else {
        const apiKey = "86eea5a475df44aaa8c47f654c426751";
        const endpoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${EnteredValue}`;
        fetch(endpoint)
            .then(response => response.json())
            .then(data => localStorage.setItem(EnteredValue, JSON.stringify(data)))
            .catch(error => console.error(error));
        let makesearchdata = JSON.parse(localStorage.getItem(EnteredValue))
        let AppendDivv = document.getElementById("SearchCards")
        console.log(makesearchdata)
        makesearchdata.results.forEach(element => {
            let Cards = document.createElement("div")
            Cards.classList.add("Card");
            Cards.innerHTML = `<h4>${element.title}</h4> <img src="${element.image}" id="apiimg" alt="ApiImage"> <p> ${element.id}</p>`
            AppendDivv.appendChild(Cards)
        })
    }
}
// function search() {
//     SearchCards.innerHTML = "";
//     RecipeCards.style.display = 'none';
//     let EnteredValue = SearchTag.value;
//     let Searchdata = JSON.parse(localStorage.getItem(EnteredValue));
//     if (Searchdata) {
//         console.log(Searchdata)
//         let AppendDivv = document.getElementById("SearchCards")
//         console.log(Searchdata.results)
//         Searchdata.results.forEach(element => {
//             let Cards = document.createElement("div")
//             Cards.classList.add("Card");
//             Cards.innerHTML = `<h4>${element.title}</h4> <img src="${element.image}" id="apiimg" alt="ApiImage"> <p> ${element.id}</p>`
//             AppendDivv.appendChild(Cards)
//         })
//     }
//     else {
//         const apiKey = "86eea5a475df44aaa8c47f654c426751";
//         const endpoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${EnteredValue}`;
//         fetch(endpoint)
//             .then(response => response.json())
//             .then(data => localStorage.setItem(EnteredValue, JSON.stringify(data)))
//             .catch(error => console.error(error));
//         let makesearchdata = JSON.parse(localStorage.getItem(EnteredValue))
//         let AppendDivv = document.getElementById("SearchCards")
//         console.log(makesearchdata)
//         makesearchdata.results.forEach(element => {
//             let Cards = document.createElement("div")
//             Cards.classList.add("Card");
//             Cards.innerHTML = `<h4>${element.title}</h4> <img src="${element.image}" id="apiimg" alt="ApiImage"> <p> ${element.id}</p>`
//             AppendDivv.appendChild(Cards)
//         })
//     }
// }
// const apiKey = "86eea5a475df44aaa8c47f654c426751";
// EnteredValue = 'Biryani';
// const endpoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${EnteredValue}`;
// fetch(endpoint)
//     .then(response => response.json())
//     .then(data => localStorage.setItem(`${EnteredValue}`, JSON.stringify(data)))
//     .catch(error => console.error(error));
// let data = JSON.parse(localStorage.getItem(`${EnteredValue}`))
// console.log(data)

const apiKey = "86eea5a475df44aaa8c47f654c426751";
EnteredValue = 'Biryani';
const endpoint = `https://api.spoonacular.com/recipes/${716429}/information?apiKey=${apiKey}`;
fetch(endpoint)
    .then(response => response.json())
    .then(data => localStorage.setItem('recipee', JSON.stringify(data)))
    .catch(error => console.error(error));
let R = JSON.parse(localStorage.getItem('recipee'))
console.log(R)

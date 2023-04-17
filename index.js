let c = 10, b;
console.log(c)

// const apiKey = "86eea5a475df44aaa8c47f654c426751";
// const endpoint2 = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`

// fetch(endpoint2)
//     .then(response => response.json())
//     .then(data => localStorage.setItem('aa', JSON.stringify(data)))
//     .catch(error => console.error(error));
// let data = JSON.parse(localStorage.getItem('aa'))
// console.log(data)
// const apiKey = "86eea5a475df44aaa8c47f654c426751";
// const endpoint1 = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;
// const endpoint2 = `https://api.spoonacular.com/recipes/${715446}/ingredientWidget.json?apiKey=${apiKey}`
// debugger
// fetch(endpoint1)
//     .then(response => response.json())
//     .then(data => localStorage.setItem('datadummyy', JSON.stringify(data)))
//     .catch(error => console.error(error));
// let data = JSON.parse(localStorage.getItem("datadummyy"))
// console.log(data)
// s
//     let Inglist = document.createElement("ul")
//     gainid.ingredients.forEach(element => {
//         // console.log(element.name)
//         // for (let i = 0; i <= element.name.length; i++) {
//         //     const word = element.name[i];
//         //     const capitalizedword = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//         //     element.name[i] = capitalizedword;
//         // }
//         const ingitem = document.createElement("li")
//         ingitem.innerText = element.name;
//         Inglist.appendChild(ingitem)
//         Cards.appendChild(Inglist)
//     })
//     Cards.addEventListener("click", up);
// }
// else {
// //     const apiKey = "86eea5a475df44aaa8c47f654c426751";
// //     const endpoint2 = `https://api.spoonacular.com/recipes/${element.id}/ingredientWidget.json?apiKey=${apiKey}`
// //     fetch(endpoint2)
// //         .then(response => response.json())
// //         .then(data => localStorage.setItem(`${element.id}`, JSON.stringify(data)))
// //         .catch(error => console.error(error));
// //     let data = JSON.parse(localStorage.getItem(`${element.id}`))
// //     let Inglist = document.createElement("ul")
// //     data.ingredients.forEach(element => {
// //         const ingitem = document.createElement("li")
// //         //                 ingitem.innerText = element.name;
// //         //                 Inglist.appendChild(ingitem)
// //         //                 Cards.appendChild(Inglist)
// //         //             })
// //         //         }
// //         //     });
// //         // }
// let SearchTag = document.getElementById("SearchBar");
// let Searchbtn = document.getElementById("SearchButton");
// Searchbtn.addEventListener("click", search);
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
//             Cards.innerHTML = `< h4 > ${element.title}</h4> <img src="${element.image}" id="apiimg" alt="ApiImage"> <p> ${element.id}</p>`
//             AppendDivv.appendChild(Cards)
//             let gainid = JSON.parse(localStorage.getItem(`${element.id}`));
//             if (gainid) {
//                 let Inglist = document.createElement("ul")
//                 gainid.ingredients.forEach(element => {
//                     const ingitem = document.createElement("li")
//                     ingitem.innerText = element.name;
//                     Inglist.appendChild(ingitem)
//                     Cards.appendChild(Inglist)
//                 })
//             }
//             else {
//                 const apiKey = "86eea5a475df44aaa8c47f654c426751";
//                 const endpoint2 = `https://api.spoonacular.com/recipes/${element.id}/ingredientWidget.json?apiKey=${apiKey}`
//                 fetch(endpoint2)
//                     .then(response => response.json())
//                     .then(data => localStorage.setItem(`${element.id}`, JSON.stringify(data)))
//                     .catch(error => console.error(error));
//                 let data = JSON.parse(localStorage.getItem(`${element.id}`))
//                 let Inglist = document.createElement("ul")
//                 data.ingredients.forEach(element => {
//                     const ingitem = document.createElement("li")
//                     ingitem.innerText = element.name;
//                     Inglist.appendChild(ingitem)
//                     Cards.appendChild(Inglist)
//                 })
//             }
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
// function up(event) {

//     let element = event.target;
//     console.log(element)
//     document.getElementById("RecipeCards").style.display = "none";
//     document.getElementById("SearchCards").style.display = "none";
// }
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

let Localdata = JSON.parse(localStorage.getItem("datafromallapi"));
if (Localdata) {
    let AppendDiv = document.getElementById("RecipeCards")
    Localdata.recipes.forEach(element => {
        let Cards = document.createElement("div")
        Cards.classList.add("Card");
        Cards.setAttribute("value", `${element.id}`)
        Cards.innerHTML = `<h4>${element.title}</h4> <img src="${element.image}" id="apiimg" alt="ApiImage"> <h3> Ingredients </h3>`
        AppendDiv.appendChild(Cards)
        let Inglist = document.createElement("ul")
        element.extendedIngredients.forEach(element => {
            const ingitem = document.createElement("li")
            ingitem.innerText = element.name;
            Inglist.appendChild(ingitem)
            Cards.appendChild(Inglist)
        })
        let btn = document.createElement("button")
        btn.classList.add("Cards-btn")
        btn.innerText = "Show Full Recipe"
        Cards.appendChild(btn)
        btn.addEventListener("click", up1);
    })
}
//     else {
//         const apiKey = "86eea5a475df44aaa8c47f654c426751";
//         const endpoint2 = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`

//         fetch(endpoint2)
//             .then(response => response.json())
//             .then(data => localStorage.setItem('datafromallapi', JSON.stringify(data)))
//             .catch(error => console.error(error));
//         let data = JSON.parse(localStorage.getItem("datafromallapi"))
//     }
// }
let SearchTag = document.getElementById("SearchBar");
let Searchbtn = document.getElementById("SearchButton");
Searchbtn.addEventListener("click", search);
function search() {
    NewCard.innerHTML = "";
    SearchCards.innerHTML = "";
    RecipeCards.style.display = 'none';
    document.getElementById("SearchCards").style.display = "flex";
    let EnteredValue = SearchTag.value.toLowerCase();
    let SearchData = JSON.parse(localStorage.getItem(EnteredValue))
    if (SearchData) {
        let AppendDivv = document.getElementById("SearchCards")
        console.log(SearchData.results)
        SearchData.results.forEach(element => {
            let Cards = document.createElement("div")
            Cards.classList.add("Card");
            Cards.innerHTML = `<h4>${element.title}</h4> <img src="${element.image}" id="apiimg" alt="ApiImage">  <h3> Ingredients </h3>`
            AppendDivv.appendChild(Cards)
            Cards.setAttribute("value", `${element.id}`)
            let SearchedIngredients = JSON.parse(localStorage.getItem(`${element.id}`))
            if (SearchedIngredients) {
                let Inglist = document.createElement("ul")
                SearchedIngredients.ingredients.forEach(element => {
                    const ingitem = document.createElement("li")
                    ingitem.innerText = element.name;
                    Inglist.appendChild(ingitem)
                    Cards.appendChild(Inglist)

                })
                let btn = document.createElement("button")
                btn.classList.add("Cards-btn")
                btn.innerText = "Show Full Recipe"
                Cards.appendChild(btn)
                btn.addEventListener("click", up);
            }
            else {
                async function getdata() {
                    try {
                        const apiKey = "86eea5a475df44aaa8c47f654c426751";
                        const response = await fetch(`https://api.spoonacular.com/recipes/${element.id}/ingredientWidget.json?apiKey=${apiKey}`)
                        const data = await response.json();
                        localStorage.setItem(`${element.id}`, JSON.stringify(data));
                    }
                    catch (error) {
                        (error => console.error(error))
                    }
                }
                getdata().then(() => {
                    let gData = JSON.parse(localStorage.getItem(`${element.id}`))
                    let Inglist = document.createElement("ul")
                    gData.ingredients.forEach(element => {
                        const ingitem = document.createElement("li")
                        ingitem.innerText = element.name;
                        Inglist.appendChild(ingitem)
                        Cards.appendChild(Inglist)
                    })
                    let btn = document.createElement("button")
                    btn.classList.add("Cards-btn")
                    btn.innerText = "Show Full Recipe"
                    Cards.appendChild(btn)
                    btn.addEventListener("click", up);
                })
            }
        })
    }
    else {
        async function getdata() {
            try {
                const apiKey = "86eea5a475df44aaa8c47f654c426751";
                const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${EnteredValue}`)
                const data = await response.json();
                localStorage.setItem(EnteredValue, JSON.stringify(data));
            }
            catch (error) {
                (error => console.error(error))
            }
        }
        getdata().then(() => {
            let gData = JSON.parse(localStorage.getItem(EnteredValue))
            let AppendDivv = document.getElementById("SearchCards")
            console.log(gData.results)
            gData.results.forEach(element => {
                let Cards = document.createElement("div")
                Cards.classList.add("Card");
                Cards.innerHTML = `<h4>${element.title}</h4> <img src="${element.image}" id="apiimg" alt="ApiImage">  <h3> Ingredients </h3>`
                AppendDivv.appendChild(Cards)
                Cards.setAttribute("value", `${element.id}`)
                let SearchedIngredients = JSON.parse(localStorage.getItem(`${element.id}`))
                if (SearchedIngredients) {
                    let Inglist = document.createElement("ul")
                    SearchedIngredients.ingredients.forEach(element => {
                        const ingitem = document.createElement("li")
                        ingitem.innerText = element.name;
                        Inglist.appendChild(ingitem)
                        Cards.appendChild(Inglist)

                    })
                    let btn = document.createElement("button")
                    btn.classList.add("Cards-btn")
                    btn.innerText = "Show Full Recipe"
                    Cards.appendChild(btn)
                    btn.addEventListener("click", up);
                }
                else {
                    async function getdata() {
                        try {
                            const apiKey = "86eea5a475df44aaa8c47f654c426751";
                            const response = await fetch(`https://api.spoonacular.com/recipes/${element.id}/ingredientWidget.json?apiKey=${apiKey}`)
                            const data = await response.json();
                            localStorage.setItem(`${element.id}`, JSON.stringify(data));
                        }
                        catch (error) {
                            (error => console.error(error))
                        }
                    }
                    getdata().then(() => {
                        let gData = JSON.parse(localStorage.getItem(`${element.id}`))
                        let Inglist = document.createElement("ul")
                        gData.ingredients.forEach(element => {
                            const ingitem = document.createElement("li")
                            ingitem.innerText = element.name;
                            Inglist.appendChild(ingitem)
                            Cards.appendChild(Inglist)
                        })
                        let btn = document.createElement("button")
                        btn.classList.add("Cards-btn")
                        btn.innerText = "Show Full Recipe"
                        Cards.appendChild(btn)
                        btn.addEventListener("click", up);
                    })
                }
            })
        })
    }
    SearchTag.value = "";

}
// function search() {
//     NewCard.innerHTML = "";
//     SearchCards.innerHTML = "";
//     RecipeCards.style.display = 'none';
//     document.getElementById("SearchCards").style.display = "flex";
//     let EnteredValue = SearchTag.value;
//     const apiKey = "86eea5a475df44aaa8c47f654c426751";
//     const endpoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${EnteredValue}`;
//     fetch(endpoint)
//         .then(response => response.json())
//         .then(data => {
//             let AppendDivv = document.getElementById("SearchCards")
//             console.log(data.results)
//             data.results.forEach(element => {
//                 let Cards = document.createElement("div")
//                 Cards.classList.add("Card");
//                 Cards.innerHTML = `<h4>${element.title}</h4> <img src="${element.image}" id="apiimg" alt="ApiImage"> <h3> Ingredients </h3>`
//                 AppendDivv.appendChild(Cards)
//                 Cards.setAttribute("value", `${element.id}`)
//                 let gainid = JSON.parse(localStorage.getItem(`${element.id}`));
//                 const apiKey = "86eea5a475df44aaa8c47f654c426751";
//                 const endpoint2 = `https://api.spoonacular.com/recipes/${element.id}/ingredientWidget.json?apiKey=${apiKey}`
//                 fetch(endpoint2)
//                     .then(response => response.json())
//                     .then(data => {
//                         let Inglist = document.createElement("ul")
//                         data.ingredients.forEach(element => {
//                             const ingitem = document.createElement("li")
//                             ingitem.innerText = element.name;
//                             Inglist.appendChild(ingitem)
//                             Cards.appendChild(Inglist)
//                         })
//                         let btn = document.createElement("button")
//                         btn.classList.add("Cards-btn")
//                         btn.innerText = "Show Full Recipe"
//                         Cards.appendChild(btn)
//                         btn.addEventListener("click", up);
//                     })

//             })
//         })
//         .catch(error => console.error(error));
// }
function up(event) {
    let element = event.target;
    let e = element.parentNode;
    let value = e.getAttribute("value")
    document.getElementById("RecipeCards").style.display = "none";
    document.getElementById("SearchCards").style.display = "none";
    const apiKey = "86eea5a475df44aaa8c47f654c426751";
    const endpoint = `https://api.spoonacular.com/recipes/${value}/information?apiKey=${apiKey}`;
    fetch(endpoint)
        .then(response => response.json())
        .then((data) => {
            let AppendDivNew = document.getElementById("NewCard")
            let New = document.createElement("div")
            New.classList.add("CardNew");
            New.innerHTML = `<h3> Instructions </h3> <p> ${data.instructions} </p> <h3> Summary</h3> <p> ${data.summary} </p> `
            AppendDivNew.appendChild(New)
            let get = document.getElementById("BackButton")
            get.style.display = "flex"
            get.addEventListener("click", () => {
                NewCard.innerHTML = "";
                document.getElementById("SearchCards").style.display = "flex";
                document.getElementById("BackButton").style.display = "none"
            })
        })
        .catch(error => console.log(error));
}

function up1(event) {
    let element = event.target;
    let e = element.parentNode;
    let value = e.getAttribute("value")
    document.getElementById("SearchCards").style.display = "none";
    const apiKey = "86eea5a475df44aaa8c47f654c426751";
    const endpoint = `https://api.spoonacular.com/recipes/${value}/information?apiKey=${apiKey}`;
    fetch(endpoint)
        .then(response => response.json())
        .then((data) => {
            document.getElementById("RecipeCards").style.display = "none";
            let AppendDivNew = document.getElementById("NewCard")
            let New = document.createElement("div")
            New.classList.add("CardNew");
            New.innerHTML = `<h3> Instructions </h3> <p> ${data.instructions} </p> <h3> Summary</h3> <p> ${data.summary} </p>`
            AppendDivNew.appendChild(New)
            let get = document.getElementById("BackButton")
            get.style.display = "flex"
            get.addEventListener("click", () => {
                NewCard.innerHTML = "";
                document.getElementById("RecipeCards").style.display = "flex";
                document.getElementById("BackButton").style.display = "none"

            })
        })
        .catch(error => console.log(error));
}

// const apiKey = "86eea5a475df44aaa8c47f654c426751";
// const endpoint = `https://api.spoonacular.com/recipes/${value}/information?apiKey=${apiKey}`;
// fetch(endpoint)
//     .then(response => response.json())
//     .then(data => localStorage.setItem('testing', JSON.stringify(data)))
//     .catch(error => console.error(error));
// let R = JSON.parse(localStorage.getItem('testing'))
// console.log(R.summary)

// let datas = JSON.parse(localStorage.getItem(795751));
// console.log(datas)
// // else {
//     const apiKey = "c6e31148b8c4b579af0e598201ef47d";
//     const endpoint2 = `https://api.spoonacular.com/recipes/${116175}/ingredientWidget.json?apiKey=${apiKey}`
//     fetch(endpoint2)
//         .then(response => response.json())
//         .then(data => localStorage.setItem(`${636766}`, JSON.stringify(data)))
//         .catch(error => console.error(error));
//     let data = JSON.parse(localStorage.getItem(`${116175}`))
//     console.log(data)
// }
// const apiKey = "86eea5a475df44aaa8c47f654c426751";
// const endpoint2 = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`
// fetch(endpoint2)
//     .then(response => response.json())
//     .then(data => localStorage.setItem(`Dummy`, JSON.stringify(data)))
//     .catch(error => console.error(error));
// let data = JSON.parse(localStorage.getItem(`Dummy`))
// data.recipes.forEach(element => {
//     console.log(element.extendedIngredients)
// })
// console.log(data)

// let EnteredValue = 'Pudding'
// const apiKey = "86eea5a475df44aaa8c47f654c426751";
// const endpoint1 = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;
// const endpoint2 = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&query=${EnteredValue}`

// fetch(endpoint2)
//     .then(response => response.json())
//     .then(data => localStorage.setItem(EnteredValue, JSON.stringify(data)))
//     .catch(error => console.error(error));
// let data = JSON.parse(localStorage.getItem(EnteredValue))
// console.log(data)

// let data = JSON.parse(localStorage.getItem(`datafromallapi`))
// let rr = data.recipes;
// console.log(rr)
// rr.forEach(element => {
//     console.log(element.extendedIngredients.forEach(element => {
//         console.log(element.name)
//     }))
// })

// let EnteredValue = 'Rice'
// const apiKey = "86eea5a475df44aaa8c47f654c426751";
// const endpoint1 = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;
// const endpoint2 = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&query=Pizza&number=10`

// fetch(endpoint2)
//     .then(response => response.json())
//     .then(data => console.log(data))
// fetch(endpoint2)
//     .then(response => response.json())
//     .then(data => { data.results.forEach(element => { console.log(element.title) }); })
//     .catch(error => console.error(error));

// fetch(endpoint2)
//     .then(response => response.json())
//     .then(data => localStorage.setItem(EnteredValue, JSON.stringify(data)))
//     .catch(error => console.error(error));

// let data = JSON.parse(localStorage.getItem(EnteredValue))
// console.log(data)

// let element = 649504
// const apiKey = "86eea5a475df44aaa8c47f654c426751";
// const endpoint2 = `https://api.spoonacular.com/recipes/${element}/ingredientWidget.json?apiKey=${apiKey}`
// fetch(endpoint2)
//     .then(response => response.json())
//     .then(data => localStorage.setItem((`${element}`), JSON.stringify(data)))
//     .catch(error => console.error(error));
// let data = JSON.parse(localStorage.getItem((`${element}`)))
// console.log(data)

// let EnteredValue = 'Rice'
// const apiKey = "86eea5a475df44aaa8c47f654c426751";
// const endpoint2 = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`
// fetch(endpoint2)
//     .then(response => response.json())
//     .then(data => localStorage.setItem(('dummy1'), JSON.stringify(data)))
//     .catch(error => console.error(error));
// let getid = JSON.parse(localStorage.getItem(("dummy1")))
// // console.log(getid)


// setTimeout(() => {
// //     const apiKey = "86eea5a475df44aaa8c47f654c426751";
// //     EnteredValue = 'Biryani';
// //     const endpoint = `https://api.spoonacular.com/recipes/${716429}/information?apiKey=${apiKey}`;
// //     fetch(endpoint)
// //         .then(response => response.json())
// //         .then(data => localStorage.setItem('cc', JSON.stringify(data)))
// //         .catch(error => console.error(error));
// // }, 3000);
// // let R = JSON.parse(localStorage.getItem('cc'))
// // console.log(R.summary)
// const apiKey = "86eea5a475df44aaa8c47f654c426751";
// EnteredValue = 'Biryani';
// const endpoint = `https://api.spoonacular.com/recipes/${716429}/information?apiKey=${apiKey}`;
// fetch(endpoint)
//     .then(response => response.json())
//     .then(data => await(localStorage.setItem('abc', JSON.stringify(data))))
//     .catch(error => console.error(error));
// let R = JSON.parse(localStorage.getItem('abc'))
// console.log(R.summary)
// const apiKey = "86eea5a475df44aaa8c47f654c426751";
// const endpoint = `https://api.spoonacular.com/recipes/${632280}/information?apiKey=${apiKey}`;
// fetch(endpoint)
//     .then(response => response.json())
//     .then((data) => console.log(data))
// async function getdata() {
//     try {
//         const apiKey = "86eea5a475df44aaa8c47f654c426751";
//         const response = await fetch(`https://api.spoonacular.com/recipes/${716429}/information?apiKey=${apiKey}`)
//         const data = await response.json();
//         localStorage.setItem('aaa', JSON.stringify(data));
//     }
//     catch (error) {
//         (error => console.error(error))
//     }
// }

// getdata().then(() => {
//     let getda = JSON.parse(localStorage.getItem('ala1'))
//     console.log(getda.summary)
// })

// async function getdata() {
//     try {
//         let element = 649504
//         const apiKey = "86eea5a475df44aaa8c47f654c426751";
//         const response = await fetch(`https://api.spoonacular.com/recipes/${element}/ingredientWidget.json?apiKey=${apiKey}`)
//         const data = await response.json();
//         localStorage.setItem(`${element}`, JSON.stringify(data));
//     }
//     catch (error) {
//         (error => console.error(error))
//     }
// }
// getdata().then(() => {
//     let element = 649504
//     let getda = JSON.parse(localStorage.getItem(`${element}`))
//     console.log(getda)
// })



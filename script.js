// selecting the elements 

let flag = document.querySelector('#flag');
let countryName = document.querySelector('#countryName');
let Capital = document.querySelector('#Capital');
let Area = document.querySelector('#Area');
let continents = document.querySelector('#continents');
let population = document.querySelector('#population');
let countryCode = document.querySelector('#countryCode');
let map = document.querySelector('#mape');
let serachInp = document.querySelector('#serachInp');
let btn = document.querySelector('#serachBtn');



async function main() {
    // clearing the old values 
    flag.src = "#";
    countryName.innerText = "countryName";
    Capital.innerText = "Capital: ";
    Area.innerText = "Area: ";
    continents.innerText = "Continents: ";
    population.innerText = "Population: ";
    countryCode.innerText = "countryCode: "



    let countryNameUrl = serachInp.value;
    let responce = await fetch(`https://restcountries.com/v3.1/name/${countryNameUrl}?fullText=true`);
    let data = await responce.json();

        // Assigning the new values 
        flag.src = data[0].flags.png;
        countryName.innerText = data[0].name.common;
        Capital.innerText += data[0].capital[0];
        Area.innerText += data[0].area;
        continents.innerText += data[0].continents[0];
        population.innerText += data[0].population;
        map.href = data[0].maps.googleMaps;
        countryCode.innerText += data[0].fifa;


        document.querySelector('.guides').style.display = "block";



    }

    btn.addEventListener('click', main)
    document.addEventListener('keypress', (key) => {
        if (key.key === "Enter") {
            main();
        }
    }
    )




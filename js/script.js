const api = "https://api.spacexdata.com/v4/crew";

const SelectAgency = document.querySelector("#SelectAgency");
const method = document.querySelector("#method");
const button = document.querySelector("#btn");

const cards = document.querySelector(".cards");


// використовуємо XMLHttpRequest
const use_XMLHttpRequest = function() {
    let xhr = new XMLHttpRequest();

    let data = {};

    xhr.open("GET", api, );
    xhr.send();

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.status, xhr);

            data = JSON.parse(xhr.responseText);

            console.log(data);

            DisplayAstronaut.filterData(data);

        } else if (xhr.readyState === 4) {
            console.log(xhr.status);

        }
    })
}

// використовуємо Ajax
const use_Ajax = function () {
    $.ajax({
        type: "GET",
        url: api,
        datatype: "json",
    }).done(function (data) {
        DisplayAstronaut.filterData(data);
    })
}

// використовуємо Fetch
const use_Fetch = function () {
    fetch(api)
        .then((response) => {
            // console.log(response.json()); не знаю чому, але з ним код не працює

            return response.json();
        })

        .then((data) => {
            console.log(data);
            DisplayAstronaut.filterData(data);
        })

        .catch((response) => {
            console.error("Error", response.status);
        })
}

class DisplayAstronaut {
    // фільтруємо вхідні данні
    static filterData(data) {
        // console.log(data);
        let filtered = data.filter((person) => {
            return person.agency === SelectAgency.value;
        })


        console.log(filtered);
        DisplayAstronaut.takeData(filtered);
    }

    // беремо відфільтровані данні для подальших дій
    static takeData(data) {
        data.forEach((person) => {
            let astronaut = {};
            astronaut.name = person.name
            astronaut.agency = person.agency
            astronaut.image = person.image;
            astronaut.wiki = person.wikipedia;
            
            
            DisplayAstronaut.renderCards(astronaut);
        });
    }

    //
    static renderCards(astronaut) {
        cards.innerHTML += `
                            <div class="card">
                                <div class="picture">
                                    <img src="${astronaut.image}" alt="">
                                </div>

                            <div class="info">
                                <span class="name">${astronaut.name}</span>
                                <span class="agency">${astronaut.agency}</span>
                                <a href="${astronaut.wiki}" class="wikiLink" target="_blank">Детальніше</a>
                            </div>
                            `
    }
}


button.addEventListener("click", () => {
    cards.innerHTML = "";
    
    switch (method.value) {
        case "XMLHttpRequest":
            use_XMLHttpRequest();
            break;
        
        case "Ajax":
            use_Ajax();
            break;
        
        case "Fetch":
            use_Fetch();
            break;

        default:
            console.error("Choose method");
            break;
    }
})

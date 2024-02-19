let userName = document.querySelector("#userName");
let userAge = document.querySelector("#userAge");
let cookieAge = document.querySelector("#cookieAge");

let writeCookie = document.querySelector("#writeCookie");

let date = new Date();

writeCookie.addEventListener("click", (e) => {
    console.log(date);
    date.setHours(date.getHours() + (cookieAge.value * 24));
    let lifetime = date;
    console.log(lifetime);
    

    document.cookie = `UserName=${userName.value};Expires=${lifetime}`;
    document.cookie = `UserAge=${userAge.value};Expires=${lifetime}`;
})

let getCookie = function() {
    let cookies = document.cookie.split(";");
    let output = document.querySelector("#output");

    for (let i = 0; i < cookies.length; i++) {
        let part = cookies[i].split("=");

        console.log(`${part[0]}: ${part[1]}`);

        output.innerHTML += `<p>${part[0]}: ${part[1]}</p>`;
    }
}

let showCookie = document.querySelector("#showCookie");

showCookie.addEventListener("click", (e) => {
    let output = document.querySelector("#output");
    output.innerHTML = "";
    getCookie();
})

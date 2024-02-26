class User {
    constructor(contactName, phoneNumber) {
        this.contactName = contactName;
        this.phoneNumber = phoneNumber;

        let dateAdded = new Date();

        let day = dateAdded.getDate();
        let month = dateAdded.getMonth() + 1 < 10 ? "0" + (dateAdded.getMonth() + 1) : dateAdded.getMonth() + 1;
        let year = dateAdded.getFullYear();

        this.date = `${day}.${month}.${year}`;

        this.generatedId = function() {
            return 'id-' + Math.random().toString(36).slice(2, 16);
        }

        this.id = this.generatedId();
    }
}

const button = document.querySelector("#addContact");
let inputName = document.querySelector("#contactName");
let inputPhoneNum = document.querySelector("#phoneNumber");


button.addEventListener("click", () => {
    if (inputName.value != "" && inputPhoneNum.value != "") {
        Storage.addContact();
    } else {
        console.error("ERROR");
    }
})

document.querySelector("#contactRow").addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        Storage.deleteContact(e.target.parentElement.parentElement.classList.value);
        console.log(e.target.parentElement.parentElement.classList[0]);

        UI.deleteRow(e.target.parentElement.parentElement.classList.value);
    }
})

class Storage {
    static addContact() {
        let contact = new User(inputName.value, inputPhoneNum.value);
        console.log(contact);

        let arr = Storage.readContacts();
        console.log(arr);
        
        arr.push(contact);
        console.log(arr);

        localStorage.setItem("contact", JSON.stringify(arr));

        UI.displayContact(contact);

        return contact;
    }

    static readContacts() {
        let list = [];
        let storage = localStorage.getItem("contact");

        if (storage !== null) {
            list = JSON.parse(storage);
        }
        console.log(typeof list);

        return list;
    }

    static deleteContact(contactId) {
        let list = Storage.readContacts();
        list.forEach((contact, i) => {
            console.log(contact.id);
            if (contact.id === contactId) {
                list.splice(i, 1);
            }

            localStorage.setItem("contact", JSON.stringify(list));
        })
    }
}

class UI {
    static displayContact() {
        let list = Storage.readContacts();
        document.querySelector("#contactRow").innerHTML = "";

        list.forEach((contact) => {
            UI.addToTable(contact);
        })

    }

    static addToTable(contact) {
        const row = document.querySelector("#contactRow");

        row.innerHTML += `<tr class="${contact.id}">
                                <td>${contact.contactName}</td>
                                <td>${contact.phoneNumber}</td>
                                <td>${contact.date}</td>
                                <td>
                                    <button type="button" class="delete rounded-4 btn btn-danger p-1 d-flex justify-content-center align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                        </svg>
                                    </button>
                                </td>
                            </tr>`;
    }

    static deleteRow(elemId) {
        console.log(elemId);
        document.querySelector(`.${elemId}`).remove();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    UI.displayContact();
})

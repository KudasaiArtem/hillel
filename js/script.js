class User {
    constructor(userName, phoneNumber, dateId) {
        this.userName = userName;
        this.phoneNum = phoneNumber;
        this.dateId = dateId;
    }
}

const button = document.querySelector("#addContact");
let inputName = document.querySelector("#userName");
let inputPhoneNum = document.querySelector("#phoneNumber");


button.addEventListener("click", (e) => {
    let user = new User(inputName.value, inputPhoneNum.value);
    console.log(user);

    const createRow = document.querySelector("#contactRow");

    createRow.innerHTML += `<tr>
                                <td>${user.userName}</td>
                                <td>${user.phoneNum}</td>
                                <td>${user.dateId}</td>
                                <td>
                                    <button type="button" class="rounded-4 btn btn-danger p-1 d-flex justify-content-center align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                        </svg>
                                    </button>
                                </td>
                            </tr>`;

})

class Storage {
    
}

class UI {

}

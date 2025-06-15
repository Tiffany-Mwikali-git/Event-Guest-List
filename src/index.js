const guestList = []

function addGuest() {
    if (guestList.length == 10) {
        window.alert ('the list is full')
        return;
    }
    const guestInput = document.getElementById("guestInput");
    const guestName = guestInput.value.trim();

    if (guestName) {
        guestList.push(guestName);
        guestInput.value = " "; //if user enters an empty 
        displayGuest();
    }  
}

function displayGuest() {
    const guestListElement = document.getElementById("guestList");
    guestListElement.innerHTML = " ";

    guestList.forEach((guest, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = guest;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => removeGuest(index);

        listItem.appendChild(removeBtn);
        guestListElement.appendChild(listItem);
    })
}

function removeGuest(index) {
    guestList.splice(index , 1);
    displayGuest();
    console.log(guestList)
}

let Attending = false;

function toggleRSVP() {
    Attending = Attending;
    console.log(`RSVP status: ${Attending  "Attending" : "Not Attending" }`);
}
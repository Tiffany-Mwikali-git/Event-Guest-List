const guestList = []


function addGuest() {
    //making sure the guests dont exceed 10 guests
    if (guestList.length == 10) {
        window.alert ('the list is full')
        return;
    }
    const guestInput = document.getElementById("guestInput");
    const guestName = guestInput.value.trim();

    if (guestName) {
        guestList.push(guestName); //adding a guest using the push method
        guestInput.value = " "; 
        displayGuest();
    }  
}

function displayGuest() {
    const guestListElement = document.getElementById("guestList");
    guestListElement.innerHTML = " "; 

    guestList.forEach((guest, index) => {
        const listItem = document.createElement("li"); //creating a new element called "li"
        listItem.textContent = guest;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => removeGuest(index);

        listItem.appendChild(removeBtn); //creating a remove button for each guest
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
    console.log(`RSVP status: ${Attending}  "Attending" : "Not Attending" `);
}
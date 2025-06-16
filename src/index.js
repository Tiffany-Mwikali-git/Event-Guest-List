const guestList = []
const guestListRSVP = []


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
        guestListRSVP.push(true)
        guestInput.value = " "; 
        displayGuest();
    }  
}

function displayGuest() {
    const guestListElement = document.getElementById("guestList");
    guestListElement.innerHTML = " "; 

    guestList.forEach((guest, index) => {
        const listItem = document.createElement("li"); //creating a new element called "li"
        const listItemRSVP = document.createElement("li")
        listItem.textContent = guest;
        if (guestListRSVP[index]) {
            listItemRSVP.textContent = 'Attending'
            
        } else {
            listItemRSVP.textContent = "Not Attending"
        }

        const removeBtn = document.createElement("button"); 
        removeBtn.textContent = "Remove"; 
        removeBtn.onclick = () => removeGuest(index);
        
        const toggleRSVPBtn = document.createElement("button");
        toggleRSVPBtn.textContent = "toggleRSVP";
        toggleRSVPBtn.onclick = () => toggleAttending(index)
        


        guestListElement.appendChild(listItem);
        guestListElement.appendChild(listItemRSVP)
        listItem.appendChild(removeBtn); //adding each guest to the remove bottom
        listItem.appendChild(toggleRSVPBtn) //adding each guest to the toggleRSVP button
    })
}
 
// making a function for the removeGuest
function removeGuest(index) {
    guestList.splice(index , 1);
    guestListRSVP.splice(index , 1); 
    displayGuest();


    console.log(guestList)
}

function toggleAttending(index) {
    guestListRSVP[index] = ! guestListRSVP[index]  //making sure each added guest has the toggleAttending and viceveser feature
    displayGuest();
}



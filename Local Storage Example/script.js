/* Setting Up */

// Add some initial data to the local storage
let people = [
    {firstName: "Elim", lastName:"Garak", occupation: "Tailor"},
    {firstName: "Julian", lastName:"Bashir", occupation: "Doctor"},
    {firstName: "Rupert", lastName:"Giles", occupation: "Librarian"}
];

window.localStorage.setItem('people', JSON.stringify(people));

redisplay(); // defined below. Calling now to display initial data.


/* Functions */

/* Add a new person to the list, and refresh the data displayed on screen */
function addPerson(){
    // Construct person object from form input.
    var firstNameInput = document.getElementById("firstName").value;
    var lastNameInput = document.getElementById("lastName").value;
    var occupationInput = document.getElementById("occupation").value;
    var newPerson = {firstName: firstNameInput, lastName: lastNameInput, occupation: occupationInput};

    // Get the array from local storage.
    var storedPeople = JSON.parse(window.localStorage.getItem("people"));

    // Then add the new person to the array.
    storedPeople.push(newPerson);

    // Add the array back to local storage.
    window.localStorage.setItem('people', JSON.stringify(storedPeople));

    // And finally, redisplay the data.
    redisplay();
}

/* Redisplay data from local storage (i.e refresh it) */
function redisplay(){
    // First, get the list element from the HTML.
    const peopleList = document.getElementById("peopleList");

    // Clear the list to make way for new data.
    peopleList.innerHTML = "";

    // Get the array from local storage
    let storedPeople = JSON.parse(window.localStorage.getItem("people"));

    // Loop through each person and add it to the list element.
    for(var i = 0; i < storedPeople.length; i++){
        var currentPerson = storedPeople[i];

        // The ${} notation is a template string. Basically just string concatenation with variables, but a bit nicer. 
        peopleList.innerHTML += `<li>First Name: ${currentPerson.firstName}, Last Name: ${currentPerson.lastName}, Occupation: ${currentPerson.occupation}</li>`
    }
}


/* Event listeners */

// This prevents the form from doing it's default action (it posts to nowhere or something).
document.getElementById("personForm").addEventListener("click", function(e){
    e.preventDefault();
})

// Get the submit button to call addPerson.
var submit = document.getElementById("submit");
submit.addEventListener("click", addPerson);
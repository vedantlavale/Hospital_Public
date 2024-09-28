

// Get the input fields and profile card elements
const inputName = document.getElementById('input-name');
const inputContact = document.getElementById('input-contact');
const profileName = document.getElementById('profile-name');
const profileContact = document.getElementById('profile-contact');
const updateButton = document.getElementById('update-btn');
const mediid = document.getElementById("medi_id");
const mediid1 = document.querySelector("#medi_id1");
const submitButton = document.getElementById('submit-btn');
const department = document.getElementById('dept');
const bedtype = document.getElementById('bedtype');
const dateselect = document.getElementById('dateselect');
const generalbeds = document.getElementById('generalbeds');
const emergencybeds = document.getElementById('emergencybeds');



makereq = () => {
    alert("Request has been made");
}

const generateran = () => {
    const medinumber = Math.floor((Math.random())*10000000000);
    localStorage.setItem("random_number", medinumber);
}

const deptchange = () => {
        localStorage.setItem("Department", department.value);
    }
    
    
    const bedtypechange = () => {
        localStorage.setItem("Bedtype", bedtype.value);
    }
    
    
    const datechange = () => {
        localStorage.setItem("Date", dateselect.value); 
    }


if(mediid != null){
    mediid.innerHTML = localStorage.getItem("random_number");
}
else {
    mediid1.innerHTML = localStorage.getItem("random_number");
}
// mediid1.innerHTML = medinumber;
// mediid.innerHTML = medinumber;

if(localStorage.getItem("name") != null && localStorage.getItem("contact") != null){
        profileName.textContent = localStorage.getItem("name");
        profileContact.textContent = localStorage.getItem("contact");
     }

// Add event listener to the button
updateButton.addEventListener('click', () => {
    // Get the values from the form inputs
    
    const newName = inputName.value;
    const newContact = inputContact.value;

    // Update the profile card
    if (newName) {
        localStorage.setItem("name", newName);
        profileName.textContent = localStorage.getItem("name");
    }

    if (newContact) {
        localStorage.setItem("contact", newContact)
        profileContact.textContent = localStorage.getItem("contact");
    }
});


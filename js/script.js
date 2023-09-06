// script.js

console.log("Script started"); // Debugging: Script start

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

console.log("Tablinks and Tabcontents:", tablinks, tabcontents); // Debugging: Check if tablinks and tabcontents are found

function opentab(event, tabname) {
    console.log("opentab function called with tabname:", tabname); // Debugging: opentab function call
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    Array.from(tabcontents).forEach((tabcontent) => {
        tabcontent.classList.remove("active-tab");
    });
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add('active-tab');
}

function openmenu() {
    console.log("openmenu function called"); // Debugging: openmenu function call
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "0";
}

function closemenu() {
    console.log("closemenu function called"); // Debugging: closemenu function call
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-200px";
}

// Custom Modal Function
function displayCustomModal(message) {
    const modal = document.createElement('div');
    modal.className = 'custom-modal';
    modal.innerHTML = `<div class="modal-content"><span class="close-button">&times;</span><p>${message}</p></div>`;
    document.body.appendChild(modal);

    modal.querySelector('.close-button').addEventListener('click', function() {
        modal.remove();
    });

    setTimeout(function() {
        modal.remove();
        window.location.href = 'index.html';
    }, 5000);
}

// EmailJS Initialization
(function(){
    emailjs.init("C_1ovVKS4xIsyq0yV");
    console.log("EmailJS initialized"); // Debugging: EmailJS Initialization
})();

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed"); // Debugging: DOMContentLoaded

    // Load the header using fetch
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            console.log("Header loaded"); // Debugging: Header loaded
        })
        .catch(error => {
            console.error('Error fetching the header content:', error);
        });

    // Load the copyright using fetch
    fetch('copyright.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('copyright-content').innerHTML = data;
            console.log("Copyright loaded"); // Debugging: Copyright loaded
        })
        .catch(error => {
            console.error('Error fetching the copyright content:', error);
        });

    // Load the contact me using fetch
    fetch('contact_me.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contact-me').innerHTML = data;
            console.log("Contact Me loaded"); // Debugging: Contact Me loaded

            const form = document.getElementById('contact-form');
            const submitButton = form.querySelector('button[type="submit"]');

            console.log("Form element:", form); // Debugging: Check if form is found

    if (form) {
        console.log("Form element found");

        form.addEventListener('submit', function(event) {
            console.log("Form submit event triggered"); // Debugging: Form submit event
            event.preventDefault();

            // Disable the submit button to prevent multiple submissions
            submitButton.disabled = true;

            const templateParams = {
                name: form.name.value,
                email: form.email.value,
                message: form.message.value
            };
            console.log("Template Parameters:", templateParams); // Debugging: Template Parameters

            emailjs.send('service_7unekk1', 'template_u4rubzs', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);

                    // Display custom modal
                    displayCustomModal('Yay, your message was sent!');
                }, function(error) {
                    console.log('FAILED...', error);
                    displayCustomModal('There was some issue, sorry, please try again.');

                    // Re-enable the submit button
                    submitButton.disabled = false;
                });
        });
    } else {
        console.log("Form element not found");
    }
    });
});

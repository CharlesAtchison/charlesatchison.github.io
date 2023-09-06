// script.js

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
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
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "0";
}

function closemenu() {
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-200px";
}

// Debugging Step 4: EmailJS Initialization
(function(){
    emailjs.init("C_1ovVKS4xIsyq0yV");
    console.log('EmailJS initialized'); // Debugging Step 7: Manual Testing
 })();

document.addEventListener('DOMContentLoaded', function() {
    // ...existing code for loading header, copyright, and contact_me...

    // Debugging Step 2: Form Element
    const form = document.getElementById('contact-form');
    
    if (form) { // Check if the form exists on the page
        console.log('Form element found'); // Debugging Step 7: Manual Testing

        // Debugging Step 5: Event Listener
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('Form submitted'); // Debugging Step 7: Manual Testing

            // Create an object to hold the form data
            const templateParams = {
                name: form.name.value,
                email: form.email.value,
                message: form.message.value
            };
            
            // Debugging Step 8: Template ID
            // Use emailjs.send() method
            emailjs.send('service_7unekk1', 'template_u4rubzs', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    // Display success message
                    alert('Yay, your message was sent!');
                    
                    // Refresh the page after 5 seconds
                    setTimeout(function() {
                        location.reload();
                    }, 5000);
                    
                }, function(error) {
                    console.log('FAILED...', error);
                    
                    // Display failure message
                    alert('There was some issue, sorry, please try again.');
                });
        });
    } else {
        console.log('Form element not found'); // Debugging Step 7: Manual Testing
    }
});
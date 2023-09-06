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

(function(){
    emailjs.init("C_1ovVKS4xIsyq0yV");
 })();

document.addEventListener('DOMContentLoaded', function() {
    // Load the header using fetch
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;

            // Initialize your scripts that rely on the header here
            var projectsMenuItem = document.querySelector("#sidemenu li:nth-child(4)");

            projectsMenuItem.addEventListener("mouseenter", function () {
                projectsMenuItem.classList.add("hover");
            });

            projectsMenuItem.addEventListener("mouseleave", function () {
                projectsMenuItem.classList.remove("hover");
            });
        })
        .catch(error => {
            console.error('Error fetching the header content:', error);
        });
    
    // Load the copyright using fetch
    fetch('copyright.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('copyright-content').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching the copyright content:', error);
        });
    // Load the contact me using fetch
    fetch('contact_me.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contact-me').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching the Contact Me content:', error);
        });

    const form = document.getElementById('contact-form');
    
    if (form) { // Check if the form exists on the page
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Create an object to hold the form data
            const templateParams = {
                name: form.name.value,
                email: form.email.value,
                message: form.message.value
            };
            
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
    }
});
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

// EmailJS Initialization
(function(){
    emailjs.init("C_1ovVKS4xIsyq0yV");
    console.log("EmailJS initialized"); // Debugging: EmailJS Initialization
})();

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed"); // Debugging: DOMContentLoaded

    const form = document.getElementById('contact-form');
    console.log("Form element:", form); // Debugging: Check if form is found
    
    if (form) {
        console.log("Form element found");

        form.addEventListener('submit', function(event) {
            console.log("Form submit event triggered"); // Debugging: Form submit event
            event.preventDefault();

            const templateParams = {
                name: form.name.value,
                email: form.email.value,
                message: form.message.value
            };
            console.log("Template Parameters:", templateParams); // Debugging: Template Parameters

            emailjs.send('service_7unekk1', 'template_u4rubzs', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Yay, your message was sent!');
                    setTimeout(function() {
                        location.reload();
                    }, 5000);
                }, function(error) {
                    console.log('FAILED...', error);
                    alert('There was some issue, sorry, please try again.');
                });
        });
    } else {
        console.log("Form element not found");
    }
});

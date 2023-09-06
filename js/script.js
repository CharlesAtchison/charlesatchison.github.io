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
});

(function (w, d, s, o, f, js, fjs) {
    w["botsonic_widget"] = o;
    w[o] = w[o] || function () {
        (w[o].q = w[o].q || []).push(arguments);
    };
    js = d.createElement(s);
    fjs = d.getElementsByTagName(s)[0];
    js.id = o;
    js.src = f;
    js.async = 1;
    fjs.parentNode.insertBefore(js, fjs);
})(window, document, "script", "Botsonic", "https://d1m9uqhmlogh4h.cloudfront.net/CDN/botsonic.min.js");

Botsonic("init", {
    serviceBaseUrl: "https://api.writesonic.com",
    token: "9fed897a-7f4c-46f0-a77f-10789e28fa5b",
});

(function(){
    emailjs.init("C_1ovVKS4xIsyq0yV");
 })();

 document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Create an object to hold the form data
      const templateParams = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      };
      
      // Use emailjs.send() method
      emailjs.send('service_7unekk1', 'template_u4rubzs', templateParams) // Replace 'your_template_id' with your actual template ID
        .then(function() {
          console.log('Email successfully sent!');
        }, function(error) {
          console.log('Error sending email:', error);
        });
    });
  });
  
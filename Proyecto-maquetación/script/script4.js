// script.js
$(document).ready(function() {
    $("button[type='submit']").click(function(event) {
        event.preventDefault();
        alert("Gracias por tu mensaje! Nos pondremos en contacto pronto.");
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // You can perform additional validation here

    // Replace the placeholder with your server-side endpoint for processing the form
    var endpoint = "https://example.com/submit-form";

    var data = {
        name: name,
        email: email,
        message: message
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", endpoint, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            var responseElement = document.getElementById("response");
            responseElement.innerHTML = xhr.responseText;
            // You can also perform additional actions based on the response
        }
    };

    xhr.send(JSON.stringify(data));
});

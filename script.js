document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
        document.getElementById("confirmation").textContent = "Thank you, " + name + "! Your message has been sent.";
        this.reset();
    } else {
        document.getElementById("confirmation").textContent = "Please fill in all fields.";
    }
});
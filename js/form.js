document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("eV2FBMibkYmd0T1Ef"); // Replace with your EmailJS Public Key

    const contactForm = document.querySelector("form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        emailjs.sendForm("service_73pll3z","template_ny7efq7", contactForm)
            .then(function () {
                alert("Message sent successfully!");
            }, function (error) {
                console.error("Failed to send message:", error);
                alert("Failed to send message. Please try again.");
            });
    });
});

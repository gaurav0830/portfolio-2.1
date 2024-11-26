 // Initialize EmailJS
    //emailjs.init("ykLQCYLinaoYKBlVu"); // Replace with your EmailJS User ID
  
    // Visitor tracking
    let visitHistory = JSON.parse(localStorage.getItem('visitHistory')) || [];
    const currentVisit = new Date().toISOString();
  
    // Add the current visit to the history
    visitHistory.push(currentVisit);
    localStorage.setItem('visitHistory', JSON.stringify(visitHistory));
  
    // Update the page content
    document.getElementById('status').textContent = "Thank you for visiting!";
    document.getElementById('visitCount').textContent = `Total visits: ${visitHistory.length}`;
  
    // Function to send visit count via email
    function sendEmail() {
      const emailParams = {
        to_name: "Admin", // Replace with recipient's name
        message: `A user has visited your page. Total visits: ${visitHistory.length}`,
        user_email: "gaurav654413@gmail.com" // Replace with recipient's email address
      };
  
      emailjs.send("service_73pll3z", "template_66pq25w", emailParams)
        .then(response => console.log("Email sent successfully!", response.status, response.text))
        .catch(error => console.error("Failed to send email:", error.status, error.text));
    }
  
    // Send email on every visit
    sendEmail();
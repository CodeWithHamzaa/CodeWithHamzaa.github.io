// JavaScript code to handle form submission and sending emails
function send_email(event) {
    event.preventDefault(); // Prevent default form submission

    // Display loading message
    document.querySelector('.loading').style.display = 'block';
    document.querySelector('.sent-message').style.display = 'none'; // Hide success message
    document.querySelector('.error-message').style.display = 'none'; // Hide error message
    
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        user_contact: document.getElementById('user_contact').value,
        message: document.getElementById('message').value,
    };

    console.log("form data:", params);

    emailjs.send("service_y47vlzj", "template_rz6ze46", params)
        .then(function(response) {
            console.log('Email sent successfully:', response);
            document.getElementById('myForm').reset(); // Reset form fields
            document.querySelector('.sent-message').style.display = 'block'; // Show success message
            document.querySelector('.loading').style.display = 'none'; // Hide loading message
        })
        .catch(function(error) {
            console.error('Error sending email:', error);
            document.querySelector('.error-message').innerText = 'An error occurred. Please try again later.'; // Show error message
            document.querySelector('.loading').style.display = 'none'; // Hide loading message
        });
}

// Add an event listener to the form
document.getElementById('myForm').addEventListener('submit', send_email);



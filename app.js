// Define variables for form and form inputs
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const messageInput = document.querySelector('#message');

// Define variable for contact info container
const contactInfo = document.querySelector('.contact-info-container');

// Define function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // Collect form data
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const message = messageInput.value;

  // Send form data to server (example using fetch API)
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify({
      name,
      email,
      phone,
      message
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Display success message to user
    alert('Message sent successfully!');
  })
  .catch(error => {
    console.error(error);
    // Display error message to user
    alert('Error sending message. Please try again later.');
  });
}

// Add event listener to form for form submission
form.addEventListener('submit', handleSubmit);

// Define function to display contact information
function showContactInfo() {
  contactInfo.style.display = 'block';
}

// Add event listener to contact information container for display
contactInfo.addEventListener('click', showContactInfo);

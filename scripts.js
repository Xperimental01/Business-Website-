// Example JavaScript for form validation
document.querySelector("form").addEventListener("submit", function(e) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (!name || !email || !message) {
      e.preventDefault();
      alert("All fields must be filled out!");
    } else {
      alert("Form submitted successfully!");
    }
  });
  

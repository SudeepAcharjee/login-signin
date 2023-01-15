function signin() {
    // Get the input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    
    // Check if the input values are valid
    if(password === confirm_password) {
      // Send the form data to the server to be saved in the database
      // Redirect to the home page
      window.location.href = "login.html";
    } else {
      alert("Passwords do not match");
    }
  }
  
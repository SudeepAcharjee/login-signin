function login() {
    // Get the input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Check if the input values are valid
    if(username === "admin" && password === "password") {
      // Redirect to the home page
      window.location.href = "https://thrift-flip-store.netlify.app/";
    } else {
      alert("Invalid username or password");
    }
  }
  
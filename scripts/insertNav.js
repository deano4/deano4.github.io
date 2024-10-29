// Function to load the navbar and footer content
function loadNav() {
    // Fetch and insert the navbar HTML
    fetch("components/navBar.html")
      .then(response => response.text())
      .then(html => {
        document.getElementById("navbar-placeholder").innerHTML = html;
      })
      .catch(error => {
        console.error("Error loading navbar:", error);
      });
  }
  
  // Call the function when the page loads
  window.onload = function() {
    loadNav();
  };
  
  
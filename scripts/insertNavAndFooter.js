// Function to load the navbar and footer content
function loadNavAndFooter() {
    // Fetch and insert the navbar HTML
    fetch("/components/navbar.html")
      .then(response => response.text())
      .then(html => {
        document.getElementById("navbar-placeholder").innerHTML = html;
      })
      .catch(error => {
        console.error("Error loading navbar:", error);
      });
  
    // Fetch and insert the footer HTML
    fetch("footer.html")
      .then(response => response.text())
      .then(html => {
        document.getElementById("footer-placeholder").innerHTML = html;
      })
      .catch(error => {
        console.error("Error loading footer:", error);
      });
  }
  
  // Call the function when the page loads
  window.onload = function() {
    loadNavAndFooter();
  };
  
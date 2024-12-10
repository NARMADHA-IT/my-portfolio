
function showMessageBox() {
    const button = document.querySelector(".say-hello-btn");
    const messageBox = document.getElementById("message-box");
    
    // Position the message box near the button
    const rect = button.getBoundingClientRect();
    messageBox.style.left = `${rect.left + window.scrollX}px`;
    messageBox.style.top = `${rect.bottom + window.scrollY - 80}px`; // Move it 50px up
    
    messageBox.classList.remove("hidden");
  }
  
  function closeMessageBox() {
    const messageBox = document.getElementById("message-box");
    messageBox.classList.add("hidden");
  }
  document.getElementById("scrollButton").addEventListener("click", function() {
    document.getElementById("targetSection").scrollIntoView({
      behavior: "smooth"
    });
  });

  document.getElementById("scrollToSection").addEventListener("click", function () {
    document.getElementById("targetSection").scrollIntoView({
      behavior: "smooth"
    });
  });

  
  function toggleDropdown(id) {
    var dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(function(dropdown) {
      // Hide all dropdowns
      if (dropdown.id !== id) {
        dropdown.style.display = 'none';
      }
    });
  
    var selectedDropdown = document.getElementById(id);
    
    // Toggle the selected dropdown
    if (selectedDropdown.style.display === 'none' || selectedDropdown.style.display === '') {
      selectedDropdown.style.display = 'block';
    } else {
      selectedDropdown.style.display = 'none';
    }
  }
  
  function closeDropdown(id) {
    var selectedDropdown = document.getElementById(id);
    selectedDropdown.style.display = 'none';
  }
  

  

  function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  }

  function toggleDropdown(id) {
    // Get all dropdown elements
    const dropdowns = document.querySelectorAll(".dropdown-content");
    
    // Close all dropdowns
    dropdowns.forEach((dropdown) => {
      if (dropdown.id !== id) {
        dropdown.style.display = "none";
      }
    });
  
    // Toggle the current dropdown
    const currentDropdown = document.getElementById(id);
    if (currentDropdown.style.display === "block") {
      currentDropdown.style.display = "none";
    } else {
      currentDropdown.style.display = "block";
    }
  }
  
  
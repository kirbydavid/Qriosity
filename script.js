
        document.getElementById('Profile').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const dropdown = this.parentElement;
            dropdown.classList.toggle('show');
            document.getElementById('overlay').classList.toggle('active'); // Toggle overlay visibility
        });
    
        // Close the dropdown and overlay if clicked outside
        window.addEventListener('click', function(event) {
            if (!event.target.matches('#Profile') && !event.target.closest('.dropdown-content')) {
                const dropdowns = document.getElementsByClassName('dropdown');
                for (let i = 0; i < dropdowns.length; i++) {
                    const openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
                document.getElementById('overlay').classList.remove('active'); // Hide overlay
            }
        });
  

         // SignIn&SignUpBtn
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
         const popupContainer = document.getElementById('popupContainer');

        signUpButton.addEventListener('click', () => {
        popupContainer.classList.add("right-panel-active");
         });

        signInButton.addEventListener('click', () => {
        popupContainer.classList.remove("right-panel-active");
         });

         document.getElementById('signIn').addEventListener('click', function() {
            changeCloseButtonColor('dark');
         });
         
         document.getElementById('signUp').addEventListener('click', function() {
            changeCloseButtonColor('light');
         });
         
         function changeCloseButtonColor(theme) {
            const closeBtn = document.getElementById('closeBtn');
            if (theme === 'dark') {
                closeBtn.style.color = '#ffffff'; // White for dark background
            } else {
                closeBtn.style.color = '#000000'; // Black for light background
            }
         }
         
         document.getElementById("Generate").addEventListener("click", function() {
            window.location.href = "../Products/Product.html"; // Replace with the actual path
          });
          
        
         // Initial color setup
         changeCloseButtonColor('dark'); // or 'light'
         

        // Trigger pop-up when "Log in" is clicked
        document.getElementById('Login').addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('popupContainer').classList.add('active');
            document.getElementById('overlay').classList.add('active');
        });

        // Close pop-up when close button or overlay is clicked
        document.getElementById('closeBtn').addEventListener('click', function() {
            document.getElementById('popupContainer').classList.remove('active');
            document.getElementById('overlay').classList.remove('active');
        });

        document.getElementById('overlay').addEventListener('click', function() {
            document.getElementById('popupContainer').classList.remove('active');
            document.getElementById('overlay').classList.remove('active');
        });

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

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

// CloseBTN
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

// Initial color setup
changeCloseButtonColor('dark'); // or 'light'

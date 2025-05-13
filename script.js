// Add interactivity here if needed
console.log("Welcome to PROMOTERS!");

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = 80; // Adjust this value to match your header height
            const elementPosition = targetElement.offsetTop;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Set the current year in the footer
const yearElement = document.getElementById('current-year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Select the "Hire Us" button and the popup
const hireUsButton = document.querySelector('.hire-us-btn');
const thankYouPopup = document.getElementById('thank-you-popup');
const closeBtn = document.querySelector('.close-btn');

// Add a click event listener to the button
hireUsButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior

    // Show the popup
    thankYouPopup.classList.remove('hidden');
    thankYouPopup.classList.add('visible');

    // Automatically hide the popup after 12 seconds
    setTimeout(() => {
        thankYouPopup.classList.remove('visible');
        thankYouPopup.classList.add('hidden');
    }, 60000);
});

// Manually close the popup when the close button is clicked
closeBtn.addEventListener('click', () => {
    thankYouPopup.classList.remove('visible');
    thankYouPopup.classList.add('hidden');
});

// // Close the popup when clicking anywhere in the screen
// window.addEventListener('click', (event) => {
//     if (thankYouPopup.classList.contains('visible') && !thankYouPopup.contains(event.target) && event.target !== hireUsButton) {
//         thankYouPopup.classList.remove('visible');
//         thankYouPopup.classList.add('hidden');
//     }
// });
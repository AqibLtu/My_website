document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function (event) {
        const emailInput = document.getElementById('email');
        
        if (!isValidEmail(emailInput.value)) {
            event.preventDefault(); // Prevent form submission
            alert('Please enter a valid email address.');
        }
    });

    function isValidEmail(email) {
        // Simple email validation, you may need a more sophisticated check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
function showContactAlert() {
    alert("This is the contact page!");
}


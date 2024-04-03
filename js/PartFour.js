document.addEventListener("DOMContentLoaded", function() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    document.getElementById("date").focus();

    const form = document.getElementById("reservationRequest");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        document.querySelectorAll(".error").forEach(function(error) {
            error.textContent = '';
            error.style.color = '';
        });
         
        const email = document.getElementById("email").value.trim();
        const nights = document.getElementById("nights").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const name = document.getElementById("name").value.trim();
        const date = document.getElementById("date").value.trim();


        let isValid = true;
        
        if (!emailPattern.test(email) || email === '') {
            document.getElementById("emailError").textContent = 'Must be a valid email address';
            document.getElementById("emailError").style.color = 'red';
            isValid = false;
        }

        if (isNaN(nights) || nights === '') {
            document.getElementById("nightsError").textContent = 'Must be numeric';
            document.getElementById("nightsError").style.color = 'red';
            isValid = false;
        }

        if (phone === '') {
            document.getElementById("phoneError").textContent = 'This field is required';
            document.getElementById("phoneError").style.color = 'red';
            isValid = false;
        }

        if (name === '') {
            document.getElementById("nameError").textContent = 'This field is required';
            document.getElementById("nameError").style.color = 'red';
            isValid = false;
        }

        if (date === '') {
            document.getElementById("dateError").textContent = 'This field is required';
            document.getElementById("dateError").style.color = 'red';
            isValid = false;
        }

        if (isValid) {
            document.getElementById("date").focus();
            form.reset();
        }
    });
});
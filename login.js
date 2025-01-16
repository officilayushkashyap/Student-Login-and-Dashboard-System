document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const errorMessage = document.getElementById('errorMessage');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const course = document.getElementById('course').value;
        const rollNo = document.getElementById('rollNo').value.trim();
        const mobile = document.getElementById('mobile').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Basic validation
        if (name === '' || course === '' || rollNo === '' || mobile === '' || email === '' || password === '') {
            showError('All fields are required.');
            return;
        }

        if (!/^\d{10}$/.test(mobile)) {
            showError('Mobile number must be a 10-digit number.');
            return;
        }

        if (!validateEmail(email)) {
            showError('Please enter a valid email address.');
            return;
        }

        // If all validations pass, you can proceed with form submission (e.g., send data to the server)
        // For demonstration, we'll just show a success message
        showError('');
        alert('Form submitted successfully!');
    });

    function showError(message) {
        if (message === '') {
            errorMessage.style.display = 'none';
        } else {
            errorMessage.style.display = 'block';
            errorMessage.textContent = message;
        }
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');

    forgotPasswordForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value.trim();
        const mobile = document.getElementById('Mobile').value.trim();

        if (email === '' && mobile === '') {
            alert('Please enter either your email address or mobile number.');
            return;
        }

        if (email !== '' && !validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (mobile !== '' && !validateMobile(mobile)) {
            alert('Please enter a valid 10-digit mobile number.');
            return;
        }

        // Proceed with form submission (e.g., send data to the server)
        alert('Password reset link sent successfully!');
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validateMobile(mobile) {
        return /^\d{10}$/.test(mobile);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const enrollmentNo = document.getElementById('Enrollment No.').value.trim();
        const password = document.getElementById('password').value.trim();

        // Basic validation
        if (enrollmentNo === '' || password === '') {
            showError('Enrollment No. and Password are required.');
            return;
        }

        // Here you can add more validation or authentication logic
        // For demonstration, we'll just show a success message
        showError('');
        alert('Login successful!');
        // You can redirect the user or take another action here
    });

    function showError(message) {
        if (message === '') {
            errorMessage.style.display = 'none';
        } else {
            errorMessage.style.display = 'block';
            errorMessage.textContent = message;
        }
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const dashboardSections = document.querySelectorAll('.dashboard section');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Function to simulate content loading for demonstration purposes
    function loadContent(section, content) {
        setTimeout(() => {
            section.querySelector('p').textContent = content;
        }, 500);
    }

    // Add event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));

            // Load content based on the clicked link (example content)
            switch (link.textContent) {
                case 'Profile':
                    loadContent(targetSection, 'Your profile details will be displayed here.');
                    break;
                case 'Courses':
                    loadContent(targetSection, 'Your enrolled courses and schedules will be displayed here.');
                    break;
                case 'Logout':
                    // Handle logout (for example, redirect to a logout page)
                    window.location.href = 'logout.html';
                    break;
            }
        });
    });

    // Initial content loading
    loadContent(dashboardSections[0], 'Your current courses, grades, and more will appear here.');
    loadContent(dashboardSections[1], 'Stay updated with the latest news and announcements.');
    loadContent(dashboardSections[2], 'Check out the upcoming events and important dates.');
});

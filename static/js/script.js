document.addEventListener('DOMContentLoaded', function() {
    // Auto-hide messages after 5 seconds
    const messages = document.querySelectorAll('.message');
    if (messages.length > 0) {
        setTimeout(function() {
            messages.forEach(function(message) {
                message.style.opacity = '0';
                setTimeout(function() {
                    message.style.display = 'none';
                }, 300);
            });
        }, 5000);
    }

    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function(item) {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close all other items
            faqItems.forEach(function(otherItem) {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle the clicked item
            item.classList.toggle('active');
        });
    });

    // Form validation for application submission
    const applicationForm = document.querySelector('.application-section form');
    if (applicationForm) {
        applicationForm.addEventListener('submit', function(event) {
            let isValid = true;
            
            // Validate startup name
            const startupName = document.querySelector('#id_startup_name');
            if (startupName && startupName.value.trim() === '') {
                showError(startupName, 'Startup name is required');
                isValid = false;
            } else {
                removeError(startupName);
            }
            
            // Validate founder name
            const founderName = document.querySelector('#id_founder_name');
            if (founderName && founderName.value.trim() === '') {
                showError(founderName, 'Founder name is required');
                isValid = false;
            } else {
                removeError(founderName);
            }
            
            // Validate description
            const description = document.querySelector('#id_description');
            if (description && description.value.trim() === '') {
                showError(description, 'Description is required');
                isValid = false;
            } else {
                removeError(description);
            }
            
            // Validate document (only for new submissions)
            const document = document.querySelector('#id_document');
            if (document && document.value) {
                const allowedExtension = '.pdf';
                if (!document.value.toLowerCase().endsWith(allowedExtension)) {
                    showError(document, 'Only PDF files are allowed');
                    isValid = false;
                } else {
                    removeError(document);
                }
            }
            
            if (!isValid) {
                event.preventDefault();
            }
        });
    }

    // Custom registration form validation
    const registrationForm = document.querySelector('.auth-section form');
    if (registrationForm && registrationForm.getAttribute('action').includes('register')) {
        registrationForm.addEventListener('submit', function(event) {
            let isValid = true;
            
            // Validate username
            const username = document.querySelector('#id_username');
            if (username && username.value.trim().length < 3) {
                showError(username, 'Username must be at least 3 characters');
                isValid = false;
            } else {
                removeError(username);
            }
            
            // Validate email
            const email = document.querySelector('#id_email');
            if (email && !/^\S+@\S+\.\S+$/.test(email.value)) {
                showError(email, 'Please enter a valid email address');
                isValid = false;
            } else {
                removeError(email);
            }
            
            // Validate passwords
            const password1 = document.querySelector('#id_password1');
            const password2 = document.querySelector('#id_password2');
            
            if (password1 && password1.value.length < 8) {
                showError(password1, 'Password must be at least 8 characters');
                isValid = false;
            } else {
                removeError(password1);
            }
            
            if (password1 && password2 && password1.value !== password2.value) {
                showError(password2, 'Passwords do not match');
                isValid = false;
            } else if (password2) {
                removeError(password2);
            }
            
            if (!isValid) {
                event.preventDefault();
            }
        });
    }

    // Add status color effect to dashboard cards
    const statusElements = document.querySelectorAll('.status');
    statusElements.forEach(function(status) {
        const card = status.closest('.application-card');
        if (card) {
            if (status.classList.contains('approved')) {
                card.style.borderLeft = '4px solid var(--success-color)';
            } else if (status.classList.contains('rejected')) {
                card.style.borderLeft = '4px solid var(--error-color)';
            } else {
                card.style.borderLeft = '4px solid var(--warning-color)';
            }
        }
    });

    // Helper functions for form validation
    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        let errorElement = formGroup.querySelector('.error-text');
        
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-text';
            errorElement.style.color = 'var(--error-color)';
            errorElement.style.fontSize = '0.8rem';
            errorElement.style.marginTop = '5px';
            formGroup.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
        input.style.borderColor = 'var(--error-color)';
    }
    
    function removeError(input) {
        const formGroup = input.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-text');
        
        if (errorElement) {
            errorElement.remove();
        }
        
        input.style.borderColor = '';
    }
});
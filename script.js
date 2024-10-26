// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation and Submission
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

function validateForm() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    let valid = true;

    if (name === "") {
        valid = false;
        showError(nameInput, "Name cannot be empty");
    } else {
        clearError(nameInput);
    }

    if (email === "") {
        valid = false;
        showError(emailInput, "Email cannot be empty");
    } else if (!validateEmail(email)) {
        valid = false;
        showError(emailInput, "Please enter a valid email address");
    } else {
        clearError(emailInput);
    }

    if (message === "") {
        valid = false;
        showError(messageInput, "Message cannot be empty");
    } else {
        clearError(messageInput);
    }

    return valid;
}

form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission
    if (validateForm()) {
        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            message: messageInput.value.trim(),
        };

        try {
            const response = await fetch('http://localhost:3000/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (data.success) {
                alert(data.message);
                form.reset(); // Reset the form
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert("There was an error submitting the form.");
        }
    }
});

// Email validation function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Testimonials carousel with animation
const testimonials = [
    { text: "Edu Consultancy helped me find the perfect university!", author: "Student A" },
    { text: "Thanks to their advice, I got a scholarship!", author: "Student B" },
    { text: "Very professional and supportive consultants.", author: "Parent C" }
];
let currentTestimonialIndex = 0;

function showTestimonial(index) {
    const testimonial = testimonials[index];
    const testimonialText = document.getElementById("testimonial-text");
    const testimonialAuthor = document.getElementById("testimonial-author");

    // Fade out animation
    testimonialText.classList.add('fade-out');
    testimonialAuthor.classList.add('fade-out');

    setTimeout(() => {
        testimonialText.innerText = `"${testimonial.text}"`;
        testimonialAuthor.innerText = `- ${testimonial.author}`;
        
        // Fade in animation
        testimonialText.classList.remove('fade-out');
        testimonialAuthor.classList.remove('fade-out');
    }, 300); // Match duration with CSS transition duration
}

function nextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    showTestimonial(currentTestimonialIndex);
}

function prevTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonialIndex);
}

if (document.getElementById("testimonials")) {
    showTestimonial(currentTestimonialIndex);
    document.getElementById("next-testimonial").addEventListener("click", nextTestimonial);
    document.getElementById("prev-testimonial").addEventListener("click", prevTestimonial);
}

// Appointment Booking Modal
const appointmentButton = document.createElement('button');
appointmentButton.innerText = 'Book Appointment';
appointmentButton.classList.add('appointment-button');
document.querySelector('#services').appendChild(appointmentButton);

appointmentButton.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Book an Appointment</h2>
            <label for="appointment-date">Preferred Date (DD/MM/YYYY):</label>
            <input type="text" id="appointment-date" placeholder="Enter date">
            <button id="confirm-appointment">Confirm</button>
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.close').onclick = () => {
        modal.remove();
    };

    document.getElementById("confirm-appointment").onclick = async () => {
        const appointmentDate = document.getElementById('appointment-date').value;
        if (appointmentDate) {
            const response = await fetch('http://localhost:3000/book-appointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ date: appointmentDate }),
            });
            const data = await response.json();
            alert(data.message);
            modal.remove();
        } else {
            alert("Please enter a valid date.");
        }
    };
});

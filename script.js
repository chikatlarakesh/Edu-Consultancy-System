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

// Form Validation
document.querySelector('form').addEventListener('submit', event => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        event.preventDefault();
        alert("Please fill out all fields in the contact form.");
    } else if (!validateEmail(email)) {
        event.preventDefault();
        alert("Please enter a valid email address.");
    } else {
        alert("Thank you for reaching out. We'll get back to you soon!");
    }
});

// Email validation function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Testimonials carousel (if testimonials section exists)
const testimonials = [
    { text: "Edu Consultancy helped me find the perfect university!", author: "Student A" },
    { text: "Thanks to their advice, I got a scholarship!", author: "Student B" },
    { text: "Very professional and supportive consultants.", author: "Parent C" }
];
let currentTestimonialIndex = 0;

function showTestimonial(index) {
    const testimonial = testimonials[index];
    document.getElementById("testimonial-text").innerText = `"${testimonial.text}"`;
    document.getElementById("testimonial-author").innerText = `- ${testimonial.author}`;
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

// Appointment Booking Simulation (for demo purposes)
const appointmentButton = document.createElement('button');
appointmentButton.innerText = 'Book Appointment';
appointmentButton.classList.add('appointment-button');
document.querySelector('#services').appendChild(appointmentButton);

appointmentButton.addEventListener('click', () => {
    const appointmentDate = prompt("Enter a preferred date for the appointment (DD/MM/YYYY):");
    if (appointmentDate) {
        alert(`Appointment booked for ${appointmentDate}. We’ll confirm the timing soon!`);
    } else {
        alert("Appointment booking cancelled.");
    }
});

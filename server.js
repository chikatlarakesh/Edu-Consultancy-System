const express = require('express');
const cors = require('cors'); // Import cors
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Use CORS middleware
app.use(cors());
app.use(bodyParser.json()); // Enable JSON body parsing

// Example endpoint for booking appointments
app.post('/book-appointment', (req, res) => {
    const { date } = req.body;
    // Here you would typically handle the appointment booking logic
    console.log(`Appointment booked for: ${date}`);
    res.json({ message: `Appointment booked for ${date}. We’ll confirm the timing soon!` });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
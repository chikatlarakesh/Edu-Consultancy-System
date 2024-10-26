# Edu Consultancy System

An innovative platform developed to streamline educational consultancy services by providing guidance and resources for students, parents, and educational organizations. The system includes secure user authentication, course subscriptions, and a comprehensive admin dashboard for managing consultancy operations.

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

The **Edu Consultancy System** is designed to assist students, parents, and educational institutions in educational planning and course management. It enables users to register, explore educational resources, subscribe to training programs, and manage consultancy services with ease. Administrators can manage users, products, and subscriptions through a dedicated dashboard.

## Key Features

- **User Authentication & Role Management:**
  - Secure login and registration for different roles (Admin, Student, Parent).
  - Email verification and password recovery options.
  
- **Course Subscription & Payment Management:**
  - Integration with multiple payment gateways (UPI, Credit/Debit Cards, Net Banking).
  - Track subscription status and renewals with automated alerts.

- **Admin Dashboard:**
  - Manage users, subscriptions, and educational products.
  - Visualize student progress and exam status with detailed reports.

- **Feedback & Notifications:**
  - Collect feedback from users and send automated notifications via email and SMS.

## Technologies Used

- **Backend:** Spring Boot, JUnit, Mockito
- **Frontend:** React JS / Angular
- **Database:** MySQL
- **Security:** Spring Security
- **Payment Integration:** UPI, Credit/Debit Cards, Net Banking
- **Notifications:** Email and SMS services

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chikatlarakesh/edu-consultancy-system.git
   cd edu-consultancy-system
2. Install the dependencies:

   - For backend (Spring Boot):
     ```bash
     ./mvnw install
     ```

   - For frontend (React or Angular):
     ```bash
     npm install
     ```

3. Set up the database (MySQL):

   - Create a database and update the database configuration in `application.properties`.

4. Run the application:

   - Backend:
     ```bash
     ./mvnw spring-boot:run
     ```

   - Frontend:
     ```bash
     npm start
     ```

## Usage

- Navigate to the URL `http://localhost:3000` for the frontend interface.
- Register as a user (Student, Parent, or Admin).
- Admins can access the dashboard for managing users, subscriptions, and courses.
- Students/Parents can subscribe to educational programs and track progress.

## Contributing

We welcome contributions to the Edu Consultancy System! If you'd like to contribute, please fork the repository, make your changes, and submit a pull request. For major changes, please open an issue first to discuss what you’d like to improve.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For questions or feedback, feel free to reach out:

- **Name:** Chikatla Rakesh
- **Email:** [rakeshchikatla12@gmail.com](mailto:rakeshchikatla12@gmail.com)
- **GitHub:** [github.com/chikatlarakesh](https://github.com/chikatlarakesh)

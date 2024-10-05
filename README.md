# Hotel Booking Website

### Description

This project is a fully-functional **Hotel Booking Website** built with the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to search for available rooms, view detailed descriptions of the hotels, and book them through a seamless, user-friendly interface. The website is optimized for performance, responsive on various devices, and includes features like authentication, payment integration, and real-time room availability updates.

### Key Features

- **User Authentication**: Users can register and log in securely.
- **Booking Management**: Users can view their booking history and manage current bookings.
- **Payment Gateway Integration**: Secure payment options for booking confirmations.
- **Admin Panel**: Admins can add, edit, and delete rooms, view bookings, and manage user queries.
- **Real-time Availability**: Updated room availability for accurate booking experience.
- **Responsive Design**: Works across desktops, tablets, and mobile devices.

### Tech Stack

- **Frontend**: 
  - React.js
  
- **Backend**: 
  - Node.js
  - Express.js
  
- **Database**: 
  - MongoDB (NoSQL database for storing user, booking, and room data)
  
- **Payment Integration**:
  - Stripe API (or any other payment provider)

### Installation

To run the project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/shubh9495/Hotel-Website
    ```

2. **Install dependencies for both frontend and backend**:
    - Navigate to the **frontend** and **backend** directories and run:
    ```bash
    cd src
    npm install
    cd ../server
    npm install
    ```

3. **Configure environment variables**:
    - Create a `.env` file in the **backend** directory with the following:
      ```
      MONGO_URI=your_mongodb_uri
      JWT_SECRET=your_jwt_secret
      STRIPE_SECRET_KEY=your_stripe_secret_key
      ```

4. **Run the development server**:
    - Start both frontend and backend servers:
    ```bash
    cd src
    npm start
    cd ../server
    npm run dev
    ```

5. **Access the application**:
    - Visit `http://localhost:3000` for the frontend.
    - The backend runs on `http://localhost:5000`.

### Usage

- **For Users**: Register, log in, search for available rooms, and make bookings through the secure payment gateway.
- **For Admins**: Log in to the admin dashboard to manage rooms and view bookings.

This README provides an overview of the project, setup instructions, and guidance for users and developers. You can adjust it based on the exact features and configurations of your project!

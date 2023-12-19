// validation.js

// Function to validate email
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Function to validate phone number
const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/; // Assumes a 10-digit number for simplicity
    return phoneRegex.test(phoneNumber);
};



module.exports = {
    validateEmail,
    validatePhoneNumber
};

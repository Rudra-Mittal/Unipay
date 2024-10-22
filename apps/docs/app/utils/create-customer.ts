import axios from 'axios';
import base64 from 'base-64';

// Define your key and secret
const apiKey = 'rzp_test_yKtDZBgQecVeqk';
const apiSecret = '0C6iXbkOrXcE9gZKwKpciuNl';

// Razorpay API endpoint for creating a customer
const url = 'https://api.razorpay.com/v1/customers';

// Customer data
const customerData = {
  name: "John Doe",
  email: "rohan@..doe@example.com",
  contact: "9876533210"
};

// Encode the API key and secret in base64
const authHeader = 'Basic ' + base64.encode(`${apiKey}:${apiSecret}`);

// Send the POST request with Basic Authentication
export const createCustomer=()=>{
    axios.post(url, customerData, {
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log("Customer created successfully:", response.data);
      })
      .catch(error => {
        console.error("Failed to create customer:", error);
      });
}
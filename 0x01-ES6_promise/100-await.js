// asyncUploadUser.js

// Import the necessary functions from utils.js
import { uploadPhoto, createUser } from './utils.js';

// Define the async function
const asyncUploadUser = async () => {
  try {
    // Make the async calls concurrently using Promise.all
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto(),
      createUser()
    ]);

    // Return an object with the responses
    return {
      photo: photoResponse,
      user: userResponse
    };
  } catch (error) {
    // If any error occurs in either call, return an empty object
    console.error('Error during asyncUploadUser:', error);
    return {
      photo: null,
      user: null
    };
  }
};

// Export the async function
export default asyncUploadUser;

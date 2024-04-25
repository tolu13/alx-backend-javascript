export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    // Simulate an error condition
    if (!filename.endsWith('.jpg')) {
      reject(new Error(`${filename} cannot be processed`));
    } else {
      // Simulate a successful upload
      setTimeout(() => {
        resolve({ status: 200, body: 'photo-profile-1' });
      }, 2000); // Simulating a delay for the upload process
    }
  });
}

// Example usage
uploadPhoto('guillaume.jpg')
  .then(response => {
    console.log(response); // Log the resolved response
  })
  .catch(error => {
    console.error('Error:', error.message); // Log the error message
  });

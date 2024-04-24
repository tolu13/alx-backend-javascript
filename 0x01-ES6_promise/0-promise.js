function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { message: 'This is the API response' };
      resolve(data);
    }, 2000); // Set the timeout to 2000 milliseconds (2 seconds) for example
  });
}

export default getResponseFromAPI;

import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  return Promise.all([photoPromise, userPromise])
    .then(([photoResponse, userResponse]) => {
      const { body: photoBody } = photoResponse;
      const { firstName, lastName } = userResponse;
      console.log(`Body: ${firstName} ${lastName} - Photo: ${photoBody}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;

import { signUpUser } from './4-user-promise';
import { uploadPhoto } from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [];

  promises.push(signUpUser(firstName, lastName));
  promises.push(uploadPhoto(fileName));

  const results = [];

  return Promise.allSettled(promises)
    .then((settledPromises) => {
      for (let i = 0; i < settledPromises.length; i++) {
        const result = settledPromises[i];
        const status = result.status;
        const value = status === 'fulfilled' ? result.value : result.reason;

        results.push({
          status: status,
          value: value
        });
      }

      return results;
    });
}


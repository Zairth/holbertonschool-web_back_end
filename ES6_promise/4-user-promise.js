export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    try {
      resolve({
        firstName,
        lastName,
      });
    } catch (error) {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

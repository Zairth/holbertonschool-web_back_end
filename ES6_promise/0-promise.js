export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    try {
      resolve('Success');
    } catch (error) {
      reject(new Error('Something went wrong.'));
    }
  });
}

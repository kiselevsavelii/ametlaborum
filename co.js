try {
  // Code that might throw an error
  throw new Error('Something went wrong!');
} catch (e) {
  // Code to handle the caught error
  console.log('An error occurred:', e.message);
}

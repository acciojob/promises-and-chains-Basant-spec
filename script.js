
// Get references to the form elements
const ageInput = document.getElementById('age');
const nameInput = document.getElementById('name');
const submitButton = document.getElementById('btn');

// Function to simulate the asynchronous operation using a promise
function handleFormSubmission(age, name) {
  return new Promise((resolve, reject) => {
    // Validate inputs
    if (!age || !name) {
      reject('Please enter valid details');
      return;
    }

    // Simulate delay with a timeout (4 seconds)
    setTimeout(() => {
      if (age >= 18) {
        // Resolve promise if age is 18 or above
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        // Reject promise if age is below 18
        reject(`Oh sorry, ${name}. You aren't old enough.`);
      }
    }, 4000); // 4 seconds delay
  });
}

// Handle form submission
submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the form from submitting the traditional way

  // Get the input values
  const age = parseInt(ageInput.value, 10);
  const name = nameInput.value.trim();

  // Call the promise function
  handleFormSubmission(age, name)
    .then((successMessage) => {
      alert(successMessage); // Alert success message if promise resolves
    })
    .catch((errorMessage) => {
      alert(errorMessage); // Alert error message if promise is rejected
    });
});

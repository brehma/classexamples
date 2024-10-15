// Define API URL with the provided filter
const apiUrl = 'https://api.stackexchange.com/2.3/sites?filter=!)QnLLt9nPppdTlUqmH7KDCDW';

// Define array of Stackoverflow Sites
var stackoverflowSites = [];

// Fetch data from Stack Exchange API
async function getAPI() {
  try {
      // Fetch the API response
      const response = await fetch(apiUrl);

      // Convert response to JSON
      const data = await response.json();
      
      // Store the output in a variable
      stackoverflowSites = data.items;

      // Output the variable (or use it as needed)
      console.log(stackoverflowSites);
    
      return stackoverflowSites;

  } catch (error) {
      console.error('Error fetching Stack Exchange sites:', error);
  }
}

document.addEventListener('click', () => {
  getAPI();
});

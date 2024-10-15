// Define API URL with the provided filter
const apiUrl = 'https://api.stackexchange.com/2.3/sites?filter=!)QnLLt9nPppdTlUqmH7KDCDW';

// Define array of Stackoverflow Sites
let stackoverflowSites = [];

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
      //console.log(stackoverflowSites);
    
      displaySites(stackoverflowSites);

  } catch (error) {
      console.error('Error fetching Stack Exchange sites:', error);
  }
}

// Function to display sites
function displaySites(sites) {
    const sitesDiv = document.getElementById('sites');
    sitesDiv.innerHTML = ''; // Clear previous results
    sites.forEach(site => {
        const siteDiv = document.createElement('div');
        siteDiv.className = 'site';
        siteDiv.textContent = site.name; // Display site name
        sitesDiv.appendChild(siteDiv);
    });
}

document.getElementById('getSites').addEventListener('click', () => {
  getAPI();
});

// Define API URL with the provided filter
const apiUrl = 'https://api.stackexchange.com/2.3/sites?filter=!)QnLLt9nPppdTlUqmH7KDCDW';

// Fetch data from Stack Exchange API
async function getAPI() {
    try {
        // Fetch the API response
        const response = await fetch(apiUrl);
        
        // Convert response to JSON
        const data = await response.json();
        
        // Store the output in a variable
        const stackSites = data.items;
        
        // Output the variable (or use it as needed)
        console.log(stackSites);

        return stackSites;
    } catch (error) {
        console.error('Error fetching Stack Exchange sites:', error);
    }
    document.getElementById('getSites');
}

function sortSites(sites) {
    return sites.sort((a,b) => (a.name.localeCompare(b.name)));
}

// Function to display sites
function displaySites(sites) {
    const sitesDiv = document.getElementById('listsites');
    sitesDiv.innerHTML = ''; // Clear previous results
    sites.forEach(site => {
        const siteDiv = document.createElement('div');
        siteDiv.className = 'site';
        siteDiv.textContent = site.name; // Display site name
        sitesDiv.appendChild(siteDiv);
    });
}

// Event listener for the button
document.addEventListener('click', () => {
    getAPI();
    displaySites(sites);
});
        //sites => {
//        const sortedSites = sortSites(sites);
//        displaySites(sortedSites); // Display sorted sites
//    });
//});
    
// Call the function
getAPI();
sortSites(stackSites);

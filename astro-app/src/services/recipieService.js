// Function to construct query string from parameters object
function constructQueryString(params) {
    return Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
  }
  
  // Example usage with getRecipies function
 export async function getRecipies(params) {
    const baseURL = 'https://api.edamam.com/api/recipes/v2';
    const queryString = constructQueryString(params); // Convert params object to query string
    const fullURL = `${baseURL}?${queryString}`;
    console.log('fullURL:' + fullURL);
    try {
      const response = await fetch(fullURL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      return null;
    }
  }
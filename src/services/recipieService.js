function constructQueryString(params) {
  return Object.keys(params).map(key => {
      const value = params[key];
      if (Array.isArray(value)) {
          // Handle arrays, assuming the API expects 'key=value1&key=value2' format
          return value.map(val => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`).join('&');
      } else {
          return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      }
  }).join('&');
}
  
  // Example usage with getRecipies function
  export async function getRecipies(params) {
    const baseURL = 'https://api.spoonacular.com/recipes/random';
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
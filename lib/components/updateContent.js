// urlHelpers.js
export function updateContentParam(newContent) {
    // Get the current URL and query string
    const url = new URL(window.location);
    const params = new URLSearchParams(url.search);
    
    // Set or update the 'content' parameter
    params.set('content', newContent);
  
    // Update the URL in the browser without reloading the page
    window.history.replaceState({}, '', `${url.pathname}?${params.toString()}`);
  }
  
const fetch = require("node-fetch");

async function fetchGooglePage() {
  try {
    const response = await fetch("https://www.google.com");
    const data = await response.text();
    console.log(data);
  } catch (err) {
    console.error("Error fetching Google page:", err.message);
  }
}

fetchGooglePage();

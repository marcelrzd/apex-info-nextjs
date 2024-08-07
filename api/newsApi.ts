export async function fetchNews() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/news?auth=${process.env.NEXT_PUBLIC_API_KEY}&lang=en-US`
    );
    if (!res.ok) {
      // If the server responded with a non-200 status, throw an error
      throw new Error(`API responded with status code ${res.status}`);
    }

    const data = await res.json();

    const newsItems = data.slice(0, 5); // Take only the first 5 items

    return newsItems;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    // Return an error object or null depending on how you want to handle errors
    return { error: true, message: error.message };
  }
}

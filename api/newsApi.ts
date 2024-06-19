// api/newsApi.ts
export async function fetchData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/news?auth=${process.env.NEXT_PUBLIC_API_KEY}&lang=en-US`
    );
    if (!res.ok) {
      // If the server responded with a non-200 status, throw an error
      throw new Error(`API responded with status code ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching data:", error.message);
    // Return an error object or null depending on how you want to handle errors
    return { error: true, message: error.message };
  }
}

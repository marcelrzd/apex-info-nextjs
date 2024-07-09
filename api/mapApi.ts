export async function fetchMap() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/maprotation?version=2&auth=${process.env.NEXT_PUBLIC_API_KEY}&lang=en-US`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      // If the server responded with a non-200 status, throw an error
      throw new Error(`API responded with status code ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    // Return an error object or null depending on how you want to handle errors
    return { error: true, message: error.message };
  }
}

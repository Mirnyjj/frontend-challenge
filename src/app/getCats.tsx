const API_KEY =
  "live_6zSXnuQMa82RjY182ouFJbXb5Tf7qu5XsDPotiN4srG0OIRrOwYOcA70s6XbE90M";

export async function getCats() {
  try {
    const res = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=15",
      {
        cache: "no-store",
        headers: {
          "x-api-key": API_KEY,
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const cats = await res.json();
    return cats;
  } catch (error: any) {
    console.error("Error:", error.message);
    return [];
  }
}

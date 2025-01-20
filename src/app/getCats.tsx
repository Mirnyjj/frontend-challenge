"use server";
// export const dynamic = "force-dynamic"
import { CatsType } from "./models/models";

const API_KEY =
  "live_6zSXnuQMa82RjY182ouFJbXb5Tf7qu5XsDPotiN4srG0OIRrOwYOcA70s6XbE90M";

export async function getCats() {
  // try {
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
  return cats as CatsType[];
  // } catch (e) {
  //   const result = (e as Error).message;
  //   console.error("Error:", result);
  //   return [];
  // }
}

import { API_URL } from "./config";
export async function getLocations(filters) {
  const response = await fetch(`${API_URL}/locations/?${filters}`)
  return response.json();
}
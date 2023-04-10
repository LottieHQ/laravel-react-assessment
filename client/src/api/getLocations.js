import { API_URL } from "./config";
export async function getLocations() {
  const response = await fetch(`${API_URL}/locations`)
  return response.json();
}
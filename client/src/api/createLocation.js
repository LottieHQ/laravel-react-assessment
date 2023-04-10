import { API_URL } from "./config";
export async function createLocation(newLocation) {
  const response = await fetch(`${API_URL}/locations`, {
    method:'POST',
    body:JSON.stringify(newLocation),
    headers: {
      "Content-Type": "application/json",
    },
  });

  let result = await response.json();
  return response.ok ? [true, "Successfully created new Location"] : [false, result];
}
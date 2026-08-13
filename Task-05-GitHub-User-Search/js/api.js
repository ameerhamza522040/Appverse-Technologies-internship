// ============================================================
// api.js
// Responsible ONLY for talking to the GitHub API.
// This file does not touch the DOM at all.
// ============================================================

const BASE_URL = "https://api.github.com/users/";

// Fetches a GitHub user's public profile data.
// Throws an Error if the user doesn't exist or the request fails,
// so the calling code can catch it and show a message.
export async function fetchUser(username) {
  const response = await fetch(BASE_URL + username);

  if (response.status === 404) {
    throw new Error("User not found");
  }

  if (!response.ok) {
    throw new Error("Request failed with status " + response.status);
  }

  const data = await response.json();
  return data;
}

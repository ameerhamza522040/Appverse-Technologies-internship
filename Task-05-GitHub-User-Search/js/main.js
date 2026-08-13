// ============================================================
// main.js
// Connects api.js and ui.js together.
// Handles button clicks and the Enter key, and decides what
// happens on success or failure of the API request.
// ============================================================

import { fetchUser } from "./api.js";
import {
  showLoading,
  hideLoading,
  showError,
  clearError,
  displayProfile,
  clearProfile,
  resetUI,
  getUsernameValue
} from "./ui.js";

const usernameInput = document.getElementById("usernameInput");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");

// ---------- Search action ----------
async function handleSearch() {
  const username = getUsernameValue();

  clearError();
  clearProfile();

  // 1. Empty username check
  if (!username) {
    showError("Please enter a GitHub username.");
    return;
  }

  showLoading();

  try {
    // 2. Fetch the user, waiting for the result with await
    const user = await fetchUser(username);

    // 3. Show the result
    displayProfile(user);
  } catch (error) {
    // 4. Handle errors without exposing raw technical details
    if (error.message === "User not found") {
      showError("No GitHub user found with that username.");
    } else {
      showError("Something went wrong. Please check your connection and try again.");
    }
  } finally {
    hideLoading();
  }
}

// ---------- Clear action ----------
function handleClear() {
  resetUI();
}

// ---------- Event listeners ----------
searchBtn.addEventListener("click", handleSearch);
clearBtn.addEventListener("click", handleClear);

// Allow pressing Enter inside the input to trigger a search
usernameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
});

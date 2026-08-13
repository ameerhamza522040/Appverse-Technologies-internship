// ============================================================
// ui.js
// Responsible ONLY for updating what's shown on the page.
// This file does not know anything about the GitHub API.
// ============================================================

// ---------- Element references ----------
const usernameInput = document.getElementById("usernameInput");
const searchBtn = document.getElementById("searchBtn");

const loadingMessage = document.getElementById("loadingMessage");
const errorMessage = document.getElementById("errorMessage");

const profileCard = document.getElementById("profileCard");
const profileAvatar = document.getElementById("profileAvatar");
const profileName = document.getElementById("profileName");
const profileUsername = document.getElementById("profileUsername");
const profileBio = document.getElementById("profileBio");
const statRepos = document.getElementById("statRepos");
const statFollowers = document.getElementById("statFollowers");
const statFollowing = document.getElementById("statFollowing");
const profileLocation = document.getElementById("profileLocation");
const profileLink = document.getElementById("profileLink");

// ---------- Loading state ----------
export function showLoading() {
  loadingMessage.hidden = false;
  searchBtn.disabled = true;
}

export function hideLoading() {
  loadingMessage.hidden = true;
  searchBtn.disabled = false;
}

// ---------- Error state ----------
export function showError(message) {
  errorMessage.textContent = message;
  errorMessage.hidden = false;
}

export function clearError() {
  errorMessage.textContent = "";
  errorMessage.hidden = true;
}

// ---------- Profile display ----------
export function displayProfile(user) {
  profileAvatar.src = user.avatar_url;
  profileAvatar.alt = user.login + "'s avatar";

  profileName.textContent = user.name || user.login;
  profileUsername.textContent = "@" + user.login;
  profileBio.textContent = user.bio || "";

  statRepos.textContent = user.public_repos;
  statFollowers.textContent = user.followers;
  statFollowing.textContent = user.following;

  profileLocation.textContent = user.location ? "📍 " + user.location : "";

  profileLink.href = user.html_url;

  profileCard.hidden = false;
}

export function clearProfile() {
  profileCard.hidden = true;
  profileAvatar.src = "";
  profileAvatar.alt = "";
  profileName.textContent = "";
  profileUsername.textContent = "";
  profileBio.textContent = "";
  statRepos.textContent = "0";
  statFollowers.textContent = "0";
  statFollowing.textContent = "0";
  profileLocation.textContent = "";
  profileLink.href = "#";
}

// ---------- Full reset (used by the Clear button) ----------
export function resetUI() {
  usernameInput.value = "";
  clearError();
  clearProfile();
  hideLoading();
  usernameInput.focus();
}

export function getUsernameValue() {
  return usernameInput.value.trim();
}

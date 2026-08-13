# GitHub User Search

A small frontend mini project built during the Frontend Development Internship (Phase 1 — Web Foundations and JavaScript Mastery, Async JavaScript and Modules).

## Description

A simple web app that looks up a GitHub user's public profile. Enter a username, click **Search**, and the app fetches that user's data from the public GitHub API and displays their avatar, name, bio, and basic stats.

## Features

- Search for any public GitHub username
- Loading state while the request is in progress
- Friendly error messages for empty input, users that don't exist, and network failures
- Clear button to reset the app back to its starting state
- Press **Enter** in the search box to search
- Responsive layout that works on both desktop and mobile

## API Used

[GitHub REST API — Users](https://api.github.com/users/{username}) (no API key required)

Example: `https://api.github.com/users/octocat`

## Technologies

- HTML5 (semantic markup)
- CSS3 (responsive, card-based layout)
- Vanilla JavaScript (ES6+, ES Modules)
- `fetch()` with `async` / `await`

No frameworks or external libraries are used.

## Module Structure

```
GitHub-User-Search/
│
├── index.html
├── README.md
│
├── css/
│   └── style.css
│
└── js/
    ├── api.js     — talks to the GitHub API
    ├── ui.js      — updates what's shown on the page
    └── main.js    — connects everything and handles events
```

- **api.js** only knows how to fetch a user from GitHub. It has no idea the DOM exists.
- **ui.js** only knows how to show/hide loading, errors, and the profile card. It has no idea the API exists.
- **main.js** imports from both, listens for the Search/Clear buttons and the Enter key, and decides what to do with the result or error.

## How to Run

1. Open the project folder in VS Code.
2. Install the **Live Server** (or **Five Server**) extension if you don't already have it.
3. Right-click `index.html` and choose **Open with Live Server**.
4. ES Modules require a real server URL (`http://127.0.0.1:...`) — opening `index.html` directly by double-clicking it will not work, since browsers block module imports over the `file://` protocol.

## What Was Learned

- Using `fetch()` together with `async`/`await` instead of `.then()` chains
- Handling errors properly with `try...catch`, including a `404` case versus a general network failure
- Splitting an application into three focused ES Modules (`api.js`, `ui.js`, `main.js`) using named `export`/`import`
- Managing loading and error states in the UI without a framework
- Writing accessible markup: labels, semantic elements, `alt` text, and visible focus states

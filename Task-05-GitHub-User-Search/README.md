# 🔎 GitHub User Search

> A modular JavaScript mini project that connects a clean frontend interface with the GitHub REST API to search and display public GitHub profiles.

**Frontend Development Internship · Phase 1 — Web Foundations & JavaScript Mastery**

---

## ✨ Project Overview

**GitHub User Search** is a lightweight, responsive frontend application built with **HTML5, CSS3, and Vanilla JavaScript ES Modules**.

The application allows users to enter a GitHub username and retrieve publicly available profile information through the GitHub REST API.

The project was developed as a practical exercise in:

- ES Modules
- `import` / `export`
- API integration
- `fetch()`
- `async` / `await`
- `try...catch...finally`
- DOM manipulation
- UI state management
- Error handling
- Responsive design
- Accessibility

No frameworks, build tools, or external JavaScript libraries are required.

---

## 🎯 Project Goals

The main goal was to build a small but complete frontend application that demonstrates how modern JavaScript concepts work together in a real-world use case.

### The project demonstrates:

```text
User Input
    ↓
Validation
    ↓
Loading State
    ↓
GitHub REST API
    ↓
async / await
    ↓
Error Handling
    ↓
Profile Data
    ↓
Dynamic UI
````

---

## 🚀 Features

### 🔍 GitHub User Search

Search for any public GitHub username and retrieve their profile information.

### ⚡ Async API Requests

Uses the modern:

```javascript
fetch()
async
await
```

pattern instead of traditional promise chains.

### 🧩 Modular Architecture

The JavaScript application is divided into three focused ES modules:

* `api.js`
* `ui.js`
* `main.js`

Each module has a specific responsibility.

### ⏳ Loading State

A visible loading message appears while the API request is being processed.

The Search button is also disabled during the request to prevent unnecessary repeated submissions.

### ❌ Error Handling

The application handles:

* Empty username input
* GitHub user not found
* Failed API requests
* General network/request problems

### 🧹 Clear / Reset

The Clear button returns the application to its initial state.

It clears:

* Search input
* Error messages
* Profile results
* Loading state

### ⌨️ Keyboard Support

Pressing **Enter** inside the search field triggers the search action.

### 👤 Profile Information

For a valid GitHub username, the application displays:

* Profile avatar
* Name
* Username
* Bio
* Public repositories
* Followers
* Following
* Location
* Link to the GitHub profile

### 📱 Responsive Design

The interface adapts to smaller screen sizes and provides a mobile-friendly layout.

### ♿ Accessibility

The project includes basic accessibility practices such as:

* Semantic HTML
* Proper input labeling
* `aria-live`
* `role="status"`
* `role="alert"`
* Avatar `alt` text
* Visible focus states
* Keyboard interaction

---

## 🛠️ Tech Stack

| Technology          | Purpose                             |
| ------------------- | ----------------------------------- |
| **HTML5**           | Semantic page structure             |
| **CSS3**            | Styling, layout & responsive design |
| **JavaScript ES6+** | Application logic                   |
| **ES Modules**      | Code organization                   |
| **Fetch API**       | GitHub API communication            |
| **Async/Await**     | Asynchronous operations             |
| **GitHub REST API** | Public profile data                 |

### No Frameworks

This project intentionally uses **Vanilla JavaScript**.

There is no:

* React
* Vue
* Angular
* Bootstrap
* Tailwind CSS
* Node.js
* Webpack
* Vite
* External JavaScript library

The purpose was to demonstrate strong frontend fundamentals without relying on a framework.

---

## 🌐 API

The application uses the public **GitHub REST API**.

### Endpoint

```text
https://api.github.com/users/{username}
```

### Example

```text
https://api.github.com/users/octocat
```

No API key is required for this public endpoint.

The API response provides the profile information required by the application, including the user's:

* Login
* Name
* Avatar
* Bio
* Public repositories
* Followers
* Following
* Location
* GitHub profile URL

---

# 🧩 Project Architecture

The application follows a simple separation-of-concerns approach.

```text
GitHub-User-Search/
│
├── index.html
├── README.md
│
├── css/
│   └── style.css
│
└── js/
    ├── api.js
    ├── ui.js
    └── main.js
```

---

## 📁 Module Responsibilities

### `api.js`

Responsible only for communication with the GitHub API.

```text
main.js
   │
   │ fetchUser()
   ↓
api.js
   │
   │ fetch()
   ↓
GitHub REST API
```

The module:

* Builds the API request
* Uses `fetch()`
* Handles the HTTP response
* Detects a `404`
* Throws errors when necessary
* Parses JSON
* Returns the user data

Example:

```javascript
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
```

---

### `ui.js`

Responsible for everything related to the user interface.

It handles:

* Loading state
* Error messages
* Profile rendering
* Profile clearing
* Complete UI reset
* Reading the username input

This keeps UI logic separate from API logic.

---

### `main.js`

Acts as the application controller.

It connects `api.js` and `ui.js` together.

```text
          main.js
         /       \
        ↓         ↓
    api.js      ui.js
      ↓           ↓
 GitHub API    Browser UI
```

It handles:

* Search button
* Clear button
* Enter key
* Input validation
* API request flow
* Success handling
* Error handling
* Loading state

---

# ⚙️ Application Flow

The complete search process works like this:

```text
1. User enters GitHub username
             ↓
2. Input is validated
             ↓
3. Previous results/errors are cleared
             ↓
4. Loading state appears
             ↓
5. main.js calls fetchUser()
             ↓
6. api.js sends fetch() request
             ↓
7. await waits for API response
             ↓
8. Response is checked
             ↓
9. User data is returned
             ↓
10. ui.js displays profile
             ↓
11. Loading state disappears
```

If something goes wrong:

```text
API Request
    ↓
Error
    ↓
catch
    ↓
Friendly error message
    ↓
finally
    ↓
Loading state removed
```

---

# 🧠 Async JavaScript

One of the primary objectives of this project was practicing asynchronous JavaScript.

The API request uses:

```javascript
async function handleSearch() {
  // ...

  try {
    const user = await fetchUser(username);
    displayProfile(user);
  } catch (error) {
    // Handle error
  } finally {
    hideLoading();
  }
}
```

### Why `async` / `await`?

It makes asynchronous code easier to read and understand while keeping the request flow clear.

Instead of nesting multiple promise callbacks, the application can follow a straightforward sequence:

```text
Request → Wait → Receive Data → Display Result
```

---

# 🛡️ Error Handling

The project uses `try...catch...finally` to handle API operations safely.

### `try`

Attempts to retrieve the GitHub profile.

### `catch`

Handles failures and displays a user-friendly message.

### `finally`

Runs after success or failure and removes the loading state.

This is particularly useful because the loading indicator should disappear regardless of whether the request succeeds or fails.

---

# ⏳ Loading State

When a search begins:

```javascript
showLoading();
```

The interface displays:

> Searching GitHub...

The Search button is disabled while the request is in progress.

After the request finishes:

```javascript
hideLoading();
```

The loading message disappears and the Search button becomes available again.

This provides immediate feedback to the user during the asynchronous operation.

---

# 🔎 Search & Clear Actions

## Search

The Search action:

1. Reads the username
2. Removes unnecessary whitespace
3. Validates the input
4. Clears previous results
5. Shows loading state
6. Fetches GitHub data
7. Displays the profile
8. Handles errors
9. Removes loading state

## Clear

The Clear action resets the interface completely.

It clears:

* Input value
* Error message
* Profile card
* Loading state

It also returns focus to the search input.

---

# 📊 Profile Data

A successful API request produces a profile card containing relevant information such as:

```text
┌─────────────────────────────┐
│       Profile Avatar        │
│                             │
│       User Name             │
│       @username             │
│                             │
│       Bio                   │
│                             │
│  Repos │ Followers │ Following
│                             │
│       📍 Location            │
│                             │
│    View GitHub Profile      │
└─────────────────────────────┘
```

Only useful profile information is presented rather than exposing the entire API response.

---

# ♿ Accessibility

Accessibility was considered during the implementation.

Examples include:

### Semantic Structure

The page uses semantic elements such as:

```html
<header>
<main>
<section>
<footer>
```

### Accessible Input

The search input has an associated label.

### Dynamic Status

Loading information uses:

```html
role="status"
aria-live="polite"
```

### Error Feedback

Errors use:

```html
role="alert"
```

### Image Accessibility

The profile avatar receives meaningful `alt` text.

### Keyboard Interaction

Users can press **Enter** to perform a search.

---

# 📱 Responsive Design

The application is designed to remain usable on smaller screens.

At narrow viewport sizes, the layout adapts by:

* Stacking search controls vertically
* Making buttons easier to tap
* Adjusting the profile layout
* Centering profile information
* Preserving readable spacing

The responsive behavior is handled using CSS media queries without any responsive framework.

---

# 🧪 Testing Scenarios

The application can be tested using the following scenarios:

| Test Case         | Expected Result               |
| ----------------- | ----------------------------- |
| Valid username    | Profile information appears   |
| `octocat`         | GitHub profile is displayed   |
| Invalid username  | User-friendly error appears   |
| Empty input       | Validation message appears    |
| Search with Enter | Search is triggered           |
| Click Clear       | Interface resets              |
| API failure       | General error message appears |
| During request    | Loading state is visible      |

---

# 📚 What I Learned

Through this project, I practiced several important frontend development concepts:

* Building browser-based API integrations
* Using the Fetch API
* Working with asynchronous JavaScript
* Using `async` / `await`
* Handling errors with `try...catch...finally`
* Creating and importing ES Modules
* Separating application responsibilities
* Managing loading and error states
* Manipulating the DOM
* Handling user events
* Creating responsive interfaces
* Applying basic accessibility practices

The most important takeaway was understanding how these concepts work together in a real application rather than learning them as isolated JavaScript features.

---

# 🎓 Learning Architecture

The project brings together the core concepts from the internship module:

```text
                GitHub User Search
                       │
          ┌────────────┴────────────┐
          ↓                         ↓
     ES Modules                 API Integration
          │                         │
    ┌─────┼─────┐              fetch()
    ↓     ↓     ↓                 │
  api.js ui.js main.js       async / await
    │     │     │                 │
    └─────┴─────┴───────────┬─────┘
                            ↓
                     Error Handling
                            │
                            ↓
                      Dynamic UI
```

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone <YOUR-REPOSITORY-URL>
```

## 2. Open the project

```bash
cd GitHub-User-Search
```

## 3. Run with Live Server

Open the project in **VS Code** and use:

**Live Server** or **Five Server**

Then open `index.html` through the local server.

### Why a local server?

The project uses ES Modules:

```html
<script type="module" src="js/main.js"></script>
```

Modern browsers restrict module imports when files are opened directly through the `file://` protocol.

Therefore, use a local development server.

---

# 📂 File Overview

| File         | Responsibility                       |
| ------------ | ------------------------------------ |
| `index.html` | Application structure                |
| `style.css`  | Styling and responsive layout        |
| `api.js`     | GitHub API communication             |
| `ui.js`      | UI state and profile rendering       |
| `main.js`    | Application logic and event handling |
| `README.md`  | Project documentation                |

---

# 🔐 Security & Simplicity

This application does not require:

* API keys
* Environment variables
* Backend server
* Database
* Authentication

It communicates directly with GitHub's public API from the browser.

The project is intentionally kept lightweight so the core JavaScript concepts remain visible and understandable.

---

# 👨‍💻 Author

**Ameer Hamza**

Software Engineering Student
Frontend Development Intern

**Registration Number:** `JUL26-FE13-45`

---

## 📌 Internship Context

**Frontend Development Internship**
**Phase 1 — Web Foundations and JavaScript Mastery**
**Module — Async JavaScript and Modules**

This project was created as part of practical internship learning focused on modern JavaScript, modular architecture, asynchronous programming and API integration.

---

## 📄 License

This project was created for educational and internship purposes.

You are welcome to study the implementation and use it as a reference for learning.

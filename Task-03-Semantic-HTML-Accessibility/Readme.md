# Nova Studio — Semantic HTML & Accessibility

A frontend accessibility improvement project completed during my **Frontend Development Internship at Appverse Technologies**.

The project focuses on transforming an existing div/span-based webpage into a more accessible and semantically structured website using **HTML5 semantic elements, ARIA attributes, keyboard accessibility, visible focus states, and accessible form validation**.

## 📌 Project Overview

The original **Nova Studio** webpage was visually functional but had several accessibility and semantic issues. The **Before** version relied heavily on `<div>` and `<span>` elements, clickable non-semantic elements, missing form labels, and limited keyboard accessibility.

The **After** version restructures the same interface using appropriate HTML5 elements and accessibility techniques while maintaining the overall purpose and functionality of the original design.

## 🔄 Before vs After

### Before

The original version contains several accessibility issues, including:

* Extensive use of `<div>` and `<span>` for page structure and interactive elements
* Navigation items implemented using non-semantic elements
* Buttons represented as clickable `<div>` elements
* Missing proper form labels
* Keyboard focus outlines disabled
* Limited accessibility information for interactive controls
* Low-contrast text in some areas
* No semantic page landmarks

### After

The improved version introduces:

* Semantic elements such as `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`
* Proper headings for page structure
* Real `<button>` elements for interactive controls
* Accessible navigation with appropriate ARIA information
* A **Skip to Main Content** link
* Visible keyboard focus states using `:focus-visible`
* Proper form labels and accessible input descriptions
* `aria-invalid` and error messaging for validation states
* `aria-live` status messaging for dynamic feedback
* Visually hidden content where additional screen-reader information is required
* Improved color contrast
* Responsive navigation behavior

## ♿ Accessibility Improvements

The project demonstrates several practical accessibility techniques, including:

### Semantic HTML5

The page structure was improved using meaningful semantic elements instead of relying entirely on generic containers. This helps browsers, assistive technologies, and developers better understand the structure of the page.

### Keyboard Accessibility

Interactive elements can be accessed using the keyboard, with visible focus indicators helping users understand which element currently has focus.

### Skip Link

A skip link allows keyboard and screen-reader users to bypass repeated navigation and move directly to the main content.

### ARIA Attributes

ARIA attributes are used where appropriate to communicate additional information about interactive elements and dynamic states.

Examples include:

* `aria-label`
* `aria-current`
* `aria-expanded`
* `aria-controls`
* `aria-invalid`
* `aria-describedby`
* `aria-live`

### Accessible Forms

The contact form includes proper labels, input descriptions, validation states, and error messaging to provide clearer feedback to users.

### Responsive Design

The improved interface also adapts to smaller screen sizes, including a mobile navigation menu controlled through an accessible button.

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* ARIA Accessibility Attributes
* Responsive Web Design

## 📂 Project Structure

```text
Nova-Studio-accessible/
│
├── before/
│   ├── index.html
│   └── style.css
│
└── after/
    ├── index.html
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── assets/
        ├── service-brand.svg
        ├── service-dev.svg
        ├── service-uiux.svg
        ├── work-finlytics.svg
        └── work-roam.svg
```

The **before** folder contains the original implementation, while the **after** folder contains the improved accessible version.

## 🚀 How to Run

No installation or external dependencies are required.

1. Clone or download the repository.
2. Open the `after` folder.
3. Open `index.html` in a modern web browser.
4. Use the navigation, form, and menu controls to explore the accessible implementation.

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

* Writing semantic HTML5
* Improving website accessibility
* Building keyboard-friendly interfaces
* Using ARIA attributes appropriately
* Creating accessible forms and validation feedback
* Implementing visible focus states
* Understanding the difference between visual design and accessible interaction
* Improving responsive navigation for different screen sizes

## 👨‍💻 Internship Project

**Developed by:** Ameer Hamza
**Role:** Frontend Developer Intern
**Organization:** Appverse Technologies

---

*This project was created for educational and internship purposes as a practical exercise in semantic HTML5 and web accessibility.*

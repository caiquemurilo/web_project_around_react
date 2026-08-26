# Around the U.S. - React Integration

This is a responsive web application developed as part of the TripleTen Software Engineering bootcamp. The project showcases a social networking style landing page where users can share photos of places they've visited, like posts, and edit their profiles.

Currently, the application has successfully transitioned from Vanilla JavaScript (OOP) to a modern, declarative approach using React and Vite.

🚧 **Current Status: Sprint 14 Complete** 
This iteration successfully integrated remote API communication, global state management via Context API, and complex state lifting. The application now fully syncs data with the server (user profiles, card creation, likes, and deletions). Real-time form validation is slated for the next development cycle.

## 🚀 Features (Current Iteration)

* **API Integration:** Full synchronization with a remote backend to fetch and update user profiles, avatars, and card lists.
* **Global State Management:** Implementation of React's Context API (`CurrentUserContext`) to broadcast user data globally without prop drilling.
* **Advanced State Lifting:** State and event handlers for card arrays were elevated to the `App` component to allow dynamic updating and rendering of new user-generated content.
* **Controlled & Uncontrolled Components:** Forms were refactored to utilize React state (`useState`) for real-time input tracking and DOM Refs (`useRef`) for specific data captures.
* **Interactive UI:** Full support for adding new places, liking/unliking cards, deleting posts, and editing profile details, with automatic UI re-rendering upon successful API responses.
* **Responsive Design:** The layout remains fully responsive, optimized for desktop, tablet, and mobile devices, preserving the original BEM CSS methodology.

## 🛠️ Technologies Used

* **React (v18+):** Functional components, Hooks (`useState`, `useEffect`, `useContext`, `useRef`), and Context API.
* **Vite:** Next-generation frontend tooling used for fast scaffolding, local development, and optimized building.
* **JavaScript (ES6+ / JSX):** Modern JS syntax merged with HTML-like structures for component rendering and asynchronous API calls (`async/await`).
* **HTML5 & CSS3:** Semantic structure and modular styling using Flexbox, Grid, and BEM methodology.

## 🔧 Installation and Setup

Since this project is now built with Vite and React, the setup process requires Node.js.

**1. Clone the repository:**

```bash
git clone https://github.com/caiquemurilo/web_project_around_react.git
cd web_project_around_react
```

**2. Install dependencies:**

```bash
npm install
```

**3. Run the development server:**

```bash
npm run dev
```

The project will automatically open in your default browser (at `http://localhost:3000`).

## 📝 Development Roadmap & Learning Objectives

This project is built iteratively. Below is the progression of skills and architectural patterns applied in each sprint.

### Sprint 14: API Integration & Global State
* **Asynchronous JavaScript in React:** Managing `useEffect` hooks to handle initial API fetching without causing infinite render loops.
* **React Context API:** Architecting global state to distribute user data efficiently across deep component trees.
* **Lifting State Up:** Moving state from child components (`Main`) to parent components (`App`) to share data and behavior across parallel UI elements (like Popups).
* **Component Architecture:** Differentiating between controlled components (tied to React state) and uncontrolled components (using refs) for form submission.
* **Data Immutability:** Updating arrays and objects in React using functional state updates, `.map()`, and `.filter()` to ensure predictable UI changes.

### Sprint 13: UI Componentization & Local State
* **React Fundamentals:** Transitioning from procedural DOM manipulation (Vanilla JS) to declarative rendering using JSX.
* **Componentization:** Breaking down a monolithic HTML file into modular, reusable, and isolated UI pieces.
* **Data Flow:** Understanding unidirectional data flow by passing props from parent to child components.
* **Modern Tooling:** Setting up and configuring a React environment from scratch using Vite.

---

_Developed by Caique Murilo Sacramento_

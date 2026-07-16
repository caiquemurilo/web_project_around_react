# Around the U.S. - React Refactoring

This is a responsive web application developed as part of the TripleTen Software Engineering bootcamp. The project showcases a social networking style landing page where users can share photos of places they've visited, like posts, and edit their profiles.

Currently, the application is undergoing a major structural refactoring. The codebase is being migrated from Vanilla JavaScript (OOP) to a modern, declarative approach using **React** and **Vite**.

> 🚧 **Current Status: Work in Progress (Sprint 13)**
> This iteration focuses strictly on UI componentization and local state management. Features such as form validation, remote API integration, and database synchronization are temporarily disabled and will be implemented in the upcoming development cycle (Sprint 14).

## 🚀 Features (Current Iteration)

- **Component-Based Architecture**: The UI has been entirely broken down into reusable React functional components (e.g., `Header`, `Main`, `Footer`, `Card`, `Popup`).
- **State Management**: Implementation of React Hooks (`useState`) to handle dynamic rendering, such as opening and closing modal overlays.
- **Mock Data Rendering**: Dynamic rendering of image cards using array mapping and JSX.
- **Responsive Design**: The layout remains fully responsive, optimized for desktop, tablet, and mobile devices, preserving the original BEM CSS methodology.

## 🛠️ Technologies Used

- **React (v18+)**: Functional components and Hooks for declarative UI building.
- **Vite**: Next-generation frontend tooling used for fast scaffolding, local development, and optimized building.
- **JavaScript (ES6+ / JSX)**: Modern JS syntax merged with HTML-like structures for component rendering.
- **HTML5 & CSS3**: Semantic structure and modular styling using Flexbox, Grid, and BEM methodology.

## 🔧 Installation and Setup

Since this project is now built with Vite and React, the setup process requires Node.js.

**1. Clone the repository:**

```bash
git clone https://github.com/caiquemurilo/web_project_around_pt.git
cd web_project_around_pt
```

**2. Install dependencies:**

```bash
npm install
```

**3. Run the development server:**

```bash
npm run dev
```

The project will automatically open in your default browser (usually at `http://localhost:3000`).

## 📝 Learning Objectives

During this specific phase of development, the core focus was on:

- **React Fundamentals**: Transitioning from procedural DOM manipulation to declarative rendering using JSX.
- **Componentization**: Breaking down a monolithic HTML file into modular, reusable, and isolated UI pieces.
- **Data Flow**: Understanding unidirectional data flow by passing `props` from parent to child components.
- **Modern Tooling**: Setting up and configuring a React environment from scratch using Vite.

---

_Developed by Caique Murilo Sacramento_

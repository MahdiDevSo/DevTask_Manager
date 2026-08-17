# DevTask Developer Task Management Dashboard

**DevTask** is a modern developer task management dashboard built with **React 18** and **Vite**. It provides a focused workspace for creating, prioritizing, searching, filtering, and tracking development tasks.

The application uses a responsive Glassmorphism-based interface, Light/Dark theme support, and browser persistence through `localStorage`.

## Features

* Task creation and deletion
* Task completion tracking
* High, Medium, and Low priority management
* Real-time task search
* Status and priority filtering
* Productivity and task statistics
* Light/Dark theme switching
* Persistent task data with `localStorage`
* Responsive desktop, tablet, and mobile UI
* Modular React component architecture

## Tech Stack

* **React 18** — UI and component architecture
* **JavaScript (ES6+)** — Application logic and state management
* **Vite** — Development and production build tooling
* **CSS3** — Responsive design, themes, animations, and Glassmorphism
* **LocalStorage API** — Client-side persistence

## Project Structure

```text
devtask/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── TaskStats.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskFilters.jsx
│   │   ├── TaskList.jsx
│   │   └── TaskItem.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Requirements

* Node.js 16+
* npm

Check your installation:

```bash
node -v
npm -v
```

### Installation

Clone the repository:

```bash
git clone https://github.com/MahdiDevSo/DevTask_Manager.git
cd DevTask_Manager
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Application Architecture

DevTask follows a component-based React architecture.

### App

Centralizes application state and coordinates:

* Tasks
* Theme
* Search
* Filters
* Task operations
* LocalStorage synchronization
* Derived statistics

### TaskForm

Handles task creation and priority selection.

### TaskFilters

Provides real-time search and task filtering by priority and status.

### TaskList

Renders the current filtered task collection and empty states.

### TaskItem

Handles individual task interactions, including completion and deletion.

### TaskStats

Displays real-time task and productivity metrics.

### Header

Provides application branding and theme controls.

## Data Persistence

DevTask currently uses browser `localStorage` for persistence.

Task data is stored locally, allowing users to retain their tasks after refreshing or reopening the browser.

> This version does not use a backend database or user authentication. For production deployment with multiple users, a secure backend and database would be required.

## Roadmap

* [ ] Task editing
* [ ] Due dates and reminders
* [ ] Task categories and tags
* [ ] Drag-and-drop task organization
* [ ] Import and export
* [ ] User authentication
* [ ] REST API
* [ ] Cloud database
* [ ] Team workspaces
* [ ] Role-based access control
* [ ] Real-time collaboration
* [ ] Notifications
* [ ] Activity history
* [ ] Production analytics

## Contributing

Contributions are welcome.

```bash
git checkout -b feature/your-feature
git add .
git commit -m "feat: add your feature"
git push origin feature/your-feature
```

Then open a Pull Request with a clear description of your changes.

## Author

**MahdiDevSo**

GitHub: https://github.com/MahdiDevSo



---

**DevTask — Plan. Prioritize. Build.**

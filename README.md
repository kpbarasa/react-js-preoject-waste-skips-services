#React waste management services selection
A responsive React application that allows users to select skip bin services through a multi-step form. It includes features like dynamic skip listings, context-driven data sharing, custom UI components, and mobile-first responsive design.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## 🚀 Features
🌍 Step-by-step waste service selection flow (e.g., postcode → waste type → skip size)

⚛️ React Context API for global state management

📦 Modular components for cards, UI, navigation, and layout

🧱 Styled using TailwindCSS and custom CSS modules

📱 Fully responsive with mobile-first design

📡 Simulated API fetch with structured skips data


## 🗂️ File Structure Overview
        src/
        ├── App.js                  # Root component that initializes context & layout
        ├── index.js                # Entry point for ReactDOM rendering

        ├── components/             # Reusable UI components
        │   ├── collapse-btn.jsx
        │   ├── main-body.jsx
        │   ├── nav-menu.jsx
        │   ├── cards/              # Card UI components for skips
        │   │   ├── alert.jsx
        │   │   ├── body.jsx
        │   │   ├── container.jsx
        │   │   ├── footer.jsx
        │   │   ├── header.jsx
        │   │   └── index.jsx

        ├── pages/                  # Page layout components
        │   ├── back-to-top-btn.jsx
        │   ├── content.jsx
        │   ├── index.jsx
        │   ├── sub-title.jsx
        │   └── title.jsx

        ├── data/
        │   └── api.jsx             # Simulated API data fetching

        ├── hooks/

        ├── context/
        │   └── context_skips_provider.jsx  # React Context provider for skips

        ├── pages/
        │   └── service-selection/
        │       ├── service-selection.jsx
        │       └── skips/
        │           ├── index.jsx          # Skip listing with selection logic
        │           └── skips-select.jsx   # Selection confirmation & navigation

        ├── styles/                 # Custom stylesheets
        │   ├── buttons.css
        │   ├── card.css
        │   ├── fonts.css
        │   ├── layout.css
        │   ├── nav_menu.css
        │   ├── selected.css
        │   ├── styles.jsx
        │   └── transitions.css


## Key Strategies

Break large UI blocks into logical, encapsulated components.

Apply Tailwind for styling with custom utility overrides when needed.

Apply animations (slide/fade) using CSS keyframes.

Make card components more informative and interactive.

Use conditional rendering with animations for smoother UI transitions.

Example: NavMenu

Fixed when scrolling past threshold.

Uses fade-in-down animation triggered by isFixed state.

Highlights active step.

Example: SkipSelectComponent

Collapsible info panel on mobile.

Expanded info panel on larger screens.

Conditional animations when selected is truthy.

## Process

Rebuild the layout by breaking it into well-scoped components.

Introduce subcomponents for collapsible areas, nav items, cards.

Preserve functionality while enhancing interactivity.

Improve maintainability with a flat, organized file structure.

Refactor styles into modular, themeable Tailwind-based utility files.

Introduce animation hooks for visual clarity and smoothness.

Iterate on card design to provide more useful info to users.

## 📦 Dependencies
    Make sure the following libraries are installed:

        * bash
        * Copy
        * Edit
        * npm install react react-dom react-icons
    
    This project may also use:
        * TailwindCSS (for utility-first styling)
        * React Icons (e.g., TbTruckDelivery, GiWeight)
        * React Context API (for global skip state management)


## 🧑‍💻 How to Run
Clone the repo:
        - git clone https://github.com/your-repo/skip-selector-app.git

    Install dependencies:
        - npm install

    Start the development server:
        - npm start

    Navigate to http://localhost:3000 in your browser.


## 📁 Simulated API
Inside data/api.jsx, you'll find mocked fetch logic that supplies the application with skip data. Replace or expand this with a real API as needed.

### 🔧 Development Notes
    Component-driven structure makes each part independently testable and reusable.

    Steps logic is handled in SkipsPageComponent, currently hardcoded to skip step 2.

    CollapseComponent enables mobile-friendly toggle behavior.

    Context state (skips, loading) is handled in context_skips_provider.jsx.

### 🧪 Testing
    Basic test files exist (App.test.js). Extend these using Jest or React Testing Library for full coverage.

### 📃 License
    This project is open source and free to use under the MIT License.
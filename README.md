# Getting Started with Create React App
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
graphql
Copy
Edit
src/
│
├── App.js                    # Root component that initializes context & layout
├── index.js                  # Entry point for ReactDOM rendering
│
├── components/               # Reusable UI components
│   ├── collapse-btn.jsx
│   ├── main-body.jsx
│   ├── nav-menu.jsx
│   ├── cards/                # Card UI components for skips
│   │   ├── alert.jsx
│   │   ├── body.jsx
│   │   ├── container.jsx
│   │   ├── footer.jsx
│   │   ├── header.jsx
│   │   └── index.jsx
│   └── pages/                # Page layout components
│       ├── back-to-top-btn.jsx
│       ├── content.jsx
│       ├── index.jsx
│       ├── sub-title.jsx
│       └── title.jsx
│
├── data/
│   └── api.jsx               # Simulated API data fetching
│
├── hooks/
│   └── context/
│       └── context_skips_provider.jsx  # React Context provider for skips
│
├── pages/
│   └── service-selection/
│       ├── service-selection.jsx
│       └── skips/
│           ├── index.jsx             # Skip listing with selection logic
│           └── skips-select.jsx      # Selection confirmation & navigation
│
└── styles/                  # Custom stylesheets
    ├── buttons.css
    ├── card.css
    ├── fonts.css
    ├── layout.css
    ├── nav_menu.css
    ├── selected.css
    ├── styles.jsx
    └── transitions.css


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

bash
Copy
Edit
npm install react react-dom react-icons
This project may also use:

TailwindCSS (for utility-first styling)

React Icons (e.g., TbTruckDelivery, GiWeight)

React Context API (for global skip state management)


## 🧑‍💻 How to Run
Clone the repo:

bash
Copy
Edit
git clone https://github.com/your-repo/skip-selector-app.git
cd skip-selector-app
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm start
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



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

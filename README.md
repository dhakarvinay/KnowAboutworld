🌍 Know The World With Me

A React.js Based Informational Web Application

Live Site: https://knowtheworldwithme.netlify.app/

GitHub Repo: https://github.com/dhakarvinay/KnowAboutworld/tree/main

📖 Overview

Know The World With Me is a simple, elegant, and interactive web application built using React.js.
It allows users to explore and learn about different countries around the world—covering details like population, language, capital, region, flags, and more.

The project is designed for learners who want practical experience in:
✔ React fundamentals
✔ Fetching data from APIs
✔ Component-based architecture
✔ Clean UI development
✔ Deployment using Netlify

✨ Features
🔹 1. Global Country Search

Browse all countries of the world.

Search instantly by country name using a responsive search bar.

🔹 2. Country Details Page

Each country card displays:

Flag

Country name

Capital

Region

Population

Languages (if available)

Provides a quick and comprehensive overview of each nation.

🔹 3. Fast & Responsive UI

Built using React components for smooth performance.

Mobile-responsive layout using CSS & Flexbox/Grid.

🔹 4. Real-time Data Fetching

Uses REST Countries API to fetch live and accurate data.

Implemented using fetch() or Axios (whichever used in your project).

🔹 5. Clean Project Structure

Organized in reusable components (Cards, Navbar, SearchBar, etc.)

Easy to modify and extend.

🛠️ Tech Stack & Tools
Frontend

React.js 18+

JavaScript (ES6+)

HTML5 & CSS3

React Hooks (useState, useEffect)

Conditional Rendering

Reusable Components

API

REST Countries API
Fetches real-time global data for display.

Deployment

Netlify (Continuous Deployment, Build Optimization)

📂 Folder Structure (Simplified)
KnowAboutWorld/
│
├── src/
│   ├── components/
│   │   ├── CountryCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   └── CountryDetails.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── index.js
│   └── App.css
│
├── public/
│   └── index.html
│
└── package.json

🚀 How It Works
Step 1: Fetch Country Data

On page load, the app sends a request to the REST Countries API.

Data is stored in state using useState.

Step 2: Render Country Cards

All countries are mapped into UI cards.

Step 3: Search Filter

Search bar filters data in real time using onChange.

Step 4: Routing (If present)

Clicking on a country loads detailed information.

🧪 How to Run Locally
# Clone the repository
git clone https://github.com/dhakarvinay/KnowAboutworld.git

# Navigate into the project
cd KnowAboutworld

# Install dependencies
npm install

# Start development server
npm start
Now open http://localhost:3000
 in your browser 🚀
 🎯 Future Improvements

Dark/Light theme

Sorting by population, region, etc.

Pagination

Caching API data

Country comparison feature

🤝 Contribution

Feel free to fork, raise issues, or submit pull requests!

⭐ Show Your Support

If you like the project, consider giving the repo a star ⭐ on GitHub!

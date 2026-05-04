# BE5 Event Management Website

A premium, full-stack event management platform built using the MERN stack (MongoDB, Express, React, Node.js). 

This application offers a modern, luxurious interface for users to explore event services, compare packages, and use a custom interactive planner to estimate their event costs in real-time.

---

## 🏗️ Architecture

The project is structured as a complete Client-Server application:

- **/client**: The frontend application built with React, Vite, and Tailwind CSS.
- **/server**: The backend API built with Node.js, Express, and MongoDB.

### Tech Stack
* **Frontend**: React 18, Vite, Tailwind CSS v4, Framer Motion, React Router v7
* **Backend**: Node.js, Express.js, Mongoose
* **Database**: MongoDB

---

## ✨ Key Features

1. **Premium UI/UX Design**: Uses deep purple and gold accents, glassmorphism, and subtle micro-animations for a high-end feel.
2. **Dynamic Service Listings**: Browse through specialized services like Wedding Planning, Pre-Wedding Shoots, and Corporate Events.
3. **Interactive Package Comparison**: Compare Basic, Medium, Premium, and Luxury packages side-by-side.
4. **Custom Event Planner (Cost Estimator)**: A multi-step interactive form where users can select their event type, guest count, location tier, and add-on services. The backend calculates a live estimate and suggests the best package.

---

## 🚀 Getting Started

Follow these instructions to run the application locally.

### Prerequisites
* [Node.js](https://nodejs.org/) (v16 or higher)
* [MongoDB](https://www.mongodb.com/try/download/community) running locally on default port `27017`

### 1. Backend Setup

Open a terminal and navigate to the `server` directory:

```bash
cd server
```

Install dependencies:
```bash
npm install
```

Seed the database (Run this once to populate initial packages and pricing rules):
```bash
node src/data/seed.js
```

Start the development server:
```bash
npm run dev
```
*(The API will run on `http://localhost:5000`)*

### 2. Frontend Setup

Open a **new** terminal window and navigate to the `client` directory:

```bash
cd client
```

Install dependencies:
```bash
npm install
```

Start the Vite development server:
```bash
npm run dev
```
*(The frontend will run on `http://localhost:5173`)*

---

## 📂 Folder Structure

### Backend (`/server`)
\`\`\`
server/
├── src/
│   ├── config/          # Database connection
│   ├── controllers/     # Route logic (Planner, Packages)
│   ├── data/            # DB seed scripts
│   ├── middleware/      # Global error handlers
│   ├── models/          # Mongoose Schemas (Package, PricingRule)
│   └── routes/          # Express API routes
├── .env                 # Environment variables
└── server.js            # Express entry point
\`\`\`

### Frontend (`/client`)
\`\`\`
client/
├── src/
│   ├── assets/          # Images, logos, icons
│   ├── components/      # Reusable React components (UI pieces)
│   ├── context/         # React Context (Global state)
│   ├── data/            # Static UI constants
│   ├── hooks/           # Custom React hooks (e.g., usePlanner)
│   ├── pages/           # Main page components
│   ├── routes/          # React Router definitions
│   ├── App.jsx          # Root component
│   └── index.css        # Tailwind directives and global styles
├── index.html           # HTML entry point
└── vite.config.js       # Vite configuration
\`\`\`

---

## 🛡️ License

This project is licensed under the MIT License.

# 🎮 GameHub – Video Game Discovery App

GameHub is a web application built with React, TypeScript, and Vite.  
The application uses the RAWG Video Games API to display and filter video games.

It allows users to browse games, search by name, filter by genre and platform, and sort results dynamically.

---

## 🚀 Features

- 🔎 Search games by name
- 🎭 Filter by genre
- 🕹️ Filter by parent platform
- ⬇️ Sort games (e.g., by relevance, date, rating)
- 🌙 Dark / Light mode toggle
- 📱 Responsive layout

---

## 🛠️ Tech Stack

- React
- TypeScript
- Vite
- Chakra UI
- Axios
- RAWG API

---

## 🏗️ Project Structure

- Custom reusable hooks (`useGames`, `useGenres`, `usePlatforms`)
- Centralized query state (`gameQuery`)
- API requests handled through a shared Axios client
- Modular component structure

---

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/stralest/Game-hub.git

Navigate into the project directory:

cd game-hub


Install dependencies:

npm install


Start development server:

npm run dev
```

---

##🔑 API Configuration

This project uses the RAWG API.

To run it locally, you need to generate your own API key from:

https://rawg.io/apidocs

Then add the key inside:

services/api-client.ts

---

##🧠 What I Learned

Creating reusable custom React hooks

Managing shared query state in a scalable way

Server-side filtering using query parameters

Difference between ?? and ||

Controlled vs uncontrolled components

Handling asynchronous requests with Axios

Clean and maintainable component structure

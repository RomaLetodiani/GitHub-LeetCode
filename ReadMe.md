# Github & Leetcode

This repository contains a full-stack application built with React on the frontend and Node.js on the backend. The application fetches data from LeetCode and GitHub GraphQL APIs to display user profile statistics and calendar activities.

## Features

- **Frontend**:
  - Built with React.
  - Utilizes React Query for efficient data fetching.
  - Displays statistics about user profiles.
  - Shows calendar activities related to GitHub contributions.

- **Backend**:
  - Built with Node.js.
  - Fetches data from LeetCode and GitHub GraphQL APIs.
  - Serves as an intermediary due to CORS issues encountered with direct frontend requests.

## Directories

- **frontend/**: Contains the React frontend application.
- **backend/**: Houses the Node.js backend server.

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/your-username/github-leetcode.git
   cd github-leetcode
   ```

2. Install dependencies for both frontend and backend:
   ```
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Start the backend server:
   ```
   npm start
   ```

4. Start the frontend application:
   ```
   cd ../frontend
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Notes

- Ensure you have Node.js and npm installed on your machine.
- This setup assumes you have valid API credentials for LeetCode and GitHub GraphQL APIs.
- Adjust CORS settings as necessary in production environments.
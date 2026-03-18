# Job Listings Dashboard

This project is a simple Job Listings web application built using React and Vite. It renders a clean dashboard of various job postings using reusable React components.

## Project Overview

The main functionality of this project is to display a list of job opportunities. It maps over an array of job data and renders each job using a custom `Card` component. 

Features displayed on each job card include:
- **Brand Logo:** The logo of the hiring company.
- **Company Name:** Google, Amazon, Meta, Apple, etc.
- **Date Posted:** How long ago the job was posted.
- **Job Title:** Frontend Developer, UI/UX Designer, React Developer, etc.
- **Job Tags:** Tags indicating the type of job (e.g., Full Time, Part Time) and experience level (e.g., Junior, Mid, Senior).
- **Pay Rate:** Hourly compensation details.
- **Location:** The geographic location of the job, including remote options.

## Technology Stack

- **React (`^19.2.0`)**: Used for building the user interface with functional components and hooks.
- **Vite (`^7.3.1`)**: A fast frontend build tool providing an extremely fast development environment.
- **Vanilla CSS**: Used for styling the application elements.
- **React Icons (`^5.5.0`)**: Used for rendering sleek vector icons within the application UI.

## Getting Started

Follow these steps to run the application on your local machine:

### Prerequisites

You need to have Node.js and npm (or another package manager like yarn/pnpm) installed.

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the local URL provided by Vite (typically `http://localhost:5173`).

### Building for Production

To create a production build of the project, run:
```bash
npm run build
```
This will compile and minify the application into the `dist` folder. If you want to preview the production build locally, you can run:
```bash
npm run preview
```

## Project Structure

- `src/App.jsx`: The main entry point for the UI, containing the job data array and rendering the list.
- `src/Component/Card.jsx`: A reusable UI component responsible for displaying individual job information.
- `src/index.css`: Global styles for the application.
- `package.json`: Contains project metadata, scripts, and dependencies.

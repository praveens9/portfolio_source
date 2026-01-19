# Project Context: Portfolio Source

## Overview
This directory contains the source code for **Praveen Shankar's Engineering Portfolio**, a static website designed to showcase his career timeline, technical achievements, and personal lab projects. The application is built using standard HTML, CSS, and vanilla JavaScript, emphasizing simplicity and performance without the need for complex build chains.

## Key Components

### 1. Structure (`index.html`)
The entry point of the application. It defines the layout:
*   **Header:** Navigation and personal branding.
*   **About Section:** Professional summary and key skills.
*   **Timeline Section (`#timelinee`):** A container (`#timeline`) where the dynamic timeline is rendered.
*   **Lab Section:** A collapsible list of personal experimental projects.

### 2. Logic (`js/`)
*   **`js/custom-timeline.js`**: The core rendering engine.
    *   **Data Fetching:** Asynchronously fetches `Final_Timeline_Data.json` and `Yearly_Highlights.json`.
    *   **Data Processing:** Sorts projects by end date, groups them by year, and merges them with hardcoded `MILESTONES` and `LEARNING_JOURNEY` data defined within the script.
    *   **DOM Manipulation:** dynamically generates HTML for year headers, milestones, learning cards, and project entries.
    *   **Interactions:** Handles click events to open detailed modal cards for timeline items.
*   **`js/main.js`**: Contains initialization logic and potentially legacy/fallback timeline data.
*   **`js/scroll-reveal.js`**: likely handles scroll animations (inferred).

### 3. Data Sources
*   **`Final_Timeline_Data.json`**: The primary dataset for project entries.
    *   *Schema:* `project` (string), `period` (start/end ISO strings), `summary` (array of strings), `technologies` (categorized object), `role` (string).
*   **`Yearly_Highlights.json`**: Contains high-level summaries for each year.

### 4. Deployment
*   **`push_to_personal.sh`**: A utility script to deploy the portfolio to a public GitHub repository.
    *   Prompts for GitHub credentials (Username, PAT).
    *   Initializes a git repo (if needed).
    *   Creates the repo via GitHub API if it doesn't exist.
    *   Pushes the `main` branch to the remote `origin`.

## Usage
1.  **Development:** simply open `index.html` in a modern web browser. No local server is strictly required, though recommended to avoid CORS issues with fetching JSON files (e.g., use `python3 -m http.server`).
2.  **Content Updates:**
    *   To add a project: Update `Final_Timeline_Data.json`.
    *   To add a yearly highlight: Update `Yearly_Highlights.json`.
    *   To add a milestone or learning skill: Edit the `MILESTONES` or `LEARNING_JOURNEY` constants in `js/custom-timeline.js`.
3.  **Deployment:** Run `./push_to_personal.sh` from the terminal and follow the prompts.

## Conventions
*   **No Build Step:** The project uses native browser technologies. CSS is loaded directly.
*   **Hardcoded Constants:** Some data (Milestones, Learning Journey) is currently hardcoded in `js/custom-timeline.js` rather than being in external JSON files.
*   **Visual Style:** The design uses a "timeline" metaphor with dots and connector lines, alternating left and right alignment.

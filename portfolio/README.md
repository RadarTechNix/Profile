# Portfolio Website - Nikhil Navghade

A responsive, single-page portfolio website built with **React**, **Vite**, and **Tailwind CSS**.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/repo-name.git
    cd repo-name
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start local development server:
    ```bash
    npm run dev
    ```

4.  Build for production:
    ```bash
    npm run build
    ```

## 📝 Updating Content

The content is decoupled from the code and stored in JSON files in `src/data/`. You can edit these files directly to update your portfolio without changing the React components.

-   **Profile Info**: `src/data/profile.json` (Name, Title, Links, Summary)
-   **Experience**: `src/data/experience.json` (Work history)
-   **Projects**: `src/data/projects.json` (Portfolio items)
-   **Skills**: `src/data/skills.json` (Skills list)

## 🎨 Customization

-   **Themes**: The site supports Dark and Light modes (system preference by default, with a toggle).
-   **Colors**: Primary color is configured in `tailwind.config.js` (default: Sky-500).
-   **Styles**: Global styles are in `src/index.css`.

## 📦 Deployment

### GitHub Pages
This repository is configured with a **GitHub Actions** workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the site to GitHub Pages whenever you push to the `main` branch.

**To enable:**
1.  Go to your GitHub repository **Settings**.
2.  Navigate to **Pages** (in the sidebar).
3.  Under **Build and deployment** > **Source**, select **GitHub Actions**.
4.  Push a commit to `main`, and the action will trigger.

## 📄 License
Apache-2.0 license

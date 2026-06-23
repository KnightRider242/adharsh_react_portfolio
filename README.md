# Adharsh S Mathew — React Portfolio CV

A modern, menu-based React portfolio website built as a personal webpage CV for **Adharsh S Mathew**.

<p align="center">
  <img src="https://img.shields.io/badge/React-Portfolio-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-Fast%20Build-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/GitHub%20Pages-Deployable-222222?style=for-the-badge&logo=github&logoColor=white" />
</p>

## Live Demo

After GitHub Pages is enabled, the site will be available at:

```text
https://knightrider242.github.io/adharsh_react_portfolio/
```

## About this project

This project is designed as a clean personal portfolio and webpage CV. It presents education, work experience, projects, technical skills, publication, travel interests, and contact details in a visually polished single-page website.

The page is built to feel more like a real portfolio than a normal resume. It includes a sticky menu, smooth sections, dark/light mode, cards, timeline blocks, and responsive styling for mobile screens.

## Main sections

- Hero section with open-to-roles message
- About section
- Education timeline
  - CBSE Class X / AISSE — completed March 2017
  - CBSE Class XII / AISSCE — completed March 2019, score 87%
  - B.Tech Computer Science and Engineering — Amrita Vishwa Vidyapeetham
  - M.Sc. Computer Science — University of Stuttgart
- Professional experience at TCS
- Projects and IEEE publication
- Skills and technologies
- Travel / places visited section with Google Maps links
- Contact section
- Dark/light mode toggle
- Responsive design

## Tech stack

| Area | Tools |
| --- | --- |
| Frontend | React, Vite |
| Styling | CSS3, responsive layout, custom design system |
| Icons | Lucide React |
| Deployment | GitHub Pages + GitHub Actions |
| Data management | Editable profile data file |

## Project structure

```text
adharsh_react_portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
├── src/
│   ├── data/
│   │   └── profile.js
│   ├── App.jsx
│   ├── main.jsx
│   └── style.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Run locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal.

## Build locally

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Edit your details

Most personal content is stored in:

```text
src/data/profile.js
```

Update this file to change:

- Education details
- School names
- Projects
- Skills
- Work experience
- Travel places
- Contact links
- Open-to-role text

## Deploy to GitHub Pages

This repository includes a GitHub Actions workflow:

```text
.github/workflows/deploy.yml
```

The workflow automatically builds and deploys the site whenever changes are pushed to the `main` branch.

### One-time GitHub Pages setting

In the GitHub repository:

1. Go to **Settings**.
2. Open **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Save the setting.
5. Push a commit or manually run the workflow from the **Actions** tab.

The Vite base path is already configured in:

```text
vite.config.js
```

```js
base: '/adharsh_react_portfolio/'
```

## Public website note

This is a public portfolio website. Before sharing it widely, review `src/data/profile.js` and remove anything you do not want public, such as phone number, private address, or sensitive personal details.

## Future improvements

- Add a professional profile photo in `public/`.
- Add downloadable PDF CV button.
- Add certificate links.
- Add real project screenshots.
- Add more GitHub project links.
- Convert travel history from a cleaned Google Timeline export into a richer places section.

## Author

**Adharsh S Mathew**  
M.Sc. Computer Science student at the University of Stuttgart  
Former Systems Engineer at Tata Consultancy Services

GitHub: [KnightRider242](https://github.com/KnightRider242)  
LinkedIn: [Adharsh Siby Mathew](https://www.linkedin.com/in/adharsh-siby-mathew-463439205/)

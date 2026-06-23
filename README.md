# Adharsh S Mathew — React Portfolio CV

A polished menu-based React webpage CV / portfolio project.

## What is included

- Sticky responsive menu/navbar
- Dark/light mode toggle
- Hero section with open-to-roles banner
- About section
- Full education timeline
  - CBSE Class X / AISSE, completed March 2017
  - CBSE Class XII / AISSCE, completed March 2019, score 87%
  - B.Tech CSE, Amrita Vishwa Vidyapeetham
  - M.Sc. Computer Science, University of Stuttgart
- TCS professional experience
- Projects and publication cards
- Skills section
- Travel / places visited section with Google Maps links
- Google Maps Timeline import workflow card
- Contact section
- Mobile responsive CSS

## How to run locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal.

## How to edit your details

Most content is stored in:

```text
src/data/profile.js
```

Edit this file to update:

- School names for CBSE 10th and 12th
- CBSE 10th percentage/CGPA
- More projects
- More travel places
- Contact links
- Open roles
- Skills



## Important public website note

The phone number is currently included in the contact section. Remove it from `src/data/profile.js` if you do not want your phone number visible online.

## How to deploy

### Netlify

1. Upload this folder to GitHub.
2. Connect the repository in Netlify.
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

Use Vite deployment steps or deploy the `dist` folder after running:

```bash
npm run build
```

## Suggested next improvements

- Add your real photo to `public/` and replace the initials avatar.
- Add certificates as downloadable PDFs.
- Add project GitHub links for each project.
- Add a downloadable PDF CV button.
- Upload a cleaned Google Timeline export and generate a richer travel section.

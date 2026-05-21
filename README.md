# TrimTechBR GitHub Pages Website

Static website package for the `trimtechbr.github.io` GitHub Pages site.

## Structure

```text
/
├── index.html
├── about.html
├── contact.html
├── solutions/
│   ├── index.html
│   └── azure-observability-report.html
├── docs/
│   ├── getting-started.html
│   ├── contribution-guide.html
│   └── roadmap.html
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── img/
```

## Publish

Create a GitHub repository named `trimtechbr.github.io` under the TrimTechBR organization, copy these files to the repository root, then push to the `main` branch.

```bash
git add .
git commit -m "Create TrimTechBR GitHub Pages website"
git push origin main
```

## Customize

- Replace placeholder GitHub links with specific repository URLs.
- Add more projects under `solutions/`.
- Add screenshots and diagrams under `assets/img/`.
- Update roadmap and documentation pages as projects evolve.

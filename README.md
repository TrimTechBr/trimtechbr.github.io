# TrimTechBR GitHub Pages Website

Static website package for the `trimtechbr.github.io` GitHub Pages site. It is the portfolio and
documentation hub for TrimTechBR, home of **AER — Azure Estate Report**.

For now everything is open source. TrimTechBR is a personal initiative by two friends (Henderson Andrade
and Henrique Mizael), building and open-sourcing tools in their spare time. Solution cards carry an
`Open Source` badge. (A `Product` badge style is kept in the CSS in case proprietary offerings are added later.)

The site is bilingual: each page has an English version (`*.html`) and a Brazilian Portuguese version
(`*.pt-br.html`), with an EN / PT switcher in the header.

## Structure

```text
/
├── index.html / index.pt-br.html
├── about.html / about.pt-br.html
├── contact.html / contact.pt-br.html
├── solutions/
│   ├── index.html / index.pt-br.html
│   └── aer.html / aer.pt-br.html
├── docs/
│   ├── getting-started.html / getting-started.pt-br.html
│   ├── usage.html / usage.pt-br.html
│   ├── report-reference.html / report-reference.pt-br.html
│   ├── architecture.html / architecture.pt-br.html
│   └── contribution-guide.html / contribution-guide.pt-br.html
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── img/
        ├── (brand + illustrations)
        └── aer/  (AER report screenshots)
```

## Publish

Create a GitHub repository named `trimtechbr.github.io` under the TrimTechBR organization, copy these files
to the repository root, then push to the `main` branch.

```bash
git add .
git commit -m "Update TrimTechBR GitHub Pages website"
git push origin main
```

## Customize

- Update the AER solution and docs pages as the project evolves (keep EN and PT-BR in sync).
- Add more projects under `solutions/` following the AER page pattern.
- Add screenshots and diagrams under `assets/img/` (AER screenshots live in `assets/img/aer/`).
- Update the documentation pages as the project evolves.

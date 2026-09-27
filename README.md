# Milad Sefidyan: personal website

CV, projects, education and blog in **English**, **Italian** and **Persian**:
<https://milad-sefidyan.pages.dev/>

Built with [Hugo](https://gohugo.io/) (no theme, no plugins) and hosted for free on [Cloudflare Pages](https://pages.cloudflare.com/). Cloudflare rebuilds and publishes the site every time `main` changes on GitHub.

## Where things live

| What | File |
| --- | --- |
| CV: profile, experience, education, research, skills, certifications, languages | `data/cv/en.yaml`, `it.yaml`, `fa.yaml` |
| Projects | `data/projects/en.yaml`, `it.yaml`, `fa.yaml` |
| Home page text | `content/_index.md`, `_index.it.md`, `_index.fa.md` |
| Intro text of the Projects, Education and Blog pages | `content/projects*.md`, `content/education*.md`, `content/posts/_index*.md` |
| Blog posts | `content/posts/` |
| Menu and button labels | `i18n/en.toml`, `it.toml`, `fa.toml` |
| Email, LinkedIn, GitHub, header tagline, site address | `hugo.toml` |
| Photo | `assets/images/milad.jpg` (replace the file to change it) |
| Design | `assets/css/main.css` |

You can edit any of these directly on github.com: open the file, click the pencil icon, then **Commit changes**. The site updates about a minute later.

## Writing a blog post

Create a file in `content/posts/`, for example `content/posts/eu-sustainability-rules.md`:

```markdown
---
title: "What the new EU sustainability rules mean for banks"
date: 2026-10-01
description: "One sentence that appears under the title in the post list."
tags: ["ESG", "Banking"]
---

Write the post here in Markdown. **Bold**, *italic*, [links](https://example.com), lists and headings all work.
Link to your own pages like this: [my CV](/cv/). The link goes to the right language automatically.
```

Translations share the file name and add a language code:

| Language | File |
| --- | --- |
| English | `content/posts/eu-sustainability-rules.md` |
| Italian | `content/posts/eu-sustainability-rules.it.md` |
| Persian | `content/posts/eu-sustainability-rules.fa.md` |

- A post can exist in just one language.
- Add `draft: true` to the front matter to keep a post unpublished.
- On the Persian site, post dates appear in the Persian calendar (for example ۵ مهر ۱۴۰۵).
- In Persian posts, write English abbreviations without a trailing full stop, e.g. `(LL.M)` rather than `(LL.M.)`, so they display correctly right-to-left.

## Preview on your computer

Install Hugo 0.158 or newer ([instructions](https://gohugo.io/installation/)), then run this in the project folder:

```bash
hugo server
```

and open <http://localhost:1313/>.

## Publishing (Cloudflare Pages)

The Cloudflare Pages project `milad-sefidyan` is connected to this repository and uses these build settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | Hugo |
| Build command | `hugo --gc --minify` |
| Build output directory | `public` |
| Environment variable | `HUGO_VERSION` = `0.166.0` |

`HUGO_VERSION` is required: Cloudflare's default Hugo is too old for this site.

If the site's address changes (for example, you add your own domain), update `baseURL` at the top of `hugo.toml` so links, previews and search engines use the new address. `static/_headers` sets caching and security headers on Cloudflare.

## Credits

Fonts: [Newsreader](https://github.com/productiontype/Newsreader) and [Vazirmatn](https://github.com/rastikerdar/vazirmatn), both under the SIL Open Font License 1.1 (license files in `static/fonts/`). They are served from this site, so visitors' browsers never contact Google Fonts.

Content © Milad Sefidyan. All rights reserved.

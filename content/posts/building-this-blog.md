---
title: "Building this blog"
date: 2026-10-18
draft: true
tags: ["homelab", "meta"]
summary: "Why I started a public blog, and how it's built: Hugo, a custom theme, and GitHub Pages."
---

I've been home-labbing for a long time without writing any of it down. Now that I maintain a public repo for a project I really like, it felt like the right time to have a proper place that says who I am and what else I'm into: homelab, home automation, 3D printing, and motorcycles.

## The stack

- **Hugo** for the static site. It builds in milliseconds and there's nothing to patch.
- **A custom theme.** I liked the Ghost "Source" look (hero banner, big featured post, card grid), so I wrote a small theme from scratch instead of bending an existing one. Dark mode and client-side search are in, with no build tooling beyond Hugo.
- **GitHub Pages** for hosting. I compared it with Cloudflare Pages. Either would work, but I wanted the fewest moving parts and no server of my own to look after.
- **A custom domain** via a single CNAME record, with GitHub issuing the HTTPS certificate.

## How publishing works

Posts are Markdown files in a Git repo. Pushing to `main` triggers a GitHub Actions build and deploy, which takes about 30 seconds.

```bash
hugo server -D        # preview, including drafts
git add -A && git commit -m "new post" && git push
```

## What's next

- A proper About page.
- Posts on the homelab, Home Assistant, the 3D printer, and the bike.
- A way to publish straight from my notes.

---
title: Building this blog
date: 2026-10-18
draft: false
tags:
  - blog
  - homelab
  - motorcycles
  - 3d-printing
summary: "Why I started a public blog, and how it's built: Hugo, a custom theme, and GitHub Pages."
cover: /images/motorcycles-are-the-best.jpg
---

I've been homelabbing for a long time without writing any of it down. Like, almost anywhere. Now that [I maintain a public repo for a project I really like](https://github.com/bantznet/mos-vm-images), it felt like the right time to have a proper place that says who I am and what else I'm into: homelabbing, home automation, AI, and 3D printing.

And motorcycles. Motorcycles are the best.

## The stack

- **Hugo** for the static site. It builds in milliseconds in a ways I'm still trying to learn and there's nothing to patch.... so I can spend time learning the Actions side of this.
- **A custom theme.** I liked the Ghost "Source" *heavily* inspired by [Alex Kretzschmar's site](https://blog.ktz.me/) (hero banner, big featured post, card grid), so my AI agent and I wrote a small theme from scratch instead of bending an existing one.
- **GitHub Pages** for hosting. I compared it with Cloudflare Pages. Either would work, but I wanted the fewest moving parts and no server of my own to look after.
- **A custom domain** via a single CNAME record, with GitHub issuing the HTTPS certificate.

## How publishing works

Posts are Markdown files my [blog](https://github.com/bantznet/blog) repo. Pushing to `main` triggers a GitHub Actions build and deploy, which takes about 30 seconds.

```bash
hugo server -D        # preview, including drafts
git add -A && git commit -m "new post" && git push
```

## What's next

- A proper About page.
- Posts on the homelab, Home Assistant, the 3D printer, and the bike.
- A way to publish straight from my Obsidian vault...

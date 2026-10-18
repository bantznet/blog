# Writing notes

New post: `hugo new posts/my-slug.md` (or copy `archetypes/default.md`). Posts start as `draft: true`; preview with `hugo server -D`. Remove `draft: true` and push to `main` to publish (deploys in ~30s).

- Repo and site are public: no secrets, internal IPs/hostnames, MACs, plates, addresses, or family details. Use placeholders.
- Tags: first tag is the topic (`homelab`, `home-automation`, `3d-printing`, `motorcycles`), then optional extras.
- Always write a `summary` (~150 chars).
- Images go in `static/images/` (kebab-case, under ~300 KB); reference as `/images/name.jpg`.
- Fenced code blocks always get a language.
- Obsidian-style `[[wikilinks]]` and `![[image.png]]` embeds do not render in Hugo. Use standard Markdown: `[text](url)` and `![alt](/images/name.jpg)`.

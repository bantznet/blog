---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
draft: true
tags: ["homelab"]   # first tag shows on the card: homelab | home-automation | 3d-printing | motorcycles
summary: ""         # ~150 chars, used as the card excerpt and the link preview
# cover: /images/<slug>.jpg      # 1600x900, <300 KB, subject in the middle
# coverAlt: ""                   # REQUIRED if cover is set: describe what's in the image
# Before publishing: summary written - topic tag first - coverAlt set - no secrets/IPs/plates/family details
---


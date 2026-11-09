---
title: So about Nextcloud... there's OpenCloud
date: 2026-11-09
draft: true
tags:
  - homelab
summary: Remember how I posted about stripping Nextcloud down to barebones because I only want file sync? Well, there's OpenCloud now.
cover: /images/opencloud.png
coverAlt: A screenshot of the OpenCloud home page saying "Files & Content Collaboration. At hyperscale level."
---

So I [posted about my preferred way of running Nextcloud the other day](https://blog.bantz.net/posts/nextcloud-files-only/), and then the Internet happened - or at least me catching up on self-hosted news on said Internet. Turns out, the same people behind [mailbox.org](https://mailbox.org/) (my preferred email / calendar hosting provider) also maintain [OpenCloud](https://github.com/opencloud-eu).

And _whoo boy_ it's awesomely simple. It runs as one Go binary or container (the OpenCloud server). It has no database, no Redis and no PHP. Files go straight to a POSIX filesystem such as ext4, XFS, ZFS or NFSv4.2. Then you can add on things like Collabora for office editing, Radicale for calendar and contacts, Tika for full-text search, and a [growing number of web apps](https://docs.opencloud.eu/docs/admin/configuration/web-applications).

But for me, for someone who just wants to sync files, upload stuff from my phone (auto-upload of photos is supported) and be on my way? This is _perfect_. This is the compose stack for what I'm testing out right now, side-by-side with Nextcloud:

```plain
services:
  opencloud:
    image: opencloudeu/opencloud-rolling:9.0.0 #pinned for stability, or latest for yolo
    container_name: opencloud
    user: "1000:100"
    restart: unless-stopped
    entrypoint: ["/bin/sh"]
    command: ["-c", "opencloud init || true; opencloud server"]
    ports:
      - "9200:9200"
    environment:
      OC_URL: https://cloud.your.domain        # placeholder; match your desired url
      PROXY_TLS: "false"
      PROXY_HTTP_ADDR: 0.0.0.0:9200
      OC_INSECURE: "false"
      IDM_ADMIN_PASSWORD: changeme
    volumes:
      - /mnt/pool0/appdata/opencloud:/etc/opencloud
      - /mnt/pool1/opencloud:/var/lib/opencloud
```

That's it. Some details for the above:

- For stuff I want to work _all the time_ I pin to a release and update very intentionally.

- On my NAS I set ownership to everything as username:users (1000:100) in line 5

- I put all this stuff behind a reverse proxy in my home network that gives me SSL and pretty URLs to all the services in my LAN, thus the URL on line 12 and trusting the proxy coming from anywhere on line 14

- I put application/service data on a mirrored zfs pool of nvme, mounted at /mnt/pool0 

- I put big chunks of files on a mergerfs filesystem on spinning disk (slow, cheaper) mounted on /mnt/pool1

To deploy this, create the directories first to set ownership:

```bash
sudo mkdir -p /mnt/pool0/appdata/opencloud /mnt/pool1/opencloud
sudo chown 1000:100 /mnt/pool0/appdata/opencloud /mnt/pool1/opencloud
```

Then, `docker compose up -d` and log in at http://hostname:9200 with that initial password `changeme` and add some users.

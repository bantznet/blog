---
title: "My go-to Nextcloud stack, trimmed down to just files"
date: 2026-11-03
draft: true
cover: /images/nextcloud-files-only.jpg
coverAlt: "The white Nextcloud logo, three interlocking rings above the word Nextcloud, centered on a blue gradient background."
tags:
  - homelab
summary: "My Docker Compose stack for Nextcloud, and the long list of apps I turn off so it behaves like a fast, boring file server."
---

Nextcloud wants to be your everything: mail, calendar, photos, office suite, dashboard. I just want it to sync and share files. Here's the compose stack I reach for, and what I switch off afterwards.

## The stack

Three containers: Nextcloud (the LinuxServer.io image), Postgres, and Redis for file locking and caching.

```yaml
name: nextcloud
services:
  nextcloud:
    image: lscr.io/linuxserver/nextcloud:latest
    container_name: nextcloud
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=America/Denver
      - REDIS_HOST=nextcloud_redis
      - NEXTCLOUD_TRUSTED_DOMAINS=nextcloud.example.lan 192.0.2.13
      - OVERWRITECLIURL=https://nextcloud.example.lan
    volumes:
      - /mnt/fast/appdata/nextcloud/config:/config
      - /mnt/bulk/nextcloud:/data
    ports:
      - 8843:443
    restart: unless-stopped

  nextcloud_postgres:
    image: postgres:17-alpine
    container_name: nextcloud_postgres
    volumes:
      - /mnt/fast/appdata/nextcloud/postgres:/var/lib/postgresql/data
    environment:
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
      - POSTGRES_USER=nextcloud
      - POSTGRES_DB=nextcloud
    restart: unless-stopped

  nextcloud_redis:
    image: redis:alpine
    container_name: nextcloud_redis
    volumes:
      - /mnt/fast/appdata/nextcloud/redis:/data
    restart: unless-stopped
```

A few choices worth explaining:

- **Config and database on fast storage, user data on the big pool.** Config and Postgres live on an SSD pool; `/data` sits on bulk spinning storage.
- **Postgres over SQLite.** SQLite works until it doesn't. Postgres costs one more container and saves a migration later.
- **The password stays out of the file.** `POSTGRES_PASSWORD` comes from a `.env` next to the compose file.
- **Pick the database in the first-run wizard.** The LinuxServer image doesn't wire Postgres up for you: point the setup page at `nextcloud_postgres`.
- **Trusted domains and the CLI URL** are set up front so reverse-proxy access works the first time.

## What I turn off

Out of the box Nextcloud ships a pile of apps I'll never open. Each one adds background jobs, database tables, and attack surface. Since I only use it for files, I disable them:

```bash
docker exec nextcloud occ app:disable dashboard
docker exec nextcloud occ app:disable calendar
# ...and so on
```

(LinuxServer's image has no `www-data` user; its `occ` wrapper handles running as the right user.)

What went:

| Group | Apps |
| --- | --- |
| Productivity | calendar, contacts, contactsinteraction, mail, office |
| Media | photos, weather_status |
| UI fluff | dashboard, firstrunwizard, recommendations, user_status, related_resources, files_reminders |
| Social/teams | circles, activity |
| Telemetry and extras | survey_client, support, nextcloud_announcements, privacy, logreader |
| Plumbing I don't use | app_api, webhook_listeners, files_downloadlimit |

What stays: the files apps, WebDAV, sharing and federation plumbing, the security apps, notifications, update notifications, the app store, and serverinfo for monitoring.

Two notes:

- **`profile` can't be disabled** because it's protected. Setting `occ config:app:set settings profile_enabled_by_default --value=0` at least stops it being on for new users.
- **Disable, don't remove.** `app:disable` is reversible with `app:enable`. I'd rather undo a mistake in one command than reinstall.

After a major image update, re-check the app list. Updates sometimes bring things back.

## Result

A Nextcloud that does one thing: sync and share files. Fewer background jobs, a much quieter admin page, and less to patch.

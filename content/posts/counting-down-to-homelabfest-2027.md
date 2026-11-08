---
title: Counting down to HomelabFest 2027
date: 2026-11-08
draft: false
tags:
  - homelab
  - home-automation
  - 3d-printing
summary: I'm going to HomelabFest next September, and I'm already overwhelming myself with projects to half complete before then!
cover: /images/homelabfest-2027.jpg
coverAlt: Blue gradient banner with a faint grid and the text "Counting down to HomelabFest, September 2027."
---

# Counting down to HomelabFest 2027

I'm going to the very first [HomelabFest next September](https://www.homelabfest.org/), and I'm already overwhelming myself with projects to half complete before then!

## The plan (such as it is)

I do cloud and infrastructure work all day, then come home and build more of it. Naturally, the moment I decided to go, my brain produced a list of things the lab needs to look presentable. The list is not short. Very little of it will be finished.

Currently in progress, in the loosest sense:

- The endless Personal Knowledge Management (PKM) quest
- Containers? VMs? _Still_ trying to not use Kubernetes?
- A 3D printing project or three
- At least one thing I haven't thought of yet but will start at 11pm

## Giving back to MOS NAS

I wrote about [why I'm stepping past Unraid and trying MOS NAS](https://blog.bantz.net/posts/stepping-past-unraid-mos-nas/). My [mos-vm-images](https://github.com/bantznet/mos-vm-images) repo grew out of that. It builds a ready-to-import VM image from every official MOS release, and the MOS docs now point people to it for [testing MOS in a VM](https://docs.mos-official.net/docs/Installation/Testing-MOS-in-a-Virtual-Machine).

Note/ask: If you try one of these images, boot reports are welcome. I'll be at HomelabFest if you'd rather tell me in person.

## Breaking up with Alexa (maybe)

The other project on the pile is a DIY Home Assistant voice device. I want to find out whether I can finally replace the Echos in my house.

The plan:

- An ESP32-S3 with a mic, an amp and a 3" speaker, running ESPHome with on-device wake word detection
- A custom round to print with an LED ring under a thin white lid skin so it glows when it's listening
- Home Assistant Cloud for speech at first, then moving the pipeline local once the hardware proves itself

The honest caveat is that far-field pickup, with music playing across a room, is where DIY builds struggle against an Echo. I'll keep the Echos plugged in until this one earns its spot. My goal is to have a working prototype to show off at HomelabFest, and a fully local one if I'm being optimistic.

## Why bother

I'm looking forward to meeting people who also think running your own DNS server is a fun evening. I want to see real racks instead of just reading about them, trade Proxmox and Ceph war stories, and come home with a longer to-do list than I left with.

## The honest forecast

By next September, I expect to have:

- A few projects done
- Many projects 80% done
- Several projects "almost working"
- One rack that looks great from the front only

That's fine. A half-finished lab still gives me plenty to talk about.

## See you there?

If you're going, say hi. I'm happy to talk networking, storage, monitoring or 3D printing, or just to hear what you're running. I'll post a recap afterward.

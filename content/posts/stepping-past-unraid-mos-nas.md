---
title: 'Stepping past Unraid: MOS NAS'
date: 2026-11-05
draft: false
tags:
  - homelab
summary: MOS manages disks, pools, Docker, LXC and VMs from one web interface. It is based on Devuan, runs without telemetry and is open source.
cover: /images/mos.PNG
coverAlt: The MOS dashboard showing system info, network traffic, pools and disks
---

I've been a fan of Unraid for several years now - I was even able to buy in to a lifetime license for my central NAS before the [licensing changes at Unraid in 2024](https://unraid.net/blog/whats-next-part-1). I still love Unraid. I think it's unique in the selfhosting world and I'd suggest it as a great way to get started hosting your own apps and media. For me, however, it's got a few things going against it:

- It's clunky - for managing the basics of my server, I feel like settings and configs are ... spread around. For most people who would never touch things like vlans or exactly where your Docker volumes live, that's probably great. But simply trying to add a couple of NICs to my host had me end up working at the command line for something that I feel should be entirely doable in the GUI. And I don't care and I'm proud to say I like using a GUI to manage operations in my day job and my home lab.
- It's a paid license - this isn't a bad thing, per se, _at all_. I think the value selfhosters can get out of that license is phenomenal. I just usually don't lean on paid support for selfhosted stuff.
- Docker and stack management doesn't fit with my workflow any more. I've simply moved beyond deploying apps via a web form and I rely heavily on compose stacks for my applications now.
- And I know change is coming, but ... Slackware? Wut?

So color me excited when I read the [Sept 11, 2026 selfh.st newsletter](https://selfh.st/weekly/2026-09-11/) and saw this little bit:

> ich777, a well known Unraid community developer, announced they're moving on from Unraid (presumably to devote more time to MOS, their new NAS OS for homelabs)

And then keep coloring inside those lines while I decided to [download their latest release and try this out in a VM](https://docs.mos-official.net/docs/Installation/Create-Bootable-Media) as I don't have spare NAS hardware to try this out on. This is where I started flailing around and couldn't get that image to boot. And I _know_ virtualization, it's been my career for close to 20 years. It shouldn't be a barrier for anyone else, I figured.

Fast forward a couple of days and I decided to fix that barrier-to-entry with MOS by creating my first-ever [public, you-should-go-try-this repo on GitHub](https://github.com/bantznet/mos-vm-images). Since then I've been in contact with the developers, who are great fun, and I'm happy to say they're [pointing people my way in the MOS documentation](https://docs.mos-official.net/docs/Installation/Testing-MOS-in-a-Virtual-Machine).

Needless to say, I'm very excited about the MOS project and the ideas and goals they have in mind. I feel that they are incorporating some fantastic, table-stakes homelabbing tools into MOS like Mergerfs and SnapRaid for smushing your disks together in this time of "how am I ever going to grow a ZFS array when disks cost _this_ much?!?!". (MOS [doesn't skip ZFS](https://docs.mos-official.net/docs/Pools/ZFS), though)  Their focus on containerized apps feels more direct than other NAS OSes, and overall I like what I feel is the direction to put really good GUI management on top of tools that are standard, easy to use and configure, and enjoyable to mess with.

I'm excited to watch the MOS community grow. I'm happy to help in some small way. This is just one of the cool byproducts of this community of selfhosters and homelabbers that I love.

---
layout: note
title: Stuff I do after installing Proxmox VE
---

I just installed [Proxmox VE](https://www.proxmox.com/en/proxmox-ve) 6.3 on an old laptop. I'll try to collect useful things to do here.

### Immediately after installation

- Disable enterprise apt sources. Comment out the lines in file `/etc/apt/sources.list.d/pve-enterprise.list`
- Update the system `apt update && apt upgrade -y`. Then reboot.
- Disable sleep on laptop lid close. Edit `/etc/systemd/logind.conf` to match

      [Login]
      HandleLidSwitch=ignore
      HandleLidSwitchDocked=ignore

  Then restart logind with `systemctl restart systemd-logind.service`
- Point a domain to the IP of the host
- Install an ACME DNS plugin of for Let's encrypt certificate

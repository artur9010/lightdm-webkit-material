## A Material design LightDM Webkit2 greeter theme

This is a theme for LightDM Webkit2 (`lightdm-webkit2-greeter`).

Arch Linux users can find it in the AUR: [`lightdm-webkit-theme-material-git`](https://aur.archlinux.org/packages/lightdm-webkit-theme-material-git/).

### Screenshots

![](https://cdn.rawgit.com/artur9010/lightdm-webkit-material/screenshoots/default.png)
![](https://cdn.rawgit.com/artur9010/lightdm-webkit-material/screenshoots/shutdown-dialog.png)
![](https://cdn.rawgit.com/artur9010/lightdm-webkit-material/screenshoots/settings.png)
![](https://cdn.rawgit.com/artur9010/lightdm-webkit-material/screenshoots/particleground-background.png)
![](https://cdn.rawgit.com/artur9010/lightdm-webkit-material/screenshoots/particleground-background-2.png)
![](https://cdn.rawgit.com/artur9010/lightdm-webkit-material/screenshoots/custom-background-image.png)
![](https://cdn.rawgit.com/artur9010/lightdm-webkit-material/screenshoots/custom-background-and-profile-image.png)

### Features

I created this for use on Arch Linux, so it only has the basic features of:

- Selecting an available user from a dropdown
- Entering their password
- Seeing their profile picture
- Restarting the computer
- Shutting the computer down
- Suspending the computer
- Hibernate
- Select session (GNOME, KDE, Xfce or other installed DE)
- Select your language
- 3 different types of background (trianglify, particleground, and image)
- Option to select keyboard layout (eq. pl_PL for Polish keyboard, en_US for English)
- HiDpi screen support (2000px in width or more)
- And the most important thing, A CLOCK WITH SECONDS!!!

### How to install

Instructions will differ for every platform:

1. Install and enable `lightdm` and `lightdm-webkit2-greeter`
2. In the terminal, `cd` to `/usr/share/lightdm-webkit/themes/`
3. Clone this repository
  - Type `git clone https://github.com/artur9010/lightdm-webkit-material.git`
4. Enable the theme in your `/etc/lightdm/lightdm-webkit2-greeter.conf`
  - Search for `greeter` section
  - Set `webkit-theme` to `lightdm-webkit-material`
  
### How to install (Arch Linux users)
I can tell you how to install it on Arch Linux:

1. Download from AUR `lightdm-webkit-theme-material-git`
2. Enable the theme in your `/etc/lightdm/lightdm-webkit2-greeter.conf`
  - Search for `greeter` section
  - Set `webkit-theme` to `material`

### Updating
1. In the terminal, `cd` to `/usr/share/lightdm-webkit/themes/lightdm-webkit-material/`
2. Pull changes from repository, `git pull`

### Updating (Arch Linux users)
If you installed theme using AUR.
- Yaourt: `yaourt -Syua`

### Setting your own user picture

There are a couple of methods you can use to set your user picture in LightDM:

- ~~Put a `jpg` of your face in your home directory as a file called `.face`~~

or

- Add `Icon=/var/lib/AccountsService/icons/<youraccountname>` to the bottom of `/var/lib/AccountsService/users/<youraccountname>` and place a profile image at `/var/lib/AccountsService/icons/<youraccountname>`

### Setting a custom background image

- Put a `jpg` at `/var/lib/AccountsService/wallpapers/lightdm-webkit.jpg` (*You may need to create the wallpapers directory*) and set background engine to image in the settings

### Setting multiple custom background images to pick from

- Put a `jpg` or a `png` in `/var/lib/AccountsService/wallpapers` or in a directory specified by the `background_images` variable in your `/etc/lightdm/lightdm-webkit2-greeter.conf` (either the `greeter` or the `branding` section) and set the background engine to random image in the settings.

### Tips
#### Lock screen
- Type `dm-tool lock`

### License
This work is free. You can redistribute it and/or modify it under the terms of the WTFPL (Do What The Fuck You Want To Public License), Version 2, as published by Sam Hocevar. See http://www.wtfpl.net/ for more details.<br>
Default avatar: http://www.designshock.com/flat_character/<br>
Fallback image background: No Man's Sky

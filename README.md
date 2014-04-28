## A Google/ChromeOS style LightDM Webkit greeter theme

This is a theme for LightDM Webkit (`lightdm-webkit-greeter`).

It's designed to be a mix between the usual Google log in screen, and the log in screen that you will find on ChromeOS.

### Screenshot

![](http://uk.omg.li/VE7v/69938074-bdf6-443d-bbeb-85f0a9f2f6de.png)

### Features

I created this for use on Arch Linux on my HP Chromebook 11, so it only has the basic features of:

- Selecting an available user from a dropdown
- Entering their password
- Seeing their profile picture
- Restarting the computer
- Shutting the computer down
- A clock!

### The `settings-dialog` branch

This is a feature branch that I'm currently working on. Currently you can control the following settings:

- Show/hide the profile picture
- Change the background
- Set the clock to 12 or 24 hour format

### How to install

Instructions will differ for every platform, but I can tell you how to install it on Arch Linux:

1. Install and enable `lightdm` and `lightdm-webkit-greeter`
2. In the terminal, `cd` to `/usr/share/lightdm-webkit/themes/`
3. Clone this repository here, it should create a folder called `lightdm-webkit-google`
4. Enable the theme in your `/etc/lightdm/lightdm-webkit-greeter.conf`

### Setting your own user picture

There are a couple of methods you can use to set your user picture in LightDM:

- Put a `jpg` of your face in your home directory as a file called `.face`

or

- Add `Icon=/path/to/your/face.png` to the bottom of `/var/lib/AccountsService/users/<youraccountname>`


### License

Copyright © 2014 Max Glenister moglenstar@gmail.com

This work is free. You can redistribute it and/or modify it under the terms of the WTFPL (Do What The Fuck You Want To Public License), Version 2, as published by Sam Hocevar. See http://www.wtfpl.net/ for more details.

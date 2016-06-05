LightDM Theme Developer Helper
==========================

Some functions that make it possible to develop LightDM Webkit Greeter themes in the browser

I'm still working on this, but it's basically a recreation of the environment provided by http://bazaar.launchpad.net/~lightdm-team/lightdm-webkit-greeter/trunk/view/head:/src/lightdm-webkit-greeter.c so that you can developer your LightDM Webkit greeter themes in your browser.

### Features
- populates with some dummy content
- feeds back if necessary functions are not implemented


### Usage
- Include `mock.js` in your theme before your theme javascript
- Develop your theme in your browser, as you would any other website


### Credits
Based on the `lightdm.js`, `dummy.js`, and `mock.js` that are bundled with many other lightdm themes, such as:
- http://people.ubuntu.com/~robert-ancell/lightdm/lightdm.js
- https://github.com/Wattos/LightDM-Webkit-MacOSX-Theme/blob/master/mock.js
- https://github.com/Blender3D/Bevel/blob/master/js/dummy.js


If you made it this far, why not check out my [Google/ChromeOS style LightDM Webkit theme](https://github.com/omgmog/lightdm-webkit-google)

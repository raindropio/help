---
title: Firefox Extension
slug: /firefox-extension-problems
---

### I'm using Firefox Containers {#containers}
Raindrop.io can't run from inside containers. To get around of this limitation try this solution:
- Unassign `raindrop.io` from permanent container (which will allow you to use the site outside of any container)
- Disable `Temporary Containers` (so new tabs don't go into any container)
- Start a new tab that is outside of containers, and login to Raindrop.io. (This temporarily fixes the problem and allows the extension to remain logged in for however long the session lasts.)
- Re-enable `Temporary Containers` & Re-assign `raindrop.io` to permanent container

### Extension won't load in Firefox's private mode
The Raindrop.io browser extension does not completely function in Firefox’s private browsing mode. 
This is a known issue specific only to Firefox. 
We have discussed the problem with Mozilla, however, they seem unable to fix it so that extensions like Raindrop.io can function entirely in private mode.

Firefox Bugzilla report: https://bugzilla.mozilla.org/show_bug.cgi?id=1329304
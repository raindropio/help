---
title: Known Issues
---

The bugs with fixes in the works. Check here before shooting us a message.

## Browser Extension
### Firefox specific
#### Firefox extension doesn't scroll with mouse wheel or touchpad
It's known bug first seen in Firefox 86 for macOS. I [reported it](https://bugzilla.mozilla.org/show_bug.cgi?id=1694898) to Firefox developers, they working on fix.

#### Extension won't load in Firefox's private mode
The Raindrop.io browser extension does not completely function in Firefox’s private browsing mode. 
This is a known issue specific only to Firefox. 
We have discussed the problem with Mozilla, however, they seem unable to fix it so that extensions like Raindrop.io can function entirely in private mode.

Firefox Bugzilla report: https://bugzilla.mozilla.org/show_bug.cgi?id=1329304

---

## iOS App
### I can't find Raindrop.io in Safari's share sheet
In iOS 14 sometime some share sheet icons disappear. Many [developers](https://developer.apple.com/forums/thread/662671) and other popular apps (
[1](https://help.getpocket.com/article/919-enabling-the-pocket-share-extension-in-ios)
[2](https://community.atlassian.com/t5/Trello-questions/Trello-is-missing-from-the-Share-extension-in-Safari-in-iOS-14/qaq-p/1561499)
[3](https://www.reddit.com/r/omnifocus/comments/j86ehd/of_extension_missing_in_ios/)
[4](https://bugs.telegram.org/c/564)
[5](https://twitter.com/NotionHQ/status/1337147228389953536)
) have reported same issue.
:::note Temporary workaround
Restart your iPhone/iPad
:::
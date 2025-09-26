---
title: Safari Extension (macOS)
slug: /safari-mac-problems
---

### Prompt for login even when already logged into the web app
Safari 17 introduced a new feature called Profiles. Unfortunately, in Safari 18, using any profile other than the default can cause extensions that require login to stop working correctly. This is a known bug, widely reported online, and at the moment there’s no timeline for when Apple will fix it. Sadly, it’s not something we can resolve on our side. For more details, see these discussions:
- https://forums.developer.apple.com/forums/thread/764279
- https://www.reddit.com/r/Safari/comments/1fk22oe/sequoia_safari_extensions_are_not_working/

Workarounds:
- If you’re not using profiles, the extension should work normally.
- Alternatively, you can use the native **macOS Share Extension**:

Enable it in a few steps:
1. Open System Settings
2. Go to General → Login Items & Extensions
3. Find Raindrop.io and click (i)
4. Switch on Sharing

### Safari keep asking for permissions
If Safari keeps asking for permission to access certain websites every time you click the Raindrop button, try this quick fix:

1. Click the Raindrop button, then your profile picture, and go to **Settings**.  
2. In the **Permissions** section, uncheck and then recheck **Highlights**.  
3. Choose **Always Allow** or **Always Allow on Every Website** when asked.  
4. Restart Safari.  
5. Open Safari’s **Settings > Websites**, find **Raindrop.io**, and set it to **Allow** for other websites.  

This should stop the repeated permission prompts.

:::note[Why does this happen?]
By default, the Raindrop Safari extension works without needing broad permissions. However, to enable features like adding highlights and showing the saved page indicator, it requires additional access.

Safari's permission system can be a bit tricky—if the permission process isn’t completed fully, Safari may keep asking for access over and over again.
:::
---
title: Safari Extension (macOS)
slug: /safari-mac-problems
---

### Prompt for login even when already logged into the web app
Safari 17 introduces a new feature called Profiles. Unfortunately in Safari 18, when you use a profile other than the default one, extensions that require a login may fail to work properly.
This is a known issue that has been reported multiple times online. Unfortunately, it’s unclear when Apple will address this problem, and there’s not much we can do from our end to fix this bug.

For more information, you can refer to these discussions:
https://forums.developer.apple.com/forums/thread/764279
https://www.reddit.com/r/Safari/comments/1fk22oe/sequoia_safari_extensions_are_not_working/

If you’re not using profiles, you can try [these workarounds](./login-problems/index.md).

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

### Permissions reset on Safari restart {#permissions-reset}
If you’re using a version of Safari older than 18, please update to the latest version. This will resolve the annoying permissions reset bug.
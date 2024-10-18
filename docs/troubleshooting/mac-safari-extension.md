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

### Permissions reset on Safari restart {#permissions-reset}
If you’re using a version of Safari older than 18, please update to the latest version. This will resolve the annoying permissions reset bug.
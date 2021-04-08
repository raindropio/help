---
title: Safari Extension (macOS)
slug: /safari-mac-problems
---

### I can't find Raindrop.io in Safari's extensions
It's known bug first seen in Safari 14. I reported it to Apple, but no reply yet.
This bug affects any extension made specificially for latest Safari 14 (completely new API).

One of our users found easy workaround:
1. Download and install Safari Technology Preview https://developer.apple.com/safari/download/
2. Open and close Safari Technology Preview
3. Now our extension should show up in regular Safari

### I have "Raindrop.io for Safari" extension and it doesn't work {#old-extension}
If you see `Cannot GET /v1/socialsuccess` error when you try to login into Raindrop.io for Safari extension please read this message:

Recently we released a new extension for Safari. 
Due to some limitations it not distributed as an update, instead we released a new separate extension.

Please migrate to it by following this easy steps:
1. Remove `Raindrop.io for Safari` app from `Applications` folder
2. Install new extension from [Mac App Store](https://raindrop.io/r/extension/safari)
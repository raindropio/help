---
title: Safari Extension (macOS)
slug: /safari-mac-problems
---

<!------------------------------>
<details><summary>

### Safari extension does not appear {#not-appear}

</summary>

It's known bug first seen in Safari 14. I reported it to Apple, but no reply yet.
This bug affects any extension made specificially for latest Safari 14 (completely new API).

If the extension does not show up in Safari, try **running the below command** in the terminal and restart your computer:
```bash
/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister -f /Applications/Safari.app
```

</details>
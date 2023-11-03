---
title: Web, Desktop App & Extension
slug: /changelog
---

### 5.6.17 (Nov 3, 2023)
- Fix note field, now it never be altered (saved as is)
- New hotkey: Open sidepanel in Chrome (Alt+Shift+B)
- Save tabs and open the side panel, app, or settings by right-clicking on the Raindrop extension button and selecting the desired option from the context menu

### 5.6.16 (Oct 24, 2023)
- The quality of permanent copies has been significantly improved, particularly for webpages with heavy JavaScript. Webpage copies from Twitter now work perfectly as well. We have implemented more reliable servers to enhance the overall experience.
- Dates format has been fixed to use the 24-hour format based on the system settings.
- The collaboration join link has been fixed.
- Facebook, Twitter, and VK login options have been removed.
- The hotkey for the sidebar extension in Firefox has been added.
- The welcome screen of the extension has been improved.
- The non-functioning share target webmanifest has been removed.
- Relevant search functionality has been fixed.
- Collections search has been fixed.
- Better markdown support
- Resize uploaded collection covers and user avatars
- Fix HTML export format

### 5.6.4
- New [note](../using/bookmarks/index.md#notes) field
:::note
In the past you may have used the `description` field for your notes. Don't worry, they're not going anywhere.
The `description` field is still displayed under the title of a bookmark and now main use-case for it to preserve short description about bookmark (usually automatically generated).   
It's just that you now have a **new full-fledged note** field with links, lists, and markup support.   
Please copy and paste your old notes from `description` field to the new note field. It's not required by highly recommended.   
:::

### 5.6.1
- Extension
    - Revert back "tabs" permission to opt-in ("browser history" permission is now not required)
- Export

### 5.6.0
- Extension fixes
    - Less annoying suggested collections strip
    - Show saved page indicator by default (tabs permission is now required by default)
    - Better handling of highlights permission
    - Fix "last used collection" setting in clipper
    - Fix reset system collections view setting
    - Upgrade to manifest v3

### 5.5.23
- [Reminders](../using/reminders/index.md)
- [Nested collections](../using/collections/index.md#nested-collections) now free
- Suggested collections

### 5.5.21
- [Two-factor authentication](/tfa)

### 5.5.15
- Support EPUB (uploading, reading, highlighting and full-text search)
- New `book` type filter

### 5.5.9
- Improve highlighting
- Copy highlights button
- Fix issue when extension save dialog just close automatically on some linux distros
- Fix hotkey visibility for extension welcome page
- Fix long collection names truncation
- Improve dark theme colors

### 5.5.5
- [Export highlights](../using/highlights/index.md#export)
- [Automatic daily backups](../using/backups/index.md#automatic)
- Support import of highlights in CSV / HTML format (Raindrop and Diigo files)
- New extension welcome page
- Now you can use the same hotkey (Ctrl+Shift+S) to save highlights
- Fix extension popover speed on some edge cases
- Fix copy highlight button for some web-pages
- Fix `Create collection` button
- Fix `Open all bookmarks` feature. Previously order of opened tabs have been incorrect
- Fix restore of last opened collection
- Fix collection search

### 5.4.21
- New feature: [Highlights](../using/highlights/index.md)
- Fix login issue in Add bookmark dialog in Firefox extension

### 5.4.16
- Scroll to active collection in sidebar on initial open
- Support `Tab` navigation in collection selector
- Fix `X` button in extension Add window
- Fix long collection name in Add window
- Improve local web-page parser

### 5.4.5
- Remove Google Analytics
- No more ask for save unsaved changes when you just navigate to other screen inside of an app
- When you press `Tab` in tags field, highlighted tag will be selected instead of creating new one
- Remove auto-close from add bookmark window
- Fix add bookmark window in Brave browser
- Fix Safari extension in-app purchase window when you click on any link

### 5.4.2
- Search
    - Now 5x time faster
    - New [advanced search operators](../using/search/index.md#operators)
        - Find exact phrase
        - Exclude conditions
        - Match any condition
        - Search for items created/updated in specific date
        - Find by any part of an URL
        - Find items that have (or not) a permanent copy
        - Find only in title/description (turn off full-text search)
    - Now it's possible to search by a part of a word
    - [Recent searches](../using/search/index.md#recent)
- Extension
    - New overlay save page/link dialog (when you save by hotkey or a context menu)
        - Now it opened inline on a page unlike old window that you need manually close all the time
        - It automatically closes after a few seconds
    - Cover selector now shows 10 images from web-page
    - Significantly improve initial load time of a extension popover
    - Significantly improved parser (especially for Youtube)
    - Safari specific
        - Fix annoing permissions dialog
        - Show [✔] as badge
        - Fix hotkeys visibility in settings
        - Hide omnibox option (not available in Safari)
- Overall
    - New settings page design
    - New sepia theme
    - Improve translation for almost all languages

### 5.4.0
- Save all tabs
    - Click `Tabs...` in bottom right corner if you have `Clipper` extension mode
    - Mouse over `Save` button and click `Save tabs` if you have `Mini App` extension mode

### 5.3.34
- New Share window
    - Now you can add description and embed to website/blog
- New [Remove all empty collections](../using/collections/index.md#remove-all-empty) action
- Fix tags autocomplete, do not submit form when some tag is highlighted
- Fix bug when all new tags are lowercase by default
- Fix gap between bookmarks buttons in Safari
- Fix Maximum call stack size exceeded error for some users
- Fix search bug when query have a percent symbol
- Improve translation

### 5.3.31
- Improve search
- If you don't like default sorting `by relevance` for search you can change it now in [settings](https://app.raindrop.io/settings/app)

### 5.3.30
- Now you can upload your own avatar in [settings](https://app.raindrop.io/settings/account)
- Login or register with username
- Now everywhere in the app `username` is showed instead of a real name
    - You can change your `username` in [settings](https://app.raindrop.io/settings/account)
    - Why? To improve privacy (1), new public pages will have `username` in URL's (2) and it's just convinient to login with a username instead of email (3)

### 5.3.25
- Tags autocomplete now shows a new tag as separate item (more obvious how to create a new tag)

### 5.3.24
- Speed up saving new bookmarks speed in extension (nearly instant now)
- Unsaved changes warning bug fix
- Improve translation ES, IT, PL
- Sort search results by relevancy by default
- Improve compatibility with old browsers (Chrome >= 67, Safari >= 10, Firefox >= 55, Edge >= 80)
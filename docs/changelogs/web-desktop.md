---
title: Web, Desktop App & Extension
slug: /changelog
---

### 5.6.91 (Sep 10, 2025)
- Fixed issue with Safari ITP causing very short cookie expiration times
- Fixed sidebar extension icon appearance in Firefox dark theme
- Added support for toggling the side panel in Chrome extension
- Fixed scrolling issue on Safari 26
- Improved CSV export
- Improved highlight styles so link styles are untouched
- Fixed trailing slash detection in url/exists

### 5.6.81 (May 19, 2025)
- Permanent copies are now generated even for broken or offline links using the Wayback Machine
- Article previews now always use the permanent copy as the source (Pro only), improving speed and privacy
- Fixed caching issue that caused subsequent pages to stop loading
- Resolved unsaved changes dialog error in Chrome-based browser extensions
- Fixed issue where quick edits to new bookmarks in the extension were not saved
- Removed deleted tags from recent tags list
- Test tokens for personal apps no longer expire
- Fixed issue with animated GIFs appearing incorrectly in thumbnails
- Improved speed of permanent copy generation
- Added support for importing Listy files (.json and .listy)
- Improved loading speed for large PDFs
- Enhanced previews for articles and embedded content
- Significantly increased thumbnail generation speed
- Removed annoying modals during website screenshot generation
- Fixed thumbnail issues for Reddit posts

### 5.6.78 (Apr 16, 2025)
- Fixed issue preventing backups for users with over 400,000 bookmarks
- Suggested tags now respect your preferred casing
- Collection invite links are now reusable, allowing multiple invites without creating a new link each time
- IFTTT integration: ensured the same bookmark can trigger multiple applets
- Fixed issue with saving highlights when tab is closed quickly
- Prevented errors on non-HTTPS pages
- Improved performance of expand/collapse for sidebar collections
- Made link uniqueness checks case-insensitive
- Removed empty commands from Safari extension (previously appeared as a bug in Safari settings)
- Enabled pinning to sidebar in Edge via PWA manifest
- Description field is now always visible
- Added error message for users with JavaScript disabled
- Highlighted text now saves its exact position in the app
- Display "file" label instead of up.raindrop.io domain
- Added support for pasting multiple URLs in the Add form

### 5.6.72 (Feb 20, 2025)
- Many webpages behind paywalls are now successfully and permanently copied. Any failed permanent copies will be retried over the next few weeks.
- Significantly improved collection and tag suggestions with a smarter AI model.
- Fixed an issue where pasted tags separated by commas were recognized as a single tag instead of multiple tags.
- Fixed the Safari extension’s “Open in New Tab” functionality.
- Your own tags and newly suggested tags are now visually distinguished in tag suggestions.
- If an imported file contains duplicates, a warning message will now be displayed.
- Improved handling of bulk uploads, fixing issues with uploading hundreds of files at once.
- Fixed Raindrop HTML export files—no more issues when importing them back into Safari.
- Added the ability to hide covers and highlights on public pages (can be toggled in the web app’s view settings).

### 5.6.63 (Dec 3, 2024)
- PDF highlighting is now supported! Simply upload your PDF and select “Preview” to get started.
- Article previews are now significantly faster and produce cleaner results.
- Epub previews have been greatly enhanced for improved speed and clarity.
- You can now download all uploaded files or select specific ones to download.
- Resolved the empty window issue for the Safari web extension on iPad.
- Fixed the Markdown preview issue in the “Note” field.
- Addressed the visibility bug with the expand/collapse collection button in Safari 18.

### 5.6.58 (Oct 17, 2024)
- Fixed the drag-to-move feature on Windows 8.1

### 5.6.57 (Sep 16, 2024)
- You can now invite collaborators without sending an email. Instead, you’ll receive a shareable link to distribute manually. This update was made to prevent misuse of the email feature for spamming.
- Renamed “Remove” to “Delete.”
- Fixed Safari extension highlights for iOS 18.
- Broken links are now automatically re-checked every 6 months, whereas they previously weren’t re-checked after the initial check.
- Fixed duplicate reminders sent via email when notifications are enabled on the mobile app.

### 5.6.53 (Aug 29, 2024)
- We’ve enhanced our suggestions for collections and tags! Unlike before, our smarter suggestions no longer need prior training, meaning even empty collections are considered, and the list of suggested tags will include new, relevant ones.

### 5.6.50 (Jul 23, 2024)
- Fix not working extension shortcuts in Edge browser. [Learn more new shortcuts](../using/browser-extension/index.md#hotkeys)
- Fix compatibility of highlights with Dark Reader extension
- Web app now supports dropping multiple URLs. Feel free to drop your browser bookmarks folder from a toolbar, to save them all.
- Web app now supports multiline highlight note
- Fix collapse/expand all collections action
- Fix "save all tabs" when there more than 1000 open tabs

:::note
All new AI features are made with our private LLM and user data is not used for training
:::

### 5.6.35 (June 9, 2024)
- Better more reliable web highlighter
    - It uses new native browser custom highlights engine that never alter original content of a page

### 5.6.3 (May 14, 2024)
- **New ✦ AI Organization Tips (Pro Only)**: No need to sort your bookmarks right away. Whenever you find some free time, just pop over to the [organization tips page](../using/ai-suggestions/index.md#tips). There, you'll discover ready-to-use tips for enhancing your bookmark organization

### 5.6.24 (Apr 25, 2024)
- **New ✦ AI-Driven Collection and Tag Suggestions (Pro Only)**: When adding or editing an unsorted bookmark, you'll now see AI-generated suggestions above the collection and tag fields. [Learn more](../using/ai-suggestions/index.md#tips)
- **New ✦ AI Semantic Search (Pro Only)**: Enhances your bookmark search with advanced natural language processing techniques that accurately understand the intent and context of your queries. No need to remember exact keywords, just type your query in natural language. For instance, find the `Sega Mega Drive` bookmark with a `Sega Genesis` query.
- **New ✦ Multilingual Search Support (Pro Only)**: Our search feature now supports over 100 languages, allowing you to search in your native language, even for bookmarks in different languages.
- **New Additional Search Operators**: Refine your search with specific fields:
    - `title:query`
    - `excerpt:query`
    - `note:query`
- **New: Search Highlights**: Search results now emphasize highlighted phrases, words and parts of link.
- **New: Partial Word Search**: Enhanced capability to find bookmarks by parts of words.
- **Fixed Numeric Query Bug**: Corrected issues where numbers 0 and 1 were recognized incorrectly in searches.
- **Fixed Collection Icon Padding**: Resolved excessive padding issues on collection icons.
- **Fixed Charset Recognition**: Improved character set recognition for text file uploads.

### 5.6.20 (Feb 16, 2024)
- Fix scroll jumping bug
- Fix icon picker crash in some cases
- 🚀 Faster thumbnail generation
    - Additional servers in North America, Europe and Japan
    - Almost instant thumbnail generation
    - Speed up website screenshot generation
- Public page improvements
    - Support open in new tab setting
    - Support view customizations
- Permanent copy improvements
    - Use [web archive](https://web.archive.org/) copy when origin is not reachable
    - Support some paywall websites
    - Better website popups removal logic
- Export / backup improvements
    - New 'id' and 'favorite' tabs in CSV
- Desktop app
    - Fix issue when close, maximize and minimize buttons overlap content

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

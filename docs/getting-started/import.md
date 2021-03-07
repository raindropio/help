---
title: Import Data
---
You can [transfer your bookmarks](https://app.raindrop.io/settings/import) from browser or other services to Raindrop.io

## How to?
1. Grab export file. Check [supported formats](#supported-formats) and limitations below
2. Upload this file to our [**import tool**](https://app.raindrop.io/settings/import)
3. Change settings (optional)
4. Click **Start import** and wait until it completes.

:::note
Do not close browser tab until import is complete
:::
:::note
Thumbnails and search filters will be updated shortly after import is complete. You will receive an email notification.
:::

## Supported Formats
### `HTML`
Almost any service or browser can generate this file for you. Here how to get it from popular browsers and services:
- [Chrome](https://www.wikihow.com/Export-Bookmarks-from-Chrome)
- [Safari](https://www.ionos.com/digitalguide/websites/web-development/export-safari-bookmarks/)
- [Firefox](https://support.mozilla.org/en-US/kb/export-firefox-bookmarks-to-backup-or-transfer)
- [Pocket](https://help.getpocket.com/article/1015-exporting-your-pocket-list)
- [Pinboard](https://pinboard.in/export/)

### `CSV`
Before uploading you need to convert this file into format suitable for Raindrop.  
[Follow the instructions here](https://csv-to-bookmarks.glitch.me/)

### `Pinterest`
Pinterest itself doesn't have any tools to export your data. But you can try to use great third-party app called [Pinback](https://pinbackit.github.io/) that can help you download export file.
Just follow instructions on [Pinback](https://pinbackit.github.io/) site.

## Settings
Before you start import, please select how much data you want to transfer:

Mode | Description
---- | -----------
**Only new folders and bookmarks** | When you upload the same import file again but with new data, this mode will prevent uploading duplicates and ensure structure untouched, only new folders and bookmarks will be imported
**Import all** | Select this mode if you want to import everything as is (including duplicates)
**Start from scratch** | This mode is the best way to clean your account data completely and replace it with data from import file. Be sure if you already have any data in Raindrop it will be removed and replaced.

## Limitations
- We support files up to 50Mb in size. If you have a larger file please use [our optimization tool](https://optimize-bookmarks-html.glitch.me/) first, it can dramatically reduce file size without any data lose.
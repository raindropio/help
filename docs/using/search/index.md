---
title: Search
slug: ../search
---
## Introduction
Raindrop.io can search by bookmark title, description, URL, tag, type or entire content of a web-page or PDF (only in [Pro](../../billing/premium-features.md)).

Small spelling mistakes in search queries are auto-corrected.

We apply some language-specific optimizations like: Stemming (words like «drives», «drove», «driven» for example are perceived as same word) and plural insensitive search for English, Russian, Mandarin, Spanish, Portuguese, Italian, French, German, Japanese, Polish, Korean, Finnish, Turkish, Dutch, Swedish and Danish languages.

## Full-Text Search
Raindrop can search through the entire content of every bookmark and PDF you’ve saved, making it extremely easy to find what you’re looking for. It's like your personal Google!

Your bookmarks are indexed automatically, no need to do anything. Usually only meaningful content of web-page is indexed. Ads, navigation, comments and so on are stripped if possible. Plus Raindrop is only one bookmark manager that could index JS-heavy web-pages!

:::note
Be sure that newly added bookmark will not appear in search results immediately. We need some time as described in [this article](../backups/index.md#how-long-it-takes-to-copy-all-of-my-bookmarks) to copy and index each bookmark.
:::

Found part of the web-page will be highlighted in search results along with other details:
<img src={require('./full1.png').default} height='313' />

### Known Limitations
- Indexing is happen with slight delay, usually few minutes
- Fuzzy search is not supported in full-text search
- Bookmark should have a permanent copy to support full-text search
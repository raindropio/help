---
title: AI Assistant (Beta)
slug: /stella
---

**Stella** is an AI assistant built into Raindrop.io. It answers from **your saved content**, linking back to the source. It can also manage your library — move, tag, sort, clean up — always confirming before making changes. And if you have questions about Raindrop.io itself, it can help with that too.

<p><img src={require('./intro.png').default} style={{width:'auto', maxHeight:530,display:'inline'}} /></p>

:::info
Stella is in beta — responses are usually accurate, but double-check anything critical. It runs on **open-source LLM** hosted on our own infrastructure — your data never leaves our servers and is never used for training. [More on privacy](#privacy).
:::

:::note
Stella is currently in **early access** for [Pro](https://raindrop.io/pro/buy) users. Available in the [web app](https://app.raindrop.io), desktop and iOS apps.
:::

## Getting started {#start}
Click the **✦ Ask** button in the top right corner of the app. That's it — just type what you need.

<p><img src={require('./add.png').default} style={{width:'auto', maxHeight:192,display:'inline'}} /></p>

Want to ask about a specific bookmark? Two ways:
- **Right-click** any bookmark → select **Ask**
- Open a bookmark → switch to the **Ask** tab

<p><img src={require('./menu.png').default} style={{width:'auto', maxHeight:352,display:'inline'}} /></p>

## Search by meaning {#find}
Search by meaning, not exact keywords. Describe what you're looking for however you remember it.

- that article about morning routines I saved last spring
- the Italian recipe with the weird ingredient
- travel recommendations for Tokyo from that blogger
- Which bookmarks mention "machine learning" but aren't too technical?
- Find articles similar to this one

## Understand what you saved {#understand}
Summarize articles, explain complex ideas in plain language, or help you decide if something is worth reading.

- Summarize this article in 3 bullet points
- Explain this in simple terms
- What do my bookmarks say about productivity?
- Compare these two articles
- What questions does this article answer?
- Is this worth reading if I'm interested in [topic]?

## Get organized {#organize}
Sort, tag, clean up duplicates, and reorganize your library. Just tell it what you need.

- Organize my Unsorted bookmarks into collections
- Suggest a better structure for my library
- Find articles about Formula 1 and tag them by team
- Find everything about Japan and move it to Travel
- Clean up my tags — merges duplicates like "recipe" and "recipes"
- Find broken links
- Show duplicate bookmarks

It suggests where things belong — you review and approve before any changes are made.

## Rediscover your library {#discover}
Find patterns in your bookmarks, resurface things you forgot about, and help you make sense of what you've collected over time.

- What topics do I save the most?
- What have I been saving lately?
- Create a reading list from my design bookmarks
- Show my highlights about productivity

## Need help with Raindrop? {#help}
Have a question about Raindrop.io features, plans, or setup? Just ask Stella.

- How do I share a collection publicly?
- Where can I change keyboard shortcuts?
- How do I set up the browser extension?

---

These are just examples — ask anything about your bookmarks in natural language.

## FAQ {#faq}

### Is my data private? {#privacy}
Yes. We use open-source `GPT OSS 120B LLM` hosted on our own infrastructure — your data never leaves our servers and is never used for training. All communication is encrypted with TLS 1.2+.

### Are there limits on messages or chats? {#limits-messages}
Generous usage — no hard caps on messages. A temporary cooldown may kick in during heavy use. All your chats are saved, but for now only the 100 most recent are displayed.

### What languages are supported? {#languages}
Stella works best in English, Spanish, Chinese, Japanese, Arabic, and Russian — but can understand many other languages too. Just write in your language — no settings needed.

### What types of content are supported? {#content-types}
Stella can read full text of web pages, PDFs, plain text, and Markdown files. Image recognition (OCR) and video transcripts (e.g. YouTube) are not supported yet.

### Why can't it find some of my bookmarks? {#indexing}
New bookmarks need a few minutes to be indexed before they become searchable. If you've just upgraded to Pro, it may take a bit longer — your entire library needs to be indexed for the first time.

### Can I disable Stella? {#disable}
Stella doesn't run in the background or touch your data — it only activates when you open a chat and ask a question. If you'd like to hide the button from the app entirely, go to [Settings → App](https://app.raindrop.io/settings/app).

### Can I use my own AI model? {#byom}
No. But you can use your Raindrop.io library directly from ChatGPT, Claude, and other AI assistants via [MCP](../../integrations/mcp.md).

---

Found a bug or have feedback? We're actively improving Stella — let us know at info@raindrop.io.
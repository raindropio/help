Docs site for Raindrop.io published on Mintlify
Mintlify docs https://www.mintlify.com/docs/llms.txt

When writing articles:
- Writing for casual users
- Don't personify features ("X saves/keeps/provides") — describe what the user gets
- Page header has three layers — each does its own job, don't repeat:
	- `title`: feature name
	- `description`: what it does (visible on page right under title)
	- intro paragraph: the pain/problem it solves, why the user would care. Details belong in sections.
- Section headings: gerund for action sections (`Saving tabs`, `Finding bookmarks`), noun for reference sections (`Limitations`, `FAQ`, `Related`)
- Top-down structure: most important info first, details and edge cases later
- Use simple english, avoid jargon and marketing language
- If screenshot is helpful in specific part of article and not yet added, add placeholder with description of what to capture
- Indentation: use tabs, not spaces
- Use <Steps /> for step by step instructions (without title in <Step />)
- <Tabs sync={false} /> for platform differences. Order: `Web & Desktop` → `Browser extension` (if applicable) → `iOS` → `Android`
- Typical page structure (a guide, not a rigid template — some pages like onboarding/overview may differ):
	intro → action sections → Limitations → Related → FAQ
	All sections except intro are optional — only add them when there's real content, don't pad
- Use cross-links when relevant. Links without `/index` suffix (e.g. `/tags`, not `/tags/index`)
- FAQ using <AccordionGroup /> with list of questions (even if they described in article itself)
- Related section with genuinely useful next-step links using <CardGroup cols={2} /> and <Card iconType="duotone" />. Icon from target page frontmatter, title and description written in context of current article
- Do not change title, icon in frontmatter
- Do not hesitate to repeat important info, because users may not read the whole article
- "search" is not a feature - it's an action
- "Permanent copy" now called "Web archive"
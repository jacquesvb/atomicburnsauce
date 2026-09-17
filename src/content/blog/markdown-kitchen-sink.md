---
title: 'Markdown kitchen sink'
description: 'A plain Markdown post to check typography, code blocks, lists, and a draft flag.'
pubDate: 2026-09-12
tags: ['guide', 'meta']
---

Plain `.md` works alongside `.mdx`. This post shows off the typography defaults.

## Text

Regular text, **bold**, _italic_, `inline code`, and a [link](https://astro.build).

> A blockquote, for when someone else said it better.

## Lists

1. First
2. Second
3. Third

- Bullet one
- Bullet two

## Code

```js
const posts = await getCollection('blog');
const tags = [...new Set(posts.flatMap((p) => p.data.tags))];
```

That is the whole toolkit.

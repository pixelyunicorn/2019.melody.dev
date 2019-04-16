# [melody.dev](https://melody.dev/), the new new new version!

Built with Jekyll and hosted on Netlify. (Note: this site is _not_ compatible with GitHub Pages.)

## Content Structure

| Directory |  |
| --- | --- |
| ````_posts/```` | Public list of posts, with assets inside of each folder. |

### Blog Posts

**Blog posts can be easily edited and managed online via http://prose.io/#pixelyunicorn/melody.dev or any other Jekyll-based content management system.**

Put published posts in ````_posts```` and unpublished posts in ````_drafts````.

The first part of the file starts & ends with three dashes. This is your yaml configuration.

Then comes the markdown. Cheatsheet here: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

````markdown
---
# Basic Metadata
layout: post
title: Splatoon 2 Streaming
url: splatoon
tags: work
accent: purple

# Tile Grid
tile:
  order: 5
  width: 5
  height: 5
  image: tile.png
  class: "squiddo"

# Featured Image Grid
feature:
  width: 17
  height: 11
  image: feature.png

# Meta Preview
image: meta-preview.png

# Various levels of hidden
draft: true
hidden: true
------

You can start typing content here. <b>HTML is supported</b> and so is **markdown syntax.**
Try to use bold text and refrain from using _italics_ whenever possible.

Below are your headers, use them sparingly.

## Header 2

### Header 3

Images are pretty easy.

![Image description for screen readers go here: Fluffle Puff!](/media/guests/flufflepuff-avatar.png)

So are links: [Click here for Google!](http://google.com/)

> I am a quote
> - Maud Pie

You can make tables too, if you're inclined.

| Column Header 1 | Column Header 2 |
| -- | -- |
| Hi! | You get the point |
| Yo! | What's up? |

Lists are easy, just number or bullet them appropriately, like this:

- Item 1
- Item 2

1. Item 1
2. Item 2

You can embed anything by copying and pasting an embed code:
<iframe width="560" height="315" src="https://www.youtube.com/embed/rMFWc_FMhqs"
frameborder="0" allowfullscreen></iframe>

````

## Development Structure

| Directory |  |
| --- | --- |
| ````_includes/```` | Contents of < head >, navigation, and footer., and additional components |
| ````_layouts/```` | Page layout templates. |
| ````_sass/```` | Partial stylesheets. Modify _site.scss for site styles. |
| ````img/```` | Static assets necessary to display the site. |

| File |  |
| --- | --- |
| ````404.html/```` | 404 page. Easter egg, maybe? |
| ````CNAME```` | Sets up a CNAME record for the domain the site is on. |
| ````_config.yml```` | Site settings and commonly used phrases.  |
| ````_prose.yml```` | Configuration for [prose.io](http://prose.io/).  |
| ````feed.xml```` | RSS feed for blog posts. |
| ````robots.txt```` | Bot access settings, please change before deploying to production. |

## Running the site locally

Make sure you have ruby installed, then...

````bash
# install gems (first time only)
bundle install

# run server on localhost:4000. SCSS and page content compiled automatically on save.
bundle exec jekyll serve --port 4000 --watch --incremental
````

\ ゜o゜)ノ

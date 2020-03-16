---
title: "New Website"
path: "/website"
tags: ["Technology"]
featuredImage: "./web-banner.png"
excerpt: New website based on static site publisher Gatsby, github pages and Cloudflare.
created: 2020-03-14
updated: 2020-03-16
---

## A place to collect and share my interests

There is so much to explore and learn in this wonderful world.  This website helps me to summarise my extensive reading so that I can find the good stuff later and also share it with the people who have similar interests.

## Criteria

There are so many aspects to consider when selecting a website platform. Here are some of the key criteria I took into account.

### Static site generator

When I started my web journey, in the late nineties we used to build websites by simply creating individual text files containing HTML tags and words. The HTML pages were published to a web server.  Then we started building dynamic websites with complex content management systems (CMS). CMS work with concepts such as themes or templates, which control the way pages and content are displayed in your web browser.

Static site generators are a step-up from static sites and not as complex as a CMS. A static site generator also uses templates to generate static HTML-only websites, whose content is either extracted from a database or read from text files written in a [Markdown](https://en.wikipedia.org/wiki/Markdown) format.

I tried a number , [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/), [Nikola](https://getnikola.com/).  This site is built with [Gatsby](https://www.gatsbyjs.org/).

### Gatsby off the shelf starters

One of the great aspects of Gatsby is a collection of publicly [contributed starter websites](https://www.gatsbyjs.org/starters/?v=2).  I found one, [Nehalem](https://www.gatsbyjs.org/starters/nehalist/gatsby-starter-nehalem/) that ticked most of my boxes.

#### gatsby-starter-nehalem

Why this theme?

* Fully responsive (Changes layout and images based on viewing device)
* Highly optimized (A high score, ~400, by [Lighthouse](https://developers.google.com/web/tools/lighthouse), a website assessment tool developed by Google)
* SEO optimized (with open graph, Twitter Card, JSON-LD, RSS and sitemap)
* Search functionality
* Static pages (Makes it easy to setup, version control and publish to a webserver.)
* Tagging (To group writing into categories, in order to find similar content.)
* Customizable (A site is never complete and there are always changes to make. Its got to be easy to extend features and styling.)

## The plumbing

* Site Repository : Version controlled in a git repo, housed in GitHub.com.
* Automated generation : GitHub Actions for automated site rendering and publishing
* GitHub Pages : The published web pages.
* Local editing : Windows 10, [WSL2](https://www.youtube.com/watch?v=MrZolfGm8Zk), [VSCode](https://code.visualstudio.com/) & [GIMP](https://www.gimp.org/).
* Content delivery network (CDN) : Cloudflare.
* Cloud functions : Still to be decided.

## References

Web Photo by [Nicolas Picard on Unsplash](https://unsplash.com/@artnok?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge)
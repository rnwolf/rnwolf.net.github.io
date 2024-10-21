# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm dlx @astrojs/upgrade` | Upgrade all the astro components                |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

# Images

Sizable images from https://picsum.photos/

## LinkedIn Link Preview Specifications

Title: Up to 150 characters.
Image: The image gets cropped into a 1.91:1 ratio and 1200 (width) x 627 (height) pixels. So you need an image with a compatible ratio and width of 1200px+.
Optional comment of up to 1300 characters. (This is the LinkedIn post that you write outside of the link.)

Use the LinkedIn Debugger to preview. https://kinsta.com/blog/linkedin-debugger/

# SVG diagrams

How to use Github action to convert plant uml digrams to SVG files
https://gist.github.com/thedmeyer/8b50362ae71ecbadabb17f8683c70ece

## Problem using npm as we have bug.

Error: Cannot find module @rollup/rollup-linux-x64-gnu. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.

see if you can use another package manager.

# Todo

Add SVG compoment to MDX page and astro pages for charts and any line diagrams : DONE
Pagination for Blog posts - DONE
Pagination for Tag posts
Select specfic Blog posts for Home page - DONE
Astro SEO package - WIP See course [Astro Blog Course #16 - SEO basics](https://www.youtube.com/watch?v=fPifaHiKzz4)
Accessible page components
Update look and feel
Version 1?

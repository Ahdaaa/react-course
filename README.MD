# Ahda's React Journey!

## What is ReactJS ?

An extremely popular, declarative, component-based, state-driven javascript library for building UI.

- Component-based: react takes components and draw them on the webpage.
- Declarative: telling react what a component should look like based on current state/data with JSX (html/css/js/react-component).
- State-driven: keeping UI in sync with data that are driven by events/state. (ui will "react" to state changes)

There are frameworks built on top of react such as nextJS and Remix.

## Setting up React environment

1. Make sure you installed vsCode, your favorite web browser, and NodeJS.
2. Install these extensions

- Eslint
- Prettier
- Material Icon
- Your favorite theme.

3. Set your vsCode

- autosave to onFocusChange.
- default formatter to prettier.
- tick format on save.
- set eslint run to onSave.

4. Set some vscode user snippets from [here](https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/00-setup/snippets.json)

## Options to Setup a React Project

Here are two out of few options to create a react project,

1. using `create-react-app`:

- complete starter kit for react app
- everything is configured (eslint, prettier, etc)
- slow and outdated technologies (webpack)
- its better to not use for a real-world apps.

2. using `vite`:

- modern build tool for react app.
- need to manually set up eslint
- extremely fast hot module replacement (hmr).
- use for modern real-world apps.

## React Frameworks

To start a new real-world react project, react recommended us to use their frameworks such as **Next.js** and **Remix**.

These frameworks will help us to avoid building solution of our own to solve code-splitting, routing, etc.

In summary, **Next.js** and **Remix** will make sense for building actual products, not for learning react.

## What is JSX?

- It works essentially like HTML, but we can enter "JS Mode" by using {}
- Statements are not allowed (if/else, for, switch)
- A piece of JSX can only have one **root element**, if we need more we can use `<React.Fragment>`

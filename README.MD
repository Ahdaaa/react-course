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

## React States

- One Component, One State. Use state for any data that the component should keep track of (remember) over time.
- Whenever you want a thing to be dynamic, create a piece of state related to that "thing".
- For data that should not trigger component re-renders, **dont use state**, use a regular variable instead.

Thinking in React and When to use State?

We need to consider these things to determine whether we'll use state or not.

1. Will data change at some point? -> If yes continue to next question, if no then **use regular const variable**
2. Can it be computer from existing state/props? -> If yes use **derive state**, if no continue to next question.
3. Should it re render component? -> If yes then you will need to create a state, If no then use `useRef` hook.

If we need to create a state, we also need to determine where can we put the state by answering these questions.

1. Will this state only used by this component? -> If yes then leave it in the component, if no continue to next question.
2. Will the state also used by a child component? -> if yes then pass the state to child via **props**, if no continue to next question.
3. Will the state used by one or a few siblings component? -> if yes then lift the state up to first common parent, end.

## When to Create New Component ?

When in doubt, start with a relatively big component, then split it into smaller components as it becomes necessary.

There are 4 aspects to consider when creating new components:

1. Logical separation of content / layout,

   - Does the component contain pieces of content or layout that don't belong together?

2. Reusability,

   - Is it possible to reuse part of the component?
   - Do you want or need to reuse it?

3. Responsibilities / Complexity,

   - Is the component doing too many different things?
   - Does it rely on too many props?
   - Does it has too many pieces of state and/or effects?
   - Is the code too complex/confusing?

4. Personal coding style,
   - Do you prefer smaller functions/components?

If the answers is yes, then you might need a new component!

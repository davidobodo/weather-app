## About the project

Know the weather is a weather app that helps you to get the weather information of any city. Asides from this, it helps you save notes for any city of your choice, while giving you the ability to create a Favourites list of cities that you could have access to their weather at all times.

Project is hosted on netlify at this url https://knowtheweatherdcs.netlify.app.

Project is also fully PWA compatible, enabling you to access the weather conditions of all your previous searches even when you are offline. Awesome right

## Tools and tech stack used in project

-   `React.JS` Library - Used Create-react-app https://create-react-app.dev/docs/adding-typescript/
-   `Typescript` - To give a better structure and predictability to our code https://www.typescriptlang.org/
-   `Styled components` - For styling https://styled-components.com/
-   `React Testing Library` - For Testing https://testing-library.com/docs/react-testing-library/intro/

## Starting the project locally

Yarn is a package manager for this project

-   To install packages
    `yarn install`

-   To start the project in development mode on your machine
    `yarn start`

-   To start all tests in the project
    `yarn test`

## Folder structure and project conventions

1. Folder names begin with small letters
2. File names begin with capital letters, except the root index.tsx
3. Each Page and Component has its associated files embedded in its folder i.e

```js
   ActualComponent.tsx - Main Component
   ActualComponent.styles.ts - Styles for main component
   IActualComponent.ts - Typings for main component
   ActualComponent.test.tsx - Tests for main component
```

NOTE: Every other folder in the src root, holds "Global" functions, helpers, assets e.t.c that are used in multiple places in the app, hence why they are not constrained to a component or a page

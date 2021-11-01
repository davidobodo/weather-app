## About the project

Know the weather is allows you to get the weather information of any city. Asides from this, it helps you save notes for any city of your choice, while giving you the ability to create a favourite list of cities that you could have access to their weather at all times.

Project is hosted on netlify at https://knowtheweatherdcs.netlify.app.

Project is also a full-fledged Progressive Web App(PWA), enabling you to access the weather conditions of all your previous searches even when you are offline. Awesome right?

-   App home page view
    ![](https://res.cloudinary.com/phitgeek/image/upload/v1635769876/Screenshot_2021-11-01_at_1.35.44_PM_pnpggh.png)

    ![](https://res.cloudinary.com/phitgeek/image/upload/c_scale,w_371/v1635769867/Screenshot_2021-11-01_at_1.36.02_PM_ptsbim.png)

-   Single place page view
    ![](https://res.cloudinary.com/phitgeek/image/upload/v1635769702/Screenshot_2021-11-01_at_1.32.54_PM_o1mh07.png)

    ![](https://res.cloudinary.com/phitgeek/image/upload/c_scale,w_371/v1635769701/Screenshot_2021-11-01_at_1.33.12_PM_uabufh.png)

## Tools and tech stack used in project

-   `React.JS` Library - Used Create-react-app https://create-react-app.dev/docs/adding-typescript/
-   `Typescript` - For static typing and write-time code checks. https://www.typescriptlang.org/
-   `Styled components` - For styling. https://styled-components.com/
-   `React Testing Library` - For Testing. https://testing-library.com/docs/react-testing-library/intro/

## Starting the project locally

Yarn is used to manage dependencies for this project.

-   To install packages
    `yarn`

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
   ActualComponent.styles.ts - Styles for Main Component
   IActualComponent.ts - Typings for Main Component
   ActualComponent.test.tsx - Tests for Main Component
```

NOTE: Every other folder in the src root, holds "Global" functions, helpers, assets, styles e.t.c that are used in multiple places in the app, hence why they are not constrained to a component or a page.

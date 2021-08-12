# Code Explanation

## Before Running

**Install 'react-bootstrap' and 'react-player'.**

To install, please type in terminal the following instructions:

### `npm install react-bootstrap` 
### `npm install react-player`

## Introduction

This code permits user to access localhost for Movie Discovery App. Contains four active pages: 'Home', 'Results', 'Movies', and 'Movie Info'. 

## General Guide

Initial homepage contains search bar and caption. When clicking "I'm not sure" or scrolling down, "If you're indecisive" section will appear, which contains diferent sections displaying categories, which platform to watch, top rated content, and upcoming movies. When searching for movie or clicking one, complete information about it, including title, description, rating, actors, etc. will appear. 

## Code Review

### Service.js

Fetches API calls and transport them into the respective sections with Axios. Found under 'Actions' folder.

### Components

Contains structure and styling for movie cards, compact cards, and movie sections. Each permits display of poster and general information for movie.

### Pages

*Home*

Contains structure and styling for homepage, which includes scrolling with categories and search.

*~~Landing~~ (inactive)*

Display general information regarding user's profile and likes.

*~~Logging~~ (inactive)*

Display log for quantity of movies liked and saved.

*~~Login~~ (inactive)*

Permits user to register account and login into profile.

*Movie Details*

Import API calls into code structure, along with font settings.

### Results

Enables structure and styling for results page.

### Styles

Sets basic templates for colors, images, and fonts, later to be imported in all page styling. Additionally, it sets a basic styling for attributes and properties of the page.

### App.js

Structure for pages in web app.

### Const.js

Import links and API attributes.

### Index.js

Exports React DOM and Router to App and subsequently to pages.

#
#
#


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Project Title

Picky Solutions Assessment Task

## Project Overview

This shopping cart application is built with a focus on robust state management and modern React practices.

Data for the products is fetched from an API using Redux Toolkit's async thunk. This data is then stored in a Redux store, which serves as the single source of truth for the application's state.

The products page displays the list of products fetched from the API. Users can add items to their cart, adjust the quantity of each item, and remove items from the cart. The state of the cart, including the items it contains and the total price, is also managed with Redux.

For the user interface, we've used Material-UI, a popular React UI framework. Material-UI provides a set of pre-built React components that follow Google's Material Design guidelines. This allows us to create a user-friendly, responsive, and aesthetically pleasing interface with less effort.

The application is written in TypeScript, which adds static typing to JavaScript. This helps catch errors early in the development process and makes the codebase more maintainable and scalable.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

A step by step series of examples that tell you how to get a development environment running:

1. Clone the repo: `git clone https://github.com/maramzan/pickey-task.git`
2. Install dependencies: `npm install`
3. Start the server: `npm run dev`

## Built With

- [React](https://reactjs.org/) - The web framework used
- [Redux](https://redux.js.org/) - State management
- [TypeScript](https://www.typescriptlang.org/) - Used for static typing
- [Material-UI](https://www.mui.com) - User for UI Designing

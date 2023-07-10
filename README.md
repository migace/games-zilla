# GameZilla
The task was very interesting, but definitely took too much time. I spent almost 20 hours on it. I believe that if it wasn't a simulated task, but a "real" task, the question of how the API works -> why we change the endpoint when filtering for more than one category should be explained.

### Overview
I was forced to use a simple proxy in express to bypass CORS. I didn't want to do that because Vite has such a mechanism built in, but I couldn't get the category endpoint to work.
I added e2e tests using Cypress, but they cover the minimum functionality of the application. I'm aware that they should and could test more things, I didn't have time to do it properly.
I also used Turborepo to build monorepo and manage tasks.

### Tech Stack
React, redux-toolkit, react-select, lodash.debounce, TypeScript, Express, CSSModules, Vite, Turborepo

### How to run it?
Please download the code repository, then go to the code directory and follow these instructions:
```
npm i
npm start
```

### How to run tests?
(Currently only UI app has e2e tests)
```
npm run test
```

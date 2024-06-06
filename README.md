# Modak Technical Challenge - Cypress Test

## Copyright (c) 2024 Automation Project

```
Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
```

## Pre-Conditions

**.zshrc:**

1. Open the `Terminal`
2. Create .zshrc by typing -> `touch ~/.zshrc`

**Docker:**

1. Install Docker from your corresponding OS.

**Install nvm & node:**

1. Run -> `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash`
2. Type -> `nvm help`
3. Type -> `nvm install v19.6.0` (Or latest version)
4. To verify the installation, type -> `nvm ls` and you should get something like:

```
->     v19.6.0
default -> v19.6.0 (-> v19.6.0)
node -> stable (-> v19.6.0) (default)
stable -> v19.6.0 (-> v19.6.0) (default)
```

## Repo

**Link to Repo:** [link](https://github.com/smurciac/modak-assesment)

1. `https://github.com/smurciac/modak-assesment`

## Install package.json

On `Terminal`, change path to the project's path

1. (Optional) Delete the file `package-lock.json` or `yarn.lock`
2. To install all dependencies run -> `yarn install` or `npm install`

## Executing Automated Tests

Once all the dependencies are installed, go to the root's project:

1. To run headless -> `yarn cy:run` or `npm run cy:run`
2. To run with Cypress UI -> `yarn cy:open` or `npm run cy:open`

## Executing Sorry Cypress Report

When Docker is up:

1. Create Sorry Cypress Docker -> `docker-compose -f docker-compose.minio.yml up`
2. (Optional) Run a given tag -> `CYPRESS_INCLUDE_TAGS=NAV yarn cy:local:cloud 'Run-00x'` where `x = number`
3. Run all -> `yarn cy:local:cloud 'Run-00x'` where `x = number`

## Project's Structure

```
.
├── README.md
├── currents.config.js
├── cypress
│   ├── downloads
│   ├── e2e
│   │   └── app
│   │       ├── contact.us.cy.js
│   │       └── navigation.cy.js
│   ├── fixtures
│   │   └── example.json
│   ├── jsconfig.json
│   ├── support
│   │   ├── commands
│   │   │   └── contact.us.js
│   │   ├── commands.js
│   │   ├── e2e.js
│   │   ├── helpers
│   │   │   └── randomNumber.js
│   │   └── pages
│   │       ├── home.page.js
│   │       ├── index.js
│   │       └── platform
│   │           └── contact.us.page.js
│   └── types
│       ├── commands.d.ts
│       └── contact.us.d.ts
├── cypress.config.ts
├── cypress.env.json
├── docker-compose.minio.yml
├── package.json
└── yarn.lock
```

## Visual Studio Code Ruler

For this project, we use 120 line lenght, add this code to `setting.json`

```
{
  "editor.rulers": [80],
  "workbench.colorCustomizations": {
      "editorRuler.foreground": "#ff4081"
  }
}
```

## Visual Studio Extensions

1. ESLint
2. JavaScript (ES6) code snippets
3. Prettier - Code formatter
4. JavaScript support
5. GitLens — Git supercharged

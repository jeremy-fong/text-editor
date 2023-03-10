# Text Editor

## Table of Contents
1. [Title](#title)
2. [Project](#project)
3. [Description](#description)
4. [Installation](#installation)
5. [Usage](#usage)
6. [User Story](#user-story)
7. [Acceptance Criteria](#acceptance-criteria)
8. [Screenshot Preview of Project](#screenshot-preview-of-project)
9. [Source](#source)

## Title :
### Text Editor

## Project :
### *Text Editor*

## Description :
* This project is a text editor that meets the PWA requirements. 
* This means the application is able to work offline by using local storage and an IndexedDB.
* The user is able to edit the text, save notes, and the changes that are made will be saved automatically. 

## Installation :
The user needs to install node for this project. 

## Usage :
- To use the app, open it in the browser with the Heroku deployed link.
- Once opened your screen should look like the screenshot provided below, and the app is ready to use. 
- To use offline, simply click the install button in the top left corner.

## User Story :
```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria :
```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Screenshot Preview of Project :
![J A T E screenshot](https://user-images.githubusercontent.com/112743562/219504379-e37eff1c-d5e4-46a9-aa7f-73253b02e662.jpg)

## Source :
- GitHub Link: https://github.com/jeremy-fong/text-editor
- Heroku Deployed Link: https://pwa-editing-text.herokuapp.com/

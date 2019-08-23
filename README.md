# kokis-site
A small demo website using firebase.

## Release Process

## Prerequisites
- Git https://git-scm.com/downloads
- Node.js 8 - https://nodejs.org/en/
- A Firebase Project with Google authentication - https://firebase.google.com
- Firebase CLI - https://firebase.google.com/docs/cli
- Mocha Unit Testing https://mochajs.org/
- Code Coverage https://istanbul.js.org/
- You have to clone the repository, initialize the firebase project locally<br>
  ```$ git clone www.this-repo.com path/to/local/repo```<br>
  ```$ cd path/to/local/repo```<br>
  ```$ firebase login```<br>
  ```$ firebase init``` install hosting and functions

### What the release script does
- navigates to the repo ```$ cd path/to/local/repo```
- clone the repo for first release or pull the latest changes
- get the dependencies
- run tests ```$ npm test```
- run firebase deploy 

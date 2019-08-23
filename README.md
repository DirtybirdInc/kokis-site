# kokis-site
A small demo website using firebase hosting and cloud functions.

## Release Process

### Prerequisites
- Git https://git-scm.com/downloads
- Node.js 8 - https://nodejs.org/en/
- A Firebase Project with Google Authentication enabled - https://firebase.google.com
- Firebase CLI - https://firebase.google.com/docs/cli<br>
  ```$ npm install -g firebase-tools```
- Initialise the firebase project<br>
  ```$ git clone www.this-repo.com path/to/local/repo```<br>
  ```$ cd path/to/local/repo```<br>
  ```$ firebase init functions```<br> install dependencies
  ```$ firebase init hosting``` use "public" as *public directory*
- Intialize the test directory and install ```mocha``` Unit Testing and ```nyc``` https://mochajs.org/<br>
  ```$ mkdir tests```<br>
  ```$ cd tests```<br>
  ```$ npm install --save-dev mocha```<br>
  ```$ npm install --save-dev nyc```
  
### What the release script does
- navigates to the repo
- clones the repo for first release or pulls the latest version
- installs the dependencies (including mocha for unit testing and nyc istanbul for code coverage)
- runs all unit tests
- runs firebase deploy 
- prints all console outputs to a file 

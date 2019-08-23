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
  ```$ git clone <www.this-repo.com> <path/to/local/repo>```<br>
  ```$ cd <path/to/local/repo>```<br>
  ```$ firebase init functions``` **install dependencies**<br>
  ```$ firebase init hosting``` **use "public" as *public directory***
- Install ```mocha``` Unit Testing and ```nyc``` https://mochajs.org/<br>
  ```$ cd functions<br>
  $ npm install --save-dev mocha<br>
  $ npm install --save-dev nyc<br>
  $ cd ../public<br>
  $ npm install --save-dev mocha<br>
  $ npm install --save-dev nyc```
- Alter ```functions/package.json``` and ```public/package.json```<br> 
  ```{ scripts: { "test": "nyc mocha"} }```
  
### What the release script does
- pulls the latest version<br>
  ```$ git pull```
- runs all unit tests<br>
  ```$ cd functions```<br>
  ```$ npm test > release_<rid>_unit_tests.txt```
- runs firebase deploy<br>
  ```$ firebase deploy```

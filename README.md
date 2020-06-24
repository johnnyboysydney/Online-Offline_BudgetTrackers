<img src="https://github.com/johnnyboysydney/Online-Offline_BudgetTrackers/blob/master/public/assets/icon/budget_icon.jpg" width="150" height="100">

# Online-Offline_BudgetTrackers

[contributors-shield]: https://img.shields.io/github/contributors/johnnyboysydney/Online-Offline_BudgetTrackers.svg?style=flat-square
[contributors-url]: https://github.com/johnnyboysydney/Online-Offline_BudgetTrackers/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/johnnyboysydney/Online-Offline_BudgetTrackers.svg?style=flat-square
[forks-url]: https://github.com/johnnyboysydney/Online-Offline_BudgetTrackers/network
[stars-shield]: https://img.shields.io/github/stars/johnnyboysydney/Online-Offline_BudgetTrackers.svg?style=flat-square
[stars-url]: https://github.com/johnnyboysydney/Online-Offline_BudgetTrackers/stargazers
[issues-shield]: https://img.shields.io/github/issues/johnnyboysydney/Online-Offline_BudgetTrackers.svg?style=flat-square
[issues-url]: https://github.com/johnnyboysydney/Online-Offline_BudgetTrackers/issues
[build-style-shield]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[build-style-url]: https://github.com/feross/standard
[license-shield]: https://img.shields.io/github/license/johnnyboysydney/Online-Offline_BudgetTrackers.svg?style=flat-square
[license-url]: http://choosealicense.com/licenses/mit/
[![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url] [![JS Standard][build-style-shield]][build-style-url] [![MIT License][license-shield]][license-url]
[![Build Status](https://travis-ci.com/johnnyboysydney/Online-Offline_BudgetTrackers.svg?branch=master)](https://travis-ci.com/johnnyboysydney/Online-Offline_BudgetTrackers)

## Table of Content

- [Link to the running application](#link-to-the-running-application)
- [Description](#description)
- [Development](#development)
- [User Story](#user-story)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Tests](#tests)
- [Built With](#built-with)
- [Questions](#questions)
- [Demo](#demo)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [CopyRight](#copyright)

## Link to the running application

<https://shielded-bayou-52893.herokuapp.com/>

## Description

Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success.

## Development

Created the MVC structure first and worked upon each element required, starting from the node.js, using terminal and running ``npm i``, installing all the required dependencies  
Below some links of interest:

- node.js - <https://nodejs.org/en/>
- heroku-cli NPM Package - <https://www.npmjs.com/package/heroku-cli>
- path NPM Package - <https://www.npmjs.com/package/path>
- indexedDB - <https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API>

## User Story

AS AN avid traveller  
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection  
SO THAT my account balance is accurate when I am traveling

## Installation

To use this application locally:

- Clone the GitHub repository at:
- You will to install all the dependencies, see [Dependencies](#dependencies) for the complete list
- Using ```npm install```, install all the dependencies
- You can then open a terminal or cmd prompt, and navigate to the folder where **_server.js_** is located and type: ``node server.js``
- Once the server is running, open a browser and navigate to localhost:3000 or the port you have selected
- The app will be running in the browser

### Dependencies

    "@babel/core": "^7.10.3",
    "@babel/preset-env": "^7.10.3",
    "babel-core": "^6.26.3",
    "babel-loader": "^8.1.0",
    "compression": "^1.7.4",
    "express": "^4.17.1",
    "lite-server": "^2.5.3",
    "mongoose": "^5.5.15",
    "morgan": "^1.9.1",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.12",
    "webpack-pwa-manifest": "^4.2.0"

## Tests

Canary test enabled. More to come

## Built With

- [VScode](https://code.visualstudio.com/) - The editor of choice
- [Notepad++](https://notepad-plus-plus.org/) - My second editor
- [Gitbash](https://gitforwindows.org/) - What would we do without our bash?

### Questions

1. How can I run the application?  
You just need to follow the instructions on the [installation](#installation) section, where it is explained

2. What if I get an error?  
Ensure that you have install all the dependencies required for this to work. See [Dependencies](#dependencies) section

3. Can I refractor the code in the any of the files file?  
Yes, you can modify and refractor the code

## Demo

![Demo](./public/assets/demo/demo.gif)

## License

[MIT License](./LICENSE)

### Authors

- **John Merchan**

## Acknowledgments

- John "To my sons and daughters, who give me the power I need to keep going. To Agustin, mentor in my learnings, and the TA, Sandesh and Dyan"

### CopyRight

Copyright 2020 &copy; John Merchan

[Table of Content](#Table-of-Content) --- [Back to Top](#Online-Offline_BudgetTrackers ) --- [Installation](#Installation)
# FrontEnd Documentation
## Table of Contents

- [Create React App](#Create-React-App)
- [Ethers](#Ethers.js)
- [Axios](#Axios)




## Create-React-App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Ethers.js

Ethers.js is a powerful and flexible JavaScript library for interacting with Ethereum. This README provides an overview of how to use ethers.js version 6 in your projects.

### Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Examples](#examples)


### Installation

You can install ethers.js using npm or yarn:

`bash
npm install ethers
 or
yarn add ethers`

### Getting Started

To get started with ethers.js, you'll need to have Node.js installed on your system. If you haven't already, you can download it from nodejs.org.

Once you have Node.js installed, you can create a new JavaScript or TypeScript project and import ethers.js as follows:

`const { ethers } = require('ethers');
// or
import { ethers } from 'ethers';`

### Usage
Ethers.js provides a wide range of functionality for Ethereum development, including:

Creating wallets and managing accounts.
Sending transactions to the Ethereum network.
Interacting with smart contracts.
Querying blockchain data.
Here's a simple example of how to create a wallet and send a transaction:

```
const { ethers } = require('ethers');

// Create a wallet
const wallet = ethers.Wallet.createRandom();

// Connect to an Ethereum network
const provider = ethers.getDefaultProvider('mainnet');

// Send a transaction
const transactionResponse = await wallet.sendTransaction({
  to: '0xRecipientAddress',
  value: ethers.utils.parseEther('0.1'),
});

console.log('Transaction Hash:', transactionResponse.hash);
```

For more detailed information on using ethers.js, please refer to the official documentation.

### API Reference
The complete API reference for ethers.js version 6 is available in the official documentation.

Examples
You can find a variety of usage examples in the examples directory of this repository. These examples cover common use cases and can help you get started with ethers.js.


## Axios

Axios is a popular JavaScript library for making HTTP requests from the browser or Node.js. It is widely used for performing AJAX requests and interacting with APIs. This README provides an overview of how to use Axios in your projects.

### Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Making GET Requests](#making-get-requests)
- [Making POST Requests](#making-post-requests)
- [Interceptors](#interceptors)
- [Error Handling](#error-handling)
- [More Features](#more-features)
- [Contributing](#contributing)
- [License](#license)

### Installation

You can install Axios using npm or yarn:

```bash
npm install axios
# or
yarn add axios
```
### Getting Started
To use Axios in your project, you need to import it:

```
const axios = require('axios');
// or
import axios from 'axios';
```
Axios provides a simple and consistent API for making HTTP requests. Here's a basic example of making a GET request:
```
axios.get('https://api.example.com/data')
  .then(function (response) {
    // Handle success
    console.log('Data:', response.data);
  })
  .catch(function (error) {
    // Handle error
    console.error('Error:', error);
  });
```
### Making GET Requests
Axios supports various HTTP methods. To make a GET request:

```
axios.get(url[, config])
  .then(function (response) {
    // Handle success
  })
  .catch(function (error) {
    // Handle error
  });
```
For more details and options for GET requests, refer to the Axios documentation.

### Making POST Requests
To make a POST request:

```
axios.post(url[, data[, config]])
  .then(function (response) {
    // Handle success
  })
  .catch(function (error) {
    // Handle error
  });
```
You can also send data with POST requests. For more details and options, refer to the Axios documentation.

### Interceptors
Axios allows you to intercept requests and responses. This is useful for global error handling or adding headers to requests. To set up interceptors, refer to the Axios documentation.

### Error Handling
Axios provides comprehensive error handling. You can catch errors for failed requests and handle them appropriately. For more information, refer to the Axios documentation.

### More Features
Axios offers additional features like request and response configuration, canceling requests, and more. Explore the full documentation for detailed information on all available features.


# DATA NEEDED FOR FRONTEND SECTIONS

## DASHBOARD
User handle.

Companies that a user is a part of
ALL CHALLENGES for the specific company
Challenge info - name, description, points, dateStart, dateExpire, rewards (both token and NFT) so that user has full details

When user submits to a challenge - POST user handle + submission pictures array for that specific challenge

User joins a company by entering a join code - once user joins they can automatically be sent a credential at joining of company if the admin chooses this option. This credential can also be sent once the user has obtained a certain amount of points for the company.

## MY GROUPS 

### MANAGE COMPANY 
User handle.

Companies that the admin has created.

ALL Challenges associated with a company (these are POSTed from /CreateChallenge - name, desc, points, rewards (NFT and token), dateStart, dateExpire)

*Frontend will determine if challenge is scheduled, active, or completed*

For EACH completed challenges, need info for who submitted + if their submission was accepted or not. 


When admin clicks review - display challenge name, desc, points, rewards + get all participant data that submitted to that challenge (username, submission pictures array) 

When admin accepts challenge - send rewards to user who completed it
When admin denies challenge - do not send

*Need data on user end for if their submission was accepted, denied, or in review*

All users that are a part of a company + points obtained for that company 

MAYBE - add a notifications thing where users can see whether the challenge submission was accepted or denied


### CREATE
User handle.

#### Create Credential
POST the NFT metadata - title , desc, image


Display all credentials (NFTs) created by the company (created by admin in the company, NOT obtained by user) - Need the metadata associated with the NFT , viewing should allow admin to see the credential they created. They should be able to send this to people in their community)

#### Create Community
POST image, name, desc, challenges. Can also choose option to send a credential automatically when user joins, or when user hits a threshold of points.


*Need Creation limits + sending limits*

## PROFILE 
User handle.

All user NFTs 
Total "funds" that were obtained + how much from each company the user is a part of 
 
















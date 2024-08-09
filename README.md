# DemoQA Cypress Project

This project contains automated tests for the DEMOQA.com and REQRES.in sites using Cypress. The tests are designed to verify various functionalities of the user interface on the DemoQA site and the API on the REQRES site.

Demoqa.com: https://reqres.in/
Reqres.in: https://demoqa.com/

## Table of Contents
- [Setup](#setup)
 - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running Tests](#running-tests)
  - [Open Cypress UI](#open-cypress-ui)
  - [Run in Headless Mode](#run-in-headless-mode)
- [Project Structure](#project-structure)
- [License](#license)
- [Contact Info](#contact-info)

## Setup
### Prerequisites

- Node.js and npm installed on your system.

### Installation

1. Clone the repository:
    git clone https://github.com/josemendezqa/demoqa_cy.git

2. Navigate to the project directory:
    cd demoqa_cy

3. Install dependencies:
    npm install

   Install Prettier
    run the npm install command using the command line: npm install prettier --save-dev

   Install Mochawesome
    run the npm install command using the command line: npm install mochawesome --save-dev

## Running Tests
### Open Cypress UI
To open the Cypress user interface and run tests manually:
    npx cypress open

### Run in Headless Mode
To run all tests in headless mode:

## Project Structure

- cypress/fixtures: Contains test data used in the tests.
- cypress/integration: Contains the main test files.
    - tests: Contains specific tests, e.g., search.spec.js.
- cypress/plugins: Contains Cypress plugins configuration.
- cypress/support: Contains custom commands and additional configurations.
  - commands.js: Contains custom Cypress commands.
  - index.js: Global configuration file for Cypress.
- .gitignore: Files and directories excluded from the repository.
- cypress.config.js: Main configuration file for Cypress.
- package.json: npm configuration file, including scripts and dependencies.
- README.md: This file.

## License
This project is licensed under the MIT License.

## Contact Info
- Email: josmenag@gmail.com
- Linkedin: https://www.linkedin.com/in/jose-mendez-489446ba/

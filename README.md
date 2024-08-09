# DemoQA Cypress Project

This project contains automated tests for the DEMOQA.com and REQRES.in sites using Cypress. The tests are designed to verify various functionalities of the user interface on the DemoQA site and the API on the REQRES site.

Demoqa.com: https://reqres.in/  
Reqres.in: https://demoqa.com/

Project Github repository: https://github.com/josemendezqa/demoqa_cy

## Table of Contents
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running Tests](#running-tests)
  - [Open Cypress UI](#open-cypress-ui)
  - [Run in Headless Mode](#run-in-headless-mode)
  - [Generating Reports](#generating-reports)
- [Project Structure](#project-structure)
- [Environment configuration](#environment-configuration)
- [Libraries Used](#libraries-used)
- [License](#license)
- [Contact Info](#contact-info)

## Setup
### Prerequisites

- Node.js and npm installed on your system.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/josemendezqa/demoqa_cy.git
    ```

2. Navigate to the project directory:
    ```bash
    cd demoqa_cy
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Install Prettier:
    ```bash
    npm install prettier --save-dev
    ```

5. Install Mochawesome:
    ```bash
    npm install mochawesome --save-dev
    ```

6. Install AJV and AJV-Formats (for schema validation):
    ```bash
    npm install ajv ajv-formats --save-dev
    ```

## Run in Headless Mode

To run all tests in headless mode:

npx cypress run

## Generating Reports

To generate and view test reports, follow these steps:

  Run the tests in headless mode to generate the JSON report files:
    npx cypress run
  Merge the JSON report files into a single report file:
    npx mochawesome-merge cypress/reports/*.json > cypress/reports/report.json
  Generate the HTML report from the merged JSON file:
    npx mochawesome-report-generator cypress/reports/report.json
  View the report:
    Open the generated HTML file in your web browser. It will be located in the cypress/reports/mochawesome-report/ directory.

## Project Structure

    cypress/fixtures: Contains test data used in the tests.
    cypress/integration: Contains the main test files.
        tests: Contains specific tests, e.g., search.spec.js.
    cypress/plugins: Contains Cypress plugins configuration.
    cypress/support: Contains custom commands and additional configurations.
        commands.js: Contains custom Cypress commands.
        index.js: Global configuration file for Cypress.
    .gitignore: Files and directories excluded from the repository.
    cypress.config.js: Main configuration file for Cypress.
    package.json: npm configuration file, including scripts and dependencies.
    README.md: This file.

## Environment Configuration

This project is set up to run tests in different environments (e.g., development, staging, production). Each environment has its own configuration file located in the cypress/config directory.
Available Environments

  Development (dev.json)
  Local (local.json)
  Staging (staging.json)

Switching Environments
To run tests in a specific environment, set the CYPRESS_ENV environment variable before running the tests. For example:
  Development:
    CYPRESS_ENV=dev npx cypress run
  Local:
    CYPRESS_ENV=local npx cypress run
  Staging:
    CYPRESS_ENV=staging npx cypress run

How It Works
    The environment-handler.js file dynamically loads the appropriate environment configuration based on the value of CYPRESS_ENV.
    If no environment is specified, it defaults to staging.

## Libraries Used

    Cypress: The main framework for end-to-end testing.
    Prettier: Code formatter.
    Mochawesome: Reporter for generating test reports.
    AJV: Another JSON Schema Validator, used for validating API responses against predefined schemas.
    AJV-Formats: Provides support for additional formats like email, uri, etc., in AJV.

## License

This project is licensed under the MIT License.

## Contact Info

    Email: josmenag@gmail.com
    Linkedin: https://www.linkedin.com/in/jose-mendez-489446ba/
    Github: https://github.com/josemendezqa
    
# Playwright (TS binding) + Cucumber (BDD)


## Project structure

- package.json -> defines all the dependencies
- features -> Contains all the features & Typescript code
- cucumber.json -> defines basic configuration to get path of feature files and type script
- hooks -> hooks.ts - This file is used to initialize the browser and close the browser

### Setup:

1. Clone or download the project
2. Extract and open in the VS-Code
3. `npm i` to install the dependencies
4. `npx playwright install` to install the browsers
5. `npm run test` to execute the tests
6. To run a particular test change  
```
  paths: [
            "src/test/features/featurename.feature"
         ] 
```
7. Test report file- open cucumber-report.html file in chrome/edge browser to see detail report.

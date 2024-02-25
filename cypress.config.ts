import { defineConfig } from "cypress"; //479 (gzipped: 324)
require("dotenv").config();

const xlsx = require("node-xlsx").default;
const fs = require("fs"); // for file
const path = require("path");

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    //parseSpecialCharSequences:false,
    baseUrl: "http://uitestingplayground.com",
    //baseUrl: "https://play1.automationcamp.ir",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
      // implement node event listener here
      // reading excel document fron fixture
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        },
      });
    },
  },
  env: {
    stage: "https://stage.pasv.us",
    prod: "https://coding.pasv.us/course/user/login",
    test: "Hello World!",
    demoQA: "https://demoQA.com",
    textBox: "https://demoqa.com/text-box",
    herokuapp: "https://the-internet.herokuapp.com",
    expected_conditions:
      "https://play1.automationcamp.ir/expected_conditions.html",
    email: "kharatova1994@gmail.com",
    password: "A12345678v",
  },
  viewportWidth: 1200,
  viewportHeight: 1400,

  retries: {
    runMode: 2, // terminal run
    openMode: 1, // cypress run
  },
  video: true,
  screenshotOnRunFailure: true,                                                                         
  defaultCommandTimeout: 16_000,
  reporterOptions: {
    charts: true,
    reportPageTitle: "LecturPASV",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
});

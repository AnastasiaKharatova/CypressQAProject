import { defineConfig } from "cypress"; //479 (gzipped: 324)
require('dotenv').config()

export default defineConfig({
  e2e: {
    //parseSpecialCharSequences:false,
    baseUrl: "http://uitestingplayground.com",
    //baseUrl: "https://play1.automationcamp.ir",
  setupNodeEvents(on, config) {
      // implement node event listeners here
    },

     env:{
      stage: 'https://stage.pasv.us',
      prod: 'https://coding.pasv.us/course/user/login',
      test: 'Hello World!',
      demoQA: 'https://demoQA.com',
      textBox: 'https://demoqa.com/text-box',
      herokuapp: 'https://the-internet.herokuapp.com',
      expected_conditions: 'https://play1.automationcamp.ir/expected_conditions.html',
       email: 'kharatova1994@gmail.com',
       password: 'A12345678v' 
     }
  },
  viewportWidth: 1200,
  viewportHeight: 1400,

  retries:{
    runMode: 2,  // terminal run
    openMode: 1, // cypress run
  },

  defaultCommandTimeout:16_000
});

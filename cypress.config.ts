import { defineConfig } from "cypress"; //479 (gzipped: 324)

export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com",
  setupNodeEvents(on, config) {
      // implement node event listeners here
    },
     env:{
      stage: 'https://stage.pasv.us/course',
      info: 'https://coding.pasv.us/course',
      test: 'Hello World'
      //expected_conditions: 'https://play1.automationcamp.ir/expected_conditions.html'  
     }
  },
  defaultCommandTimeout:16_000
});

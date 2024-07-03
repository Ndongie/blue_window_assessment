

// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  retries:1,
  /*Maximum timeout project can run for */
  timeout: 30*1000,
  expect:{
    timeout:5000
  },
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  projects:[
    {
      "name":"chrome_web",
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot:'only-on-failure',
        video:'retain-on-failure',
        ignoreHTTPSErrors:true,
        trace:'retain-on-failure',
        //viewport:{width:720, height:720}
      }
    },
    {
      "name":"chrome_mobile",
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot:'only-on-failure',
        video:'retain-on-failure',
        ignoreHTTPSErrors:true,
        trace:'retain-on-failure',
        ...devices['Pixel 5'],
        //viewport:{width:720, height:720}
      }
    },
    {
      "name":"safari_web",
      use: {
        browserName: 'webkit',
        headless: true,
        screenshot:'only-on-failure',
        video:'retain-on-failure',
        ignoreHTTPSErrors:true,
        trace:'retain-on-failure'
      }
    },
    {
      "name":"safari_mobile",
      use: {
        browserName: 'webkit',
        headless: true,
        screenshot:'only-on-failure',
        video:'retain-on-failure',
        ignoreHTTPSErrors:true,
        trace:'retain-on-failure',
        ...devices['iPhone 11']
      }  
    },
    {
      "name":"firefox_web",
      use: {
        browserName: 'firefox',
        headless: false,
        screenshot:'only-on-failure',
        video:'retain-on-failure',
        ignoreHTTPSErrors:true,
        trace:'retain-on-failure',
        //viewport:{width:720, height:720}
      }
    },
    {
      "name":"firefox_mobile",
      use: {
        browserName: 'firefox',
        headless: false,
        screenshot:'only-on-failure',
        video:'retain-on-failure',
        ignoreHTTPSErrors:true,
        trace:'retain-on-failure',
        ...devices['Pixel 5'],
        //viewport:{width:720, height:720}
      }
    },
  ],
});
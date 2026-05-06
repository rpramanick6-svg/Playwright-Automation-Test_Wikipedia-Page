// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**

 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
    timeout: 30 * 1000,  //this timeout is for all componenets
    expect: {
    timeout: 5 * 1000, // this timeout is for expect function and assertion validations
  },
  reporter: 'html',
  
  use: {
    browserName: 'chromium',
    headless: false,
  
  },


});
module.exports = config;
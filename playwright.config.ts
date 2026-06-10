import { defineConfig, devices } from '@playwright/test';


 
export default defineConfig({
  testDir: "./tests",

  reporter: [
    [
      "html",
      {
        open: "never",
      },
    ],
    [
      "allure-playwright",
      {
        detail: true,
        SuiteTitle: true,
        environmentInfo: {
          name: "TEST",
          appName: "CURA",
          Release: "Release 1.0.1",
          node_version: process.version,
        },
      },
    ],
  ],
 
  use: {
    
    trace: "on-first-retry",
    ignoreHTTPSErrors: true,
    navigationTimeout: 30_000,
    screenshot: "only-on-failure",
    //video:'retain-on-failure'
  },

  
  projects: [
    {
      name: "chromium",
      use: {
        
        viewport: null,
        launchOptions: {
          args: ["--start-maximized"],
        },
      },
    },

    
  ],


});

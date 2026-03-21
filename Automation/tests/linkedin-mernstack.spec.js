const { chromium } = require("playwright");
const { constantsValue } = require("./constants/constants");
const getUrl = (jobId = 4296041897) =>
  `https://www.linkedin.com/jobs/search/?currentJobId=${jobId}&f_AL=true&keywords=mern%20stack%20developer%2C%20node%20%2C%20react&origin=JOB_SEARCH_PAGE_JOB_FILTER`;
//&start=25

(async () => {
  const browser = await chromium.launch({
    headless: false,
    args: ["--start-maximized"],
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  try {
    console.log("Starting LinkedIn automation...");

    // Login process
    try {
      await page.goto(
        "https://www.linkedin.com/checkpoint/lg/sign-in-another-account",
      );
      console.log("Navigated to login page");
    } catch (error) {
      console.log("Error navigating to login page:", error.message);
    }

    try {
      await page.waitForSelector('input[id="username"]', { timeout: 15000 });
      await page.fill('input[id="username"]', process.env.EMAIL_ID);
      console.log("Username filled successfully");
    } catch (error) {
      console.log("Error filling username:", error.message);
    }

    try {
      await page.fill(
        'input[id="password"]',
        process.env.LINKEDIN_LOGIN_PASSWORD,
      );
      await page.click('button[type="submit"], button:has-text("Login")');
      await page.waitForTimeout(5000);
      console.log("Login attempt completed");
    } catch (error) {
      console.log("Error during login:", error.message);
    }

    try {
      await page.waitForTimeout(5000);
      console.log("Successfully redirected to dashboard");
    } catch (error) {
      console.log("Error waiting after login:", error.message);
    }

    // Navigate to job search
    try {
      await page.goto(getUrl());
      console.log("Navigated to job search page");
    } catch (error) {
      console.log("Error navigating to job search:", error.message);
    }

    let uncompletedApplication = [];
    // Get job IDs
    let jobIds = [];
    try {
      await page.waitForTimeout(5000);
      jobIds = await page.$$eval("li[data-occludable-job-id]", (elements) =>
        elements.map((element) =>
          element.getAttribute("data-occludable-job-id"),
        ),
      );
      console.log(`Found ${jobIds.length} job IDs:`, jobIds);
    } catch (error) {
      console.log("Error extracting job IDs:", error.message);
    }

    // Navigate through each job
    for (let jobId of jobIds) {
      try {
        await page.goto(getUrl(jobId));
        await page.waitForTimeout(2000);
        const fillTheMissingFields = async () => {
          const inputContainer = await page.$$(
            "div[data-test-single-line-text-form-component]",
          );
          const selectContainer = await page.$$(
            "div[data-test-text-entity-list-form-component]",
          );
          const fieldsetContainer = await page.$$(
            `fieldset[data-test-form-builder-radio-button-form-component="true"]`,
          );
          const containerDivs = [
            ...inputContainer,
            ...selectContainer,
            ...fieldsetContainer,
          ];
          for (const element of containerDivs) {
            const error = await element.$(
              "div[data-test-form-element-error-messages]",
            );
            if (error) {
              const input = await element.$("input");
              if (input) {
                await input.click();
                await input.fill("4");
              }
              const radioButton = await element.$(
                'input[data-test-text-selectable-option__input="Yes"]',
              );
              if (radioButton) {
                await radioButton.click();
              }

              const select = await element.$("select");
              if (select) {
                await select.selectOption("Yes");
              }
            }
          }
        };
        const clickTheButton = async ({ id }) => {
          const types = {
            "Easy Apply": `button[data-job-id="${jobId}"]`,
            "Continue to next step": `button[aria-label="Continue to next step"]`,
            "Review your application": `button[aria-label="Review your application"]`,
            "Submit application": `button[aria-label="Submit application"]`,
            Dismiss: `button[aria-label="Dismiss"]`,
          };
          while (true) {
            // Try to find the "Next" button, but don't throw if not found
            const button = await page.$(types[id]);
            if (!button) break;
            // Check if the button is visible
            const isVisible = await button.isVisible();
            if (!isVisible) break;
            await button.click();
            await page.waitForTimeout(1000);
            const errorPresent = await page.$(
              `div[data-test-form-element-error-messages]`,
            );
            if (errorPresent) {
              uncompletedApplication.push(jobId);
              await fillTheMissingFields();
              await clickTheButton({ id });
            }
            break;
          }
        };
        const steps = [
          "Easy Apply",
          "Continue to next step",
          "Continue to next step",
          "Continue to next step",
          "Review your application",
          "Submit application",
          "Dismiss",
        ];

        for (const id of steps) {
          await clickTheButton({ id });
        }
        await page.waitForTimeout(constantsValue.delayBeforeApplyingAnotherJob);
      } catch (error) {
        console.log(`Error navigating to job ${jobId}:`, error.message);
        uncompletedApplication.push(jobId);
        continue; // Continue with next job even if this one fails
      }
    }

    try {
      await page.waitForTimeout(5000);
      console.log("Automation completed successfully");
    } catch (error) {
      console.log("Error in final step:", error.message);
    } finally {
      console.log("uncompletedApplication", uncompletedApplication);
    }
    //https://www.linkedin.com/mypreferences/d/user-sessions
  } catch (error) {
    console.log("Critical error in automation:", error.message);
  }
})();

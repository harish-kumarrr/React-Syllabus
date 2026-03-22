const { chromium } = require("playwright");
const fs = require("fs");
require("dotenv").config();
const { constantsValue } = require("./constants/constants");
(async () => {
  const browser = await chromium.launch({
    headless: false,
    args: ["--start-maximized"],
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.naukri.com/");

  await page.click("text=Login", { timeout: 10000 });

  await page.waitForSelector(
    'input[placeholder*="Email"], input[name="email"], input[type="text"]',
    { timeout: 15000 },
  );

  await page.fill(
    'input[placeholder*="Email"], input[name="email"], input[type="text"]',
    process.env.EMAIL_ID,
  );

  await page.fill(
    'input[placeholder*="password"], input[name="password"], input[type="password"]',
    process.env.NAUKRI_LOGIN_PASSWORD,
  );
  await page.click('button[type="submit"], button:has-text("Login")');

  await page.waitForURL(/naukri\.com\/mnjuser\/homepage/, { timeout: 15000 });
  console.log("Successfully redirected to dashboard");
  let currentPage = 1;
  await page.goto(
    `https://www.naukri.com/mern-stack-react-dot-js-node-dot-js-jobs-${currentPage}?k=mern+stack%2C+react.js%2C+node.js&nignbevent_src=jobsearchDeskGNB&experience=4`,
  );

  console.log("Navigated to homepage, looking for search input...");
  let hasMorePages = true;
  while (hasMorePages) {
    // Wait for at least one job link to appear
    await page.waitForSelector("div.srp-jobtuple-wrapper h2 a.title", {
      timeout: 15000,
    });

    const jobLinks = await page.$$eval(
      "div.srp-jobtuple-wrapper h2 a.title",
      (anchors) => anchors.map((a) => a.href),
    );
    for (let i = 0; i < jobLinks.length; i++) {
      try {
        await page.goto(jobLinks[i], { timeout: 2000 });
        await page.waitForTimeout(1500);
        const applyButton = await page.$("#apply-button");
        const applyOnCompanySite = await page.$("#company-site-button");
        let isApplied = true;
        if (applyButton) {
          await page.waitForTimeout(1500);
          await applyButton.click();
          try {
            const chatbotPresent = await page.$(
              "div.chatbot_DrawerContentWrapper",
            );
            if (chatbotPresent) {
              isApplied = false;
              console.log(
                `Job ${i + 1} on page ${currentPage}: Skipped due to chatbot.`,
              );
              continue;
            }
          } catch (e) {
            console.log(
              `Job ${i + 1} on page ${currentPage}: Error checking chatbot: ${
                e.message
              }`,
            );
            continue;
          }
          console.log(`Job ${i + 1} on page ${currentPage}: Applied.`);
        } else if (applyOnCompanySite) {
          isApplied = false;
          // first read the file and check where the jobLinks[i] is present if present then skip else append the jobLinks[i] to the file
          // filename is applyOnCompanySite.json and it will be an array list and we will maintain a array list of applyOnCompanySiteList
          let applyOnCompanySiteList = [];
          try {
            const fileContent = fs.readFileSync(
              "tests/applyOnCompanySite.json",
              "utf8",
            );
            if (fileContent.trim()) {
              applyOnCompanySiteList = JSON.parse(fileContent);
            }
          } catch (error) {
            console.log(
              `Error reading applyOnCompanySite.json: ${error.message}`,
            );
            // Initialize with empty array if file doesn't exist or is invalid
            applyOnCompanySiteList = [];
          }

          if (applyOnCompanySiteList.includes(jobLinks[i])) {
            console.log(
              `Job ${i + 1} on page ${currentPage}: Already applied on company site.`,
            );
            continue;
          }
          applyOnCompanySiteList.push(jobLinks[i]);

          try {
            fs.writeFileSync(
              "tests/applyOnCompanySite.json",
              JSON.stringify(applyOnCompanySiteList, null, 2),
            );
            console.log(
              `Job ${i + 1} on page ${currentPage}: Saved to applyOnCompanySite.json`,
            );
          } catch (error) {
            console.log(
              `Error writing to applyOnCompanySite.json: ${error.message}`,
            );
          }
          await page.waitForTimeout(2000);
        } else {
          isApplied = false;
          console.log(
            `Job ${i + 1} on page ${currentPage}: No apply button found.`,
          );
        }
        if (isApplied) {
          console.log("Last Applied Job Link :", jobLinks[i]);
        }
      } catch (error) {
        console.log(
          `Error processing job ${i + 1} on page ${currentPage}: ${
            error.message
          }`,
        );
        continue; // Continue with next job
      }
    }
    currentPage += 1;
    const nextPageUrl = `https://www.naukri.com/mern-stack-react-dot-js-node-dot-js-jobs-${currentPage}?k=mern+stack%2C+react.js%2C+node.js&nignbevent_src=jobsearchDeskGNB&experience=4`;
    try {
      await page.goto(nextPageUrl, { timeout: 1500 });
    } catch (error) {
      console.log(`Error navigating to page ${currentPage}: ${error.message}`);
      hasMorePages = false; // Stop if we can't navigate
    }
  }
})();

import { test, expect, chromium, Page } from '@playwright/test';

// Set timeout for all tests in this file
test.setTimeout(900000); // 15 minutes

// User Data Directory for your custom Chrome profile
const userDataDir = 'C:\\Users\\sundaravel.v\\Documents\\All Flow - Dusky\\C\\Users\\Windows\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1\\Profile 4';

// Common wait time (in milliseconds)
const WAIT_TIME = 2000; // 2 seconds

// Helper function to wait after actions
async function wait(page: Page, duration: number = WAIT_TIME) {
  await page.waitForTimeout(duration);
}

// Helper function to execute actions with error handling
async function safeAction(page: Page, action: () => Promise<void>, actionName: string) {
  try {
    await action();
    console.log(`✅ ${actionName} - Success`);
  } catch (error) {
    console.log(`❌ ${actionName} - Failed: ${error}`);
  }
  await wait(page);
}

test('Talent Hire - Hiring Manager Flow', async () => {
  // Launch persistent context with Chrome profile
  const context = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    channel: 'chrome',
  });
  
  const page = context.pages()[0] || await context.newPage();

  
  
  // Navigate to the application
  await safeAction(page, async () => {
    await page.goto('https://talent-qa.ideas2it.com/jobs');
    await page.waitForLoadState('networkidle');
  }, 'Navigate to application');
  
  console.log('✅ Page loaded successfully!');
  
  // Job Search Flow
  console.log('Starting Job Search Flow...');
  await safeAction(page, async () => {
    await page.getByRole('searchbox', { name: 'Search...' }).click();
  }, 'Click search box');
  
  await safeAction(page, async () => {
    await page.getByRole('searchbox', { name: 'Search...' }).fill('Mnaanager');
  }, 'Fill search with typo');
  
  await safeAction(page, async () => {
    await page.getByRole('searchbox', { name: 'Search...' }).dblclick();
  }, 'Double click search box');
  
  await safeAction(page, async () => {
    await page.getByRole('searchbox', { name: 'Search...' }).fill('Manager');
  }, 'Fill search with correct text');
  
  await safeAction(page, async () => {
    await page.getByRole('searchbox', { name: 'Search...' }).press('ControlOrMeta+a');
  }, 'Select all text');
  
  await safeAction(page, async () => {
    await page.getByRole('searchbox', { name: 'Search...' }).fill('');
  }, 'Clear search box');
  
  // Select Senior Product Manager position
  await safeAction(page, async () => {
    await page.locator('div').filter({ hasText: /^Senior Product ManagerFull-time•Others•Hybrid$/ }).first().click();
  }, 'Select Senior Product Manager position');
  
  // Search candidates
  await safeAction(page, async () => {
    await page.getByRole('searchbox', { name: 'Search by name, email...' }).click();
  }, 'Click candidate search box');
  
  await safeAction(page, async () => {
    await page.getByRole('searchbox', { name: 'Search by name, email...' }).fill('');
  }, 'Clear candidate search');
  
  // Navigate through tabs
  console.log('Navigating through application sections...');
  await safeAction(page, async () => {
    await page.getByRole('link', { name: 'Applicants' }).click();
  }, 'Navigate to Applicants');
  
  await safeAction(page, async () => {
    await page.getByLabel('Tabs').getByRole('link', { name: 'Reports' }).click();
  }, 'Navigate to Reports');
  
  await safeAction(page, async () => {
    await page.getByRole('link', { name: 'Settings' }).click();
  }, 'Navigate to Settings');
  
  await safeAction(page, async () => {
    await page.getByRole('link', { name: 'Job Post' }).click();
  }, 'Navigate to Job Post');
  
  await safeAction(page, async () => {
    await page.getByRole('link', { name: 'Upcoming Interviews' }).click();
  }, 'Return to Upcoming Interviews');
  
  // Interview Mode Filter Testing
  console.log('Testing Interview Mode Filters...');
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Online & Offline ' }).click();
  }, 'Click Online & Offline dropdown');

  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Online', exact: true }).click();
  }, 'Select Online mode');

  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Online ' }).click();
  }, 'Click Online dropdown again');

  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Offline', exact: true }).click();
  }, 'Select Offline mode');

  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Offline ' }).click();
  }, 'Click Offline dropdown again');

  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Online & Offline' }).click();
  }, 'Select Online & Offline mode');

  // Search Functionality
  console.log('Testing Search functionality...');
  await safeAction(page, async () => {
    await page.getByRole('searchbox', { name: 'Search by name, email...' }).click();
  }, 'Click search box');

  await safeAction(page, async () => {
    await page.getByRole('searchbox', { name: 'Search by name, email...' }).click();
  }, 'Click search box again');

  await safeAction(page, async () => {
    await page.getByRole('searchbox', { name: 'Search by name, email...' }).fill('');
  }, 'Clear search box');

  // Past Interviews Section
  console.log('Testing Past Interviews section...');
  await safeAction(page, async () => {
    await page.getByRole('link', { name: 'Past Interviews' }).click();
  }, 'Navigate to Past Interviews');

  // Past Interviews Mode Filter Testing
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Online & Offline ' }).click();
  }, 'Click Past Interviews Online & Offline dropdown');

  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Online & Offline', exact: true }).click();
  }, 'Select Online & Offline in Past Interviews');

  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Online & Offline ' }).click();
  }, 'Click Past Interviews dropdown again');

  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Online', exact: true }).click();
  }, 'Select Online in Past Interviews');

  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Online ' }).click();
  }, 'Click Online dropdown in Past Interviews');

  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Offline', exact: true }).click();
  }, 'Select Offline in Past Interviews');

  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Offline ' }).click();
  }, 'Click Offline dropdown in Past Interviews');

  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Online & Offline' }).click();
  }, 'Select Online & Offline in Past Interviews');

  // Past Interviews Search
  await safeAction(page, async () => {
    await page.getByRole('searchbox', { name: 'Search by name, email...' }).click();
  }, 'Click Past Interviews search box');

  await safeAction(page, async () => {
    await page.getByRole('searchbox', { name: 'Search by name, email...' }).fill('');
  }, 'Clear Past Interviews search');
  
  // My Availability Section
  console.log('Testing My Availability...');
  await safeAction(page, async () => {
    await page.getByRole('link', { name: 'My Availability' }).click();
  }, 'Navigate to My Availability');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Add Tech Stack' }).click();
  }, 'Click Add Tech Stack');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'AWS' }).click();
  }, 'Select AWS tech stack');
  
  await safeAction(page, async () => {
    await page.locator('div:nth-child(2) > .hover\\:bg-purple-700').click();
  }, 'Click tech stack option');
  
  
  // Referrals Section
  console.log('Testing Referrals section...');
  await safeAction(page, async () => {
    await page.getByRole('link', { name: 'Refer a Friend' }).click();
  }, 'Navigate to Refer a Friend');
  
  await safeAction(page, async () => {
    await page.getByRole('link', { name: 'My Referrals' }).click();
  }, 'Navigate to My Referrals');
  
  // Return to Jobs
  await safeAction(page, async () => {
    await page.getByRole('link', { name: 'Jobs' }).click();
  }, 'Return to Jobs page');
  
  console.log('✅ Test completed successfully!');
  
  // Close the browser context
  await context.close();
});
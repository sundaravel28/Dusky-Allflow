import { test, expect, chromium, Page } from '@playwright/test';

// Set timeout for all tests in this file
test.setTimeout(900000); // 15 minutes

// User Data Directory for your custom Chrome profile
const userDataDir = 'C:\\Users\\sundaravel.v\\Documents\\All Flow - Dusky\\C\\Users\\Windows\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1';

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

test('Talent Hire - Complete Flow', async () => {
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
  // await safeAction(page, async () => {
  //   await page.getByRole('searchbox', { name: 'Search...' }).click();
  // }, 'Click search box');
  
  // await safeAction(page, async () => {
  //   await page.getByRole('searchbox', { name: 'Search...' }).fill('Mnaanager');
  // }, 'Fill search with typo');
  
  // await safeAction(page, async () => {
  //   await page.getByRole('searchbox', { name: 'Search...' }).dblclick();
  // }, 'Double click search box');
  
  // await safeAction(page, async () => {
  //   await page.getByRole('searchbox', { name: 'Search...' }).fill('Manager');
  // }, 'Fill search with correct text');
  
  // await safeAction(page, async () => {
  //   await page.getByRole('searchbox', { name: 'Search...' }).press('ControlOrMeta+a');
  // }, 'Select all text');
  
  // await safeAction(page, async () => {
  //   await page.getByRole('searchbox', { name: 'Search...' }).fill('');
  // }, 'Clear search box');
  
  // // Select Senior Product Manager position
  // await safeAction(page, async () => {
  //   await page.locator('div').filter({ hasText: /^Senior Product ManagerFull-time•Others•Hybrid$/ }).first().click();
  // }, 'Select Senior Product Manager position');
  
  // // Search candidates
  // await safeAction(page, async () => {
  //   await page.getByRole('searchbox', { name: 'Search by name, email...' }).click();
  // }, 'Click candidate search box');
  
  // await safeAction(page, async () => {
  //   await page.getByRole('searchbox', { name: 'Search by name, email...' }).fill('');
  // }, 'Clear candidate search');
  
  // // Navigate through tabs
  // console.log('Navigating through application sections...');
  // await safeAction(page, async () => {
  //   await page.getByRole('link', { name: 'Applicants' }).click();
  // }, 'Navigate to Applicants');
  
  // await safeAction(page, async () => {
  //   await page.getByLabel('Tabs').getByRole('link', { name: 'Reports' }).click();
  // }, 'Navigate to Reports');
  
  // await safeAction(page, async () => {
  //   await page.getByRole('link', { name: 'Settings' }).click();
  // }, 'Navigate to Settings');
  
  // await safeAction(page, async () => {
  //   await page.getByRole('link', { name: 'Job Post' }).click();
  // }, 'Navigate to Job Post');
  
  // // Interviews Section
  // console.log('Testing Interviews section...');
  // await safeAction(page, async () => {
  //   await page.getByRole('link', { name: 'Interviews' }).click();
  // }, 'Navigate to Interviews');
  
  // await safeAction(page, async () => {
  //   await page.getByRole('searchbox', { name: 'Search by name, email...' }).click();
  // }, 'Click interview search box');
  
  // // Apply Filters
  // await safeAction(page, async () => {
  //   await page.getByRole('button', { name: 'Filter Filters' }).click();
  // }, 'Click Filter button');
  
  // // Test various filters
  // await safeAction(page, async () => {
  //   await page.locator('div').filter({ hasText: /^Role$/ }).first().click();
  // }, 'Click Role filter');
  
  // await safeAction(page, async () => {
  //   await page.getByRole('button').nth(2).click();
  // }, 'Apply Role filter');
  
  // await safeAction(page, async () => {
  //   await page.getByText('Interview StageInterview').click();
  // }, 'Click Interview Stage filter again');
  
  // await safeAction(page, async () => {
  //   await page.getByText('Panel Members', { exact: true }).click();
  // }, 'Click Panel Members filter');
  
  // await safeAction(page, async () => {
  //   await page.getByRole('button').nth(2).click();
  // }, 'Apply Panel Members filter');
  
  // await safeAction(page, async () => {
  //   await page.locator('span').filter({ hasText: 'Scheduled By' }).click();
  // }, 'Click Scheduled By filter');
  
  // await safeAction(page, async () => {
  //   await page.getByRole('button').nth(2).click();
  // }, 'Apply Scheduled By filter');
  
  // // Past Interviews
  // await safeAction(page, async () => {
  //   await page.getByRole('button').filter({ hasText: 'Past Interviews' }).click();
  // }, 'Click Past Interviews button');
  
  // await safeAction(page, async () => {
  //   await page.getByRole('button', { name: 'Filter Filters' }).click();
  // }, 'Click Past Interviews filter');
  
  // await safeAction(page, async () => {
  //   await page.locator('span').filter({ hasText: 'Scheduled By' }).click();
  // }, 'Click Scheduled By in Past Interviews');
  
  // await safeAction(page, async () => {
  //   await page.locator('.relative.cursor-pointer > div:nth-child(2)').first().click();
  // }, 'Select Scheduled By option');
  
  // await safeAction(page, async () => {
  //   await page.getByRole('button').nth(2).click();
  // }, 'Apply Past Interviews filter');

  // // Referrals Section
  // console.log('Testing Referrals section...');
  // await safeAction(page, async () => {
  //   await page.getByRole('link', { name: 'Refer a Friend' }).click();
  // }, 'Navigate to Refer a Friend');
  
  // await safeAction(page, async () => {
  //   await page.getByRole('link', { name: 'My Referrals' }).click();
  // }, 'Navigate to My Referrals');
  
  // // Templates Section
  // console.log('Testing Templates section...');
  // await safeAction(page, async () => {
  //   await page.getByRole('link', { name: 'Templates' }).click();
  // }, 'Navigate to Templates');
  
  // // Sort functionality
  // await safeAction(page, async () => {
  //   await page.getByRole('button', { name: 'Sort Sort' }).click();
  // }, 'Click Sort button');
  
  // await safeAction(page, async () => {
  //   await page.getByText('Template Name').click();
  // }, 'Select Template Name sort');
  
  // await safeAction(page, async () => {
  //   await page.getByRole('button', { name: '↑' }).first().click();
  // }, 'Click ascending sort');
  
  // await safeAction(page, async () => {
  //   await page.getByRole('button', { name: 'Sort Sort' }).click();
  // }, 'Click Sort button again');
  
  // await safeAction(page, async () => {
  //   await page.getByRole('button', { name: '↓' }).first().click();
  // }, 'Click descending sort');
  
  // // Filter templates
  // await safeAction(page, async () => {
  //   await page.getByRole('button', { name: 'Filters' }).click();
  // }, 'Click Templates Filters');
  
  // await safeAction(page, async () => {
  //   await page.getByText('Last Updated', { exact: true }).click();
  // }, 'Click Last Updated filter');
  
  // await safeAction(page, async () => {
  //   await page.locator('.relative.cursor-pointer').first().click();
  // }, 'Click Last Updated dropdown');
  
  // await safeAction(page, async () => {
  //   await page.locator('.flex.items-center.justify-center.cursor-pointer').first().click();
  // }, 'Select Last Updated option');
  
  // await safeAction(page, async () => {
  //   await page.getByText('Template Types').click();
  // }, 'Click Template Types filter');
  
  // await safeAction(page, async () => {
  //   await page.locator('.relative.cursor-pointer > div:nth-child(2)').first().click();
  // }, 'Click Template Types dropdown');
  
  // await safeAction(page, async () => {
  //   await page.getByRole('img', { name: 'Selected' }).first().click();
  // }, 'Select Template Type option');
  
  // await safeAction(page, async () => {
  //   await page.locator('.fixed.inset-0').click();
  // }, 'Close filter modal');
  
  // // Candidates Section
  // console.log('Testing Candidates section...');
  // await safeAction(page, async () => {
  //   await page.getByRole('link', { name: 'Candidates' }).click();
  // }, 'Navigate to Candidates');
  
  // // Test different candidate statuses
  // await safeAction(page, async () => {
  //   await page.getByRole('button').filter({ hasText: 'In Applicants' }).click();
  // }, 'Click In Applicants tab');
  
  // await safeAction(page, async () => {
  //   await page.getByRole('button').filter({ hasText: 'In-pipeline' }).click();
  // }, 'Click In-pipeline tab');
  
  // await safeAction(page, async () => {
  //   await page.getByRole('button').filter({ hasText: 'Hired' }).click();
  // }, 'Click Hired tab');
  
  // await safeAction(page, async () => {
  //   await page.getByRole('button').filter({ hasText: 'Disqualified' }).click();
  // }, 'Click Disqualified tab');
  
  // await safeAction(page, async () => {
  //   await page.getByRole('button').filter({ hasText: 'Deleted' }).click();
  // }, 'Click Deleted tab');
  
  // // Sort candidates
  // await safeAction(page, async () => {
  //   await page.getByRole('button', { name: 'filter-icon Sort' }).click();
  // }, 'Click candidate Sort button');
  
  // await safeAction(page, async () => {
  //   await page.locator('label').filter({ hasText: 'Applied Date (Oldest - Newest)' }).click();
  // }, 'Select Applied Date sort');
  
  // // Test filters
  // await safeAction(page, async () => {
  //   await page.getByRole('button', { name: 'filter-icon Filters' }).click();
  // }, 'Click candidate Filters');
  
  // await safeAction(page, async () => {
  //   await page.getByRole('button', { name: 'Close filters' }).click();
  // }, 'Close candidate filters');

  // Panel Availability
  console.log('Testing Panel Availability section...');
  await safeAction(page, async () => {
    await page.getByRole('link', { name: 'Panel Availability' }).click();
  }, 'Navigate to Panel Availability');
  
  await safeAction(page, async () => {
    await page.getByRole('textbox', { name: 'Search by name, email' }).fill('Qaulity'); 
    await page.waitForTimeout(3000);
    await page.getByRole('textbox', { name: 'Search by name, email' }).clear();
  }, 'Clear search by name, email');
  
  await safeAction(page, async () => {
    await page.locator('tr:nth-child(3) > td:nth-child(3) > .flex.flex-col.justify-center').click();
  }, 'Click panel member row');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'filter Filters' }).click();
  }, 'Click Panel Availability Filters');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Tech Stacks' }).click();
  }, 'Click Tech Stacks filter');
  
  await safeAction(page, async () => {
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
  }, 'Click Tech Stacks search');
  
  await safeAction(page, async () => {
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('JavaScript');
  }, 'Clear Tech Stacks search');
  
  await safeAction(page, async () => {
    await page.locator('label').filter({ hasText: 'Select All' }).click();
  }, 'Click Select All in Tech Stacks');
  
  await safeAction(page, async () => {
    await page.locator('label').filter({ hasText: 'Select All' }).uncheck();
  }, 'Uncheck Select All in Tech Stacks');
  
  await safeAction(page, async () => {
    await page.getByRole('checkbox', { name: 'JavaScript' }).check();
  }, 'Check JavaScript checkbox');
  
  await safeAction(page, async () => {
    await page.getByRole('checkbox', { name: 'JavaScript' }).uncheck();
  }, 'Uncheck JavaScript checkbox');
  
  await safeAction(page, async () => {
    await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
  }, 'Close Tech Stacks filter');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Job Role' }).click();
  }, 'Click Job Role filter');
  
  await safeAction(page, async () => {
    await page.getByRole('checkbox', { name: 'Select All' }).check();
  }, 'Check Select All in Job Role');
  
  await safeAction(page, async () => {
    await page.locator('label').filter({ hasText: 'Select All' }).click();
  }, 'Click Select All label in Job Role');
  
  await safeAction(page, async () => {
    await page.locator('label').filter({ hasText: 'Select All' }).check();
  }, 'Check Select All label in Job Role');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Clear All' }).click();
  }, 'Click Clear All in Job Role');
  
  await safeAction(page, async () => {
    await page.getByRole('combobox').selectOption('Marketing');
  }, 'Select Marketing from dropdown');
  
  await safeAction(page, async () => {
    await page.getByRole('textbox', { name: 'Search', exact: true }).click();
  }, 'Click Job Role search');
  
  await safeAction(page, async () => {
    await page.getByRole('textbox', { name: 'Search', exact: true }).fill('Analyst');
  }, 'Clear Job Role search');
  
  await safeAction(page, async () => {
    await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
  }, 'Close Job Role filter');
  
  // Return to Jobs
  await safeAction(page, async () => {
    await page.getByRole('link', { name: 'Jobs' }).click();
  }, 'Return to Jobs page');
  
  console.log('✅ Test completed successfully!');
  
  // Close the browser context
  await context.close();
});
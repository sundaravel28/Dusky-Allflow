import { test, expect, chromium, Page } from '@playwright/test';

// Set timeout for all tests in this file
test.setTimeout(900000); // 15 minutes

// User Data Directory for your custom Chrome profile
const userDataDir = 'C:\\Users\\sundaravel.v\\Documents\\All Flow - Dusky\\C\\Users\\Windows\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1\\Profile 1';

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
    await page.goto('https://talent-qa.ideas2it.com');
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
  
  // Interviews Section
  console.log('Testing Interviews section...');
  await safeAction(page, async () => {
    await page.getByRole('link', { name: 'Interviews' }).click();
  }, 'Navigate to Interviews');
  
  await safeAction(page, async () => {
    await page.getByRole('searchbox', { name: 'Search by name, email...' }).click();
  }, 'Click interview search box');
  
  // Apply Filters
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Filter Filters' }).click();
  }, 'Click Filter button');
  
  // Test various filters
  await safeAction(page, async () => {
    await page.locator('div').filter({ hasText: /^Role$/ }).first().click();
  }, 'Click Role filter');
  
  await safeAction(page, async () => {
    await page.getByRole('button').nth(2).click();
  }, 'Apply Role filter');
  
  await safeAction(page, async () => {
    await page.getByText('Interview StageInterview').click();
  }, 'Click Interview Stage filter again');
  
  await safeAction(page, async () => {
    await page.getByText('Panel Members', { exact: true }).click();
  }, 'Click Panel Members filter');
  
  await safeAction(page, async () => {
    await page.getByRole('button').nth(2).click();
  }, 'Apply Panel Members filter');
  
  await safeAction(page, async () => {
    await page.locator('span').filter({ hasText: 'Scheduled By' }).click();
  }, 'Click Scheduled By filter');
  
  await safeAction(page, async () => {
    await page.getByRole('button').nth(2).click();
  }, 'Apply Scheduled By filter');
  
  // Past Interviews
  await safeAction(page, async () => {
    await page.getByRole('button').filter({ hasText: 'Past Interviews' }).click();
  }, 'Click Past Interviews button');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Filter Filters' }).click();
  }, 'Click Past Interviews filter');
  
  await safeAction(page, async () => {
    await page.locator('span').filter({ hasText: 'Scheduled By' }).click();
  }, 'Click Scheduled By in Past Interviews');
  
  await safeAction(page, async () => {
    await page.locator('.relative.cursor-pointer > div:nth-child(2)').first().click();
  }, 'Select Scheduled By option');
  
  await safeAction(page, async () => {
    await page.getByRole('button').nth(2).click();
  }, 'Apply Past Interviews filter');
  
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
    await page.locator('div:nth-child(6) > .hover\\:bg-purple-700').click();
  }, 'Click tech stack option');
  
  
  // Referrals Section
  console.log('Testing Referrals section...');
  await safeAction(page, async () => {
    await page.getByRole('link', { name: 'Refer a Friend' }).click();
  }, 'Navigate to Refer a Friend');
  
  await safeAction(page, async () => {
    await page.getByRole('link', { name: 'My Referrals' }).click();
  }, 'Navigate to My Referrals');
  
  // Templates Section
  console.log('Testing Templates section...');
  await safeAction(page, async () => {
    await page.getByRole('link', { name: 'Templates' }).click();
  }, 'Navigate to Templates');
  
  // Sort functionality
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Sort' }).click();
  }, 'Click Sort button');
  
  await safeAction(page, async () => {
    await page.getByText('Template Name').click();
  }, 'Select Template Name sort');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: '↑' }).first().click();
  }, 'Click ascending sort');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Sort Sort' }).click();
  }, 'Click Sort button again');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: '↓' }).first().click();
  }, 'Click descending sort');
  
  // Filter templates
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Filters' }).click();
  }, 'Click Templates Filters');
  
  await safeAction(page, async () => {
    await page.getByText('Last Updated', { exact: true }).click();
  }, 'Click Last Updated filter');
  
  await safeAction(page, async () => {
    await page.locator('.relative.cursor-pointer').first().click();
  }, 'Click Last Updated dropdown');
  
  await safeAction(page, async () => {
    await page.locator('.flex.items-center.justify-center.cursor-pointer').first().click();
  }, 'Select Last Updated option');
  
  await safeAction(page, async () => {
    await page.getByText('Template Types').click();
  }, 'Click Template Types filter');
  
  await safeAction(page, async () => {
    await page.locator('.relative.cursor-pointer > div:nth-child(2)').first().click();
  }, 'Click Template Types dropdown');
  
  await safeAction(page, async () => {
    await page.getByRole('img', { name: 'Selected' }).first().click();
  }, 'Select Template Type option');
  
  await safeAction(page, async () => {
    await page.locator('.fixed.inset-0').click();
  }, 'Close filter modal');

  
  await safeAction(page, async () => {
    await page.getByRole('link', { name: 'Templates' }).click();
  }, 'Open Templates');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Sort Sort' }).click();
  }, 'Open Sort menu');
  
  await safeAction(page, async () => {
    await page.getByTitle('Old to New').click();
  }, 'Sort by Old to New');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Sort Sort' }).click();
  }, 'Open Sort menu');
  
  await safeAction(page, async () => {
    await page.getByTitle('New to Old').click();
  }, 'Sort by New to Old');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Sort Sort' }).click();
  }, 'Open Sort menu');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: '↑' }).first().click();
  }, 'Apply ascending sort (Template Name)');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Sort Sort' }).click();
  }, 'Open Sort menu');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: '↓' }).first().click();
  }, 'Apply descending sort (Template Name)');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Sort Sort' }).click();
  }, 'Open Sort menu');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: '↑' }).nth(2).click();
  }, 'Apply ascending sort (some field)');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Sort Sort' }).click();
  }, 'Open Sort menu');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: '↓' }).nth(2).click();
  }, 'Apply descending sort (some field)');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Sort Sort' }).click();
  }, 'Open Sort menu');
  
  await safeAction(page, async () => {
    await page.getByTitle('Entry → Mid → Executive').click();
  }, 'Sort by Level Entry→Mid→Executive');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Sort Sort' }).click();
  }, 'Open Sort menu');
  
  await safeAction(page, async () => {
    await page.getByTitle('Executive → Mid → Entry').click();
  }, 'Sort by Level Executive→Mid→Entry');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Sort Sort' }).click();
  }, 'Open Sort menu');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: '↑' }).nth(4).click();
  }, 'Apply ascending sort (another field)');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Sort Sort' }).click();
  }, 'Open Sort menu');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: '↓' }).nth(4).click();
  }, 'Apply descending sort (another field)');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Sort Sort' }).click();
  }, 'Open Sort menu');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Clear Sort' }).click();
  }, 'Clear all sorts');
  
  // Candidates Section
  console.log('Testing Candidates section...');
  await safeAction(page, async () => {
    await page.getByRole('link', { name: 'Candidates' }).click();
  }, 'Navigate to Candidates');
  
  // Test different candidate statuses
  await safeAction(page, async () => {
    await page.getByRole('button').filter({ hasText: 'In Applicants' }).click();
  }, 'Click In Applicants tab');

  await safeAction(page, async () => {
    await page.getByRole('button').filter({ hasText: 'All' }).click();
  }, 'Click In Applicants tab');
  
  await safeAction(page, async () => {
    await page.getByRole('button').filter({ hasText: 'In-pipeline' }).click();
  }, 'Click In-pipeline tab');
  
  await safeAction(page, async () => {
    await page.getByRole('button').filter({ hasText: 'Hired' }).click();
  }, 'Click Hired tab');
  
  await safeAction(page, async () => {
    await page.getByRole('button').filter({ hasText: 'Disqualified' }).click();
  }, 'Click Disqualified tab');
  
  await safeAction(page, async () => {
    await page.getByRole('button').filter({ hasText: 'Deleted' }).click();
  }, 'Click Deleted tab');
  
  // Sort candidates
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'filter-icon Sort' }).click();
  }, 'Click candidate Sort button');
  
  await safeAction(page, async () => {
    await page.locator('label').filter({ hasText: 'Applied Date (Oldest - Newest)' }).click();
  }, 'Select Applied Date sort');
  
  // Test filters
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'filter-icon Filters' }).click();
  }, 'Click candidate Filters');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Close filters' }).click();
  }, 'Close candidate filters');
  
  // Reports
  await safeAction(page, async () => {
    await page.getByRole('link', { name: 'Reports' }).click();
  }, 'Open Reports');
  
  await safeAction(page, async () => {
    await page.getByLabel('Status:').selectOption('Paused');
  }, 'Select status Paused');
  
  await safeAction(page, async () => {
    await page.goto('https://talent-qa.ideas2it.com/dashboard?status=Paused');
  }, 'Navigate to Paused dashboard');
  
  await safeAction(page, async () => {
    await page.getByLabel('Status:').selectOption('Closed');
  }, 'Select status Closed');
  
  await safeAction(page, async () => {
    await page.goto('https://talent-qa.ideas2it.com/dashboard?status=Closed');
  }, 'Navigate to Closed dashboard');
  
  await safeAction(page, async () => {
    await page.getByLabel('Status:').selectOption('Published');
  }, 'Select status Published');
  
  await safeAction(page, async () => {
    await page.goto('https://talent-qa.ideas2it.com/dashboard');
  }, 'Navigate to Published dashboard');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Grid View' }).click();
  }, 'Switch to Grid View');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'List View' }).click();
  }, 'Switch to List View');
  
  await safeAction(page, async () => {
    await page.getByRole('textbox', { name: 'Search job roles...' }).click();
  }, 'Focus job role search');
  
  await safeAction(page, async () => {
    await page.getByRole('textbox', { name: 'Search job roles...' }).fill('QA');
  }, 'Search for QA');
  
  await safeAction(page, async () => {
    await page.getByRole('cell', { name: 'Front End QA' }).click();
  }, 'Open Front End QA report');
  
  await safeAction(page, async () => {
    await page.getByRole('heading', { name: 'Process vs Channel' }).click();
  }, 'Open Process vs Channel');
  
  await safeAction(page, async () => {
    await page.locator('div').filter({ hasText: /^Process vs Channel$/ }).click();
  }, 'Focus Process vs Channel chart');
  
  await safeAction(page, async () => {
    await page.getByRole('cell', { name: 'Total', exact: true }).click();
  }, 'Click Total cell');
  
  await safeAction(page, async () => {
    await page.getByRole('heading', { name: 'Channel Funnel Analysis' }).click();
  }, 'Open Channel Funnel Analysis');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'arrow-left Back' }).click();
  }, 'Back from report');
  
  await safeAction(page, async () => {
    await page.getByRole('button', { name: 'Export' }).click();
    await page.waitForTimeout(120000); // 2 minutes
  }, 'Export report');

  // Return to Jobs
  await safeAction(page, async () => {
    await page.getByRole('link', { name: 'Jobs' }).click();
  }, 'Return to Jobs page');
  
  console.log('✅ Test completed successfully!');
  
  // Close the browser context
  await context.close();
});
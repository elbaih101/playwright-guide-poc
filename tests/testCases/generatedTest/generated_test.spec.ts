import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await page.getByRole('button', { name: 'Search (Ctrl+K)' }).click();
    await page.getByRole('searchbox', { name: 'Search' }).fill('potatoes');
    await page.getByRole('searchbox', { name: 'Search' }).press('Enter');
    await page.getByRole('searchbox', { name: 'Search' }).fill('pota');
    await page.getByRole('link', { name: 'Potentially breaking change' }).click();
});
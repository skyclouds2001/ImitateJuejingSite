import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('next.js template')
  await expect(page.locator('h1')).toContainText('next.js template')
})

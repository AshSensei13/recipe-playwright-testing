import { expect } from "@playwright/test";

class AllRecipes {
    constructor(page) {
        this.page = page;
        this.first = page.getByRole('link').nth(3)
        this.navshows = page.getByRole('link', { name: 'Shows', exact: true })
    }

    async goto() {
        await this.page.goto("https://movie-tracker-jza6.onrender.com/shows", {waitUntil: "domcontentloaded",})
        await this.page.waitForLoadState('networkidle')
        await expect(this.page.locator('div.shows')).toBeVisible()
    }

    async click1() {
        await this.first.click()
        await this.page.waitForLoadState('networkidle')
        await expect(this.page.locator('div.show-card')).toBeVisible()
        await expect(this.page.getByRole('heading', { name: 'Under the Dome' })).toBeVisible()
    };

    async backToRecipes() {
        await this.navshows.click()
        await this.page.waitForLoadState('networkidle')
        await expect(this.page.locator('div.shows')).toBeVisible()
    }
}


module.exports = { AllRecipes }
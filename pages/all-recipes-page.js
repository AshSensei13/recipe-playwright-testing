import { expect } from "@playwright/test";

class AllRecipes {
    constructor(page) {
        this.page = page;
        this.first = page.getByRole('link', { name: 'California Roll Sushi Bowls' })
        this.navAllRecipes = page.getByRole('link', { name: 'All recipes', exact: true });
    }

    async goto() {
        await this.page.goto("https://ts-recipe-finder.onrender.com/recipes", {waitUntil: "domcontentloaded",})
        await this.page.waitForLoadState('networkidle')
        await expect(this.first).toBeVisible()
    }

    async click1() {
        await this.first.click()
        await this.page.waitForLoadState('networkidle')
        await expect(this.page.locator('div.recipe-card')).toBeVisible()
        await expect(this.page.getByRole('heading', { name: 'California Roll Sushi Bowls' })).toBeVisible()
    };

    async backToRecipes() {
        await this.navAllRecipes.click()
        await this.page.waitForLoadState('networkidle')
        await expect(this.first).toBeVisible()
    }
}


module.exports = { AllRecipes }
import { expect } from "@playwright/test";

class HomePage {
    constructor(page) {
        this.page = page;
        this.navhome = page.getByRole('link', { name: 'Home', exact: true })
        this.header = page.getByText('HomePage')
        this.navAllRecipes = page.getByRole('link', { name: 'All recipes', exact: true });
        this.navsearch = page.getByRole('link', { name: 'Search recipes' });
        this.image = page.getByRole('link', { name: 'Chicken Caesar Wraps American' })
    }

    async goto() {
        await this.page.goto("https://ts-recipe-finder.onrender.com/", {waitUntil: "domcontentloaded",})
    }

    async checkHeader() {
        await expect(this.header).toBeVisible()
    }

    async navigate() {
        await this.navAllRecipes.click()
        await expect(this.page).toHaveURL("https://ts-recipe-finder.onrender.com/recipes", {waitUntil: "domcontentloaded",})
        await this.page.waitForLoadState('networkidle')
        await this.navhome.click()
        await this.navsearch.click()
        await expect(this.page).toHaveURL("https://ts-recipe-finder.onrender.com/search", {waitUntil: "domcontentloaded",})
        await this.page.waitForLoadState('networkidle')
        await expect(this.image).toBeVisible()
        await this.navhome.click()
    }

}

module.exports = { HomePage }
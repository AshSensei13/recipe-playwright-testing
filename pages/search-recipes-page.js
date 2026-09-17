import { expect } from "@playwright/test";

class SearchPage {
	    constructor(page) {
        this.page = page;
        this.header = page.getByRole('heading', { name: 'Chicken Caesar Wraps' })
		this.searchForm = page.getByRole('textbox')
		this.submitButton = page.getByRole('button', { name: 'Search' })
		this.imgChicken = page.getByRole('link', { name: 'Chicken Caesar Wraps Main' })
		this.imgBeef = page.getByRole('link', { name: 'One Pot Hamburger Stroganoff' })
    }

    async goto() {
        await this.page.goto("https://ts-recipe-finder.onrender.com/search", {waitUntil: "domcontentloaded",})
        await this.page.waitForLoadState('networkidle')

        await expect(this.imgChicken).toBeVisible()
    }

	async checkHeader() {
		await expect(this.header).toBeVisible()
	}

	async fillSearchForm({recipe}) {
		await this.searchForm.fill(recipe)
	}

	async submit() {
		await this.submitButton.click()
		await this.page.waitForLoadState('networkidle')
	}

	async expectSuccess() {
		await expect(this.imgBeef).toBeVisible()
		await this.imgBeef.click()
		await this.page.waitForLoadState('networkidle')

		await expect(this.page.getByRole('heading', { name: 'One Pot Hamburger Stroganoff' })).toBeVisible()
	}
}

module.exports = { SearchPage }
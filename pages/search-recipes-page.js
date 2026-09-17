import { expect } from "@playwright/test";

class SearchPage {
	    constructor(page) {
        this.page = page;
        this.header = page.getByRole('heading', { name: 'Avatar: Seven Havens' })
		this.searchForm = page.getByRole('textbox')
		this.submitButton = page.getByRole('button', { name: 'Search' })
    }

    async goto() {
        await this.page.goto("https://movie-tracker-jza6.onrender.com/search", {waitUntil: "domcontentloaded",})
        await this.page.waitForLoadState('networkidle')

        await expect(this.page.locator('div').nth(5)).toBeVisible()
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
}

module.exports = { SearchPage }
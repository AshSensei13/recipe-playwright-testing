import { expect, test } from "@playwright/test";
const { SearchPage } = require('../pages/search-recipes-page')

test("Loads the search page and shows default recipes", async ({ page }) => {
    const search = new SearchPage(page)
    await search.goto()
	await search.checkHeader()
})

test("Loads the search page and fills in search form", async ({ page }) => {
    const search = new SearchPage(page)
    await search.goto()

	await search.fillSearchForm({
		recipe: 'Beef'
	})

	await search.submit()
	await search.expectSuccess()
})
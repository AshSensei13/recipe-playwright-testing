import { expect, test } from "@playwright/test";
const { AllRecipes } = require('../pages/all-recipes-page')

test("Loads the page and shows all recipes", async ({ page }) => {
    const all = new AllRecipes(page)
    await all.goto()
})


test("Clicks on the first recipe and shows its information", async ({ page }) => {
    const all = new AllRecipes(page)
    await all.goto()
    await all.click1()
})

test("Navigates back to all recipes after clicking single recipe", async ({ page }) => {
    const all = new AllRecipes(page)
    await all.goto()
    await all.click1()
    await all.backToRecipes()
})
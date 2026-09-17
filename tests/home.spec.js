import { expect,test } from "@playwright/test";
const { HomePage } = require('../pages/home-page')

test("displays a home page and can navaigate between different pages", async ({ page }) => {
    const home = new HomePage(page)
    await home.goto()
    await home.checkHeader()
    await home.navigate()
    await home.links()
})
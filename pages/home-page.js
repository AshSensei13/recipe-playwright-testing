import { expect } from "@playwright/test";

class HomePage {
    constructor(page) {
        this.page = page;
        this.navhome = page.getByRole('link', { name: 'Home' });
        this.header = page.getByRole('heading', { name: 'Top TV' });
        this.navshows = page.getByRole('link', { name: 'Shows', exact: true });
        this.navsearch = page.getByRole('link', { name: 'Search shows' });
        this.showbutton = page.getByRole('link', { name: 'Explore shows' });
        this.searchbutton = page.getByRole('link', { name: 'Search your favorite show' });
    }

    async goto() {
        await this.page.goto("https://movie-tracker-jza6.onrender.com/", {waitUntil: "domcontentloaded",})
    }

    async checkHeader() {
        await expect(this.header).toBeVisible()
    }

    async navigate() {
        await this.navshows.click()
        await expect(this.page).toHaveURL("https://movie-tracker-jza6.onrender.com/shows", {waitUntil: "domcontentloaded",})
        await this.navhome.click()
        await this.navsearch.click()
        await expect(this.page).toHaveURL("https://movie-tracker-jza6.onrender.com/search", {waitUntil: "domcontentloaded",})
        await this.navhome.click()
    }

    async links() {
        await this.showbutton.click()
        await expect(this.page).toHaveURL("https://movie-tracker-jza6.onrender.com/shows", {waitUntil: "domcontentloaded",})
        await this.navhome.click()
        await this.searchbutton.click()
        await expect(this.page).toHaveURL("https://movie-tracker-jza6.onrender.com/search", {waitUntil: "domcontentloaded",})
        await this.navhome.click()
    }

}

module.exports = { HomePage }
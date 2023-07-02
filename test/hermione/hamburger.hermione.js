const { assert } = require('chai');

describe('Hamburga', async function() {
    it('На ширине меньше 576px навигационное меню должно скрываться за гамбургер', async ({ browser }) => {
        await browser.setWindowSize(575, 500);
        await browser.url('http://localhost:3000/hw/store');
    
        const appToggler = await browser.$('.Application-Toggler');
        const appMenu = await browser.$('.Application-Menu');
    
        assert.equal(await appToggler.isDisplayed(), true);
        assert.equal(await appMenu.isDisplayed(), false);
    });

    it('при выборе элемента из меню "гамбургера", меню должно закрываться', async function () {
        await this.browser.url('http://localhost:3000/hw/store');
        await this.browser.setWindowSize(575, 768);

        const hamburgaMenuButt = await this.browser.$('.navbar-toggler-icon');
        await hamburgaMenuButt.click();

        const menu = await this.browser.$('.Application-Menu');
        assert.strictEqual(await menu.isDisplayed(), true, 'менюха не отображается');

        const menuItem = await this.browser.$('.nav-link');
        await menuItem.click();

        assert.strictEqual(await menu.isDisplayed(), false, 'меню не закрывается после выбора элемента');
    });
});



const { assert } = require('chai');

describe('Catalog', async function() {
    
    it('Отображение названий', async function () {
        await this.browser.setWindowSize(1920, 1080);
        await this.browser.url('http://localhost:3000/hw/store/catalog');
    
        const products = await this.browser.$$('.ProductItem');
        assert.strictEqual(products.length, 27);
        const mainTabId = await this.browser.getWindowHandle();

        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            const cardBodyElement = await product.$('.card-body');
            const linkElement = await cardBodyElement.$('.ProductItem-DetailsLink');
        
            const href = await linkElement.getAttribute('href');
            await this.browser.newWindow(href, '_blank');
            
            const pageTitleElement = await this.browser.$('.ProductDetails-Name');
            const pageTitle = await pageTitleElement.getText();
            assert.notStrictEqual(pageTitle, '');

            const allTabIds = await this.browser.getWindowHandles();
            for (const tabId of allTabIds) {
                if (tabId !== mainTabId) {
                    await this.browser.switchToWindow(tabId);
                    await this.browser.closeWindow();
                    break;
                }
            }
            await this.browser.switchToWindow(mainTabId);
        }
    });

    it('Отображение описаний', async function () {
        await this.browser.setWindowSize(1920, 1080);
        await this.browser.url('http://localhost:3000/hw/store/catalog');
    
        const products = await this.browser.$$('.ProductItem');
        assert.strictEqual(products.length, 27);
        const mainTabId = await this.browser.getWindowHandle();

        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            const cardBodyElement = await product.$('.card-body');
            const linkElement = await cardBodyElement.$('.ProductItem-DetailsLink');
        
            const href = await linkElement.getAttribute('href');
            await this.browser.newWindow(href, '_blank');
            
            const pageDescriptionElement = await this.browser.$('.ProductDetails-Description');
            const pageDescription = await pageDescriptionElement.getText();
            assert.notStrictEqual(pageDescription, '');

            const allTabIds = await this.browser.getWindowHandles();
            for (const tabId of allTabIds) {
                if (tabId !== mainTabId) {
                    await this.browser.switchToWindow(tabId);
                    await this.browser.closeWindow();
                    break;
                }
            }
            await this.browser.switchToWindow(mainTabId);
        }
    });

    it('Отображение цен', async function () {
        await this.browser.setWindowSize(1920, 1080);
        await this.browser.url('http://localhost:3000/hw/store/catalog');
    
        const products = await this.browser.$$('.ProductItem');
        assert.strictEqual(products.length, 27);
        const mainTabId = await this.browser.getWindowHandle();

        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            const cardBodyElement = await product.$('.card-body');
            const linkElement = await cardBodyElement.$('.ProductItem-DetailsLink');
        
            const href = await linkElement.getAttribute('href');
            await this.browser.newWindow(href, '_blank');
            
            const pagePriceElement = await this.browser.$('.ProductDetails-Price');
            const pagePrice = await pagePriceElement.getText();
            assert.notStrictEqual(pagePrice, '');

            const allTabIds = await this.browser.getWindowHandles();
            for (const tabId of allTabIds) {
                if (tabId !== mainTabId) {
                    await this.browser.switchToWindow(tabId);
                    await this.browser.closeWindow();
                    break;
                }
            }
            await this.browser.switchToWindow(mainTabId);
        }
    });

    it('Отображение цветов', async function () {
        await this.browser.setWindowSize(1920, 1080);
        await this.browser.url('http://localhost:3000/hw/store/catalog');
    
        const products = await this.browser.$$('.ProductItem');
        assert.strictEqual(products.length, 27);
        const mainTabId = await this.browser.getWindowHandle();

        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            const cardBodyElement = await product.$('.card-body');
            const linkElement = await cardBodyElement.$('.ProductItem-DetailsLink');
        
            const href = await linkElement.getAttribute('href');
            await this.browser.newWindow(href, '_blank');
            
            const pageColorElement = await this.browser.$('.ProductDetails-Color');
            const pageColor = await pageColorElement.getText();
            assert.notStrictEqual(pageColor, '');

            const allTabIds = await this.browser.getWindowHandles();
            for (const tabId of allTabIds) {
                if (tabId !== mainTabId) {
                    await this.browser.switchToWindow(tabId);
                    await this.browser.closeWindow();
                    break;
                }
            }
            await this.browser.switchToWindow(mainTabId);
        }
    });

    it('Отображение материалов', async function () {
        await this.browser.setWindowSize(1920, 1080);
        await this.browser.url('http://localhost:3000/hw/store/catalog');
    
        const products = await this.browser.$$('.ProductItem');
        assert.strictEqual(products.length, 27);
        const mainTabId = await this.browser.getWindowHandle();

        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            const cardBodyElement = await product.$('.card-body');
            const linkElement = await cardBodyElement.$('.ProductItem-DetailsLink');
        
            const href = await linkElement.getAttribute('href');
            await this.browser.newWindow(href, '_blank');
            
            const pageMaterialElement = await this.browser.$('.ProductDetails-Material');
            const pageMaterial = await pageMaterialElement.getText();
            assert.notStrictEqual(pageMaterial, '');

            const allTabIds = await this.browser.getWindowHandles();
            for (const tabId of allTabIds) {
                if (tabId !== mainTabId) {
                    await this.browser.switchToWindow(tabId);
                    await this.browser.closeWindow();
                    break;
                }
            }
            await this.browser.switchToWindow(mainTabId);
        }
    });

    it('Отображение кнопки', async function () {
        await this.browser.setWindowSize(1920, 1080);
        await this.browser.url('http://localhost:3000/hw/store/catalog');
    
        const products = await this.browser.$$('.ProductItem');
        assert.strictEqual(products.length, 27);
        // Сохранить идентификатор основной вкладки
        const mainTabId = await this.browser.getWindowHandle();

        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            const cardBodyElement = await product.$('.card-body');
            const linkElement = await cardBodyElement.$('.ProductItem-DetailsLink');
        
            // Получить URL ссылки
            const href = await linkElement.getAttribute('href');
            // Открываем новую вкладку
            await this.browser.newWindow(href, '_blank');
            // Выполнить проверки на новой вкладке
            const pageAddToCartElement = await this.browser.$('.ProductDetails-AddToCart');
            const pageAddToCart = await pageAddToCartElement.getText();
            assert.notStrictEqual(pageAddToCart, '');

            // Закрыть текущую вкладку (не основную)
            const allTabIds = await this.browser.getWindowHandles();
            for (const tabId of allTabIds) {
                if (tabId !== mainTabId) {
                    await this.browser.switchToWindow(tabId);
                    await this.browser.closeWindow(); // Используем closeWindow вместо deleteSession
                    break;
                }
            }
            // Вернуться на основную вкладку
            await this.browser.switchToWindow(mainTabId);
        }
    });
});



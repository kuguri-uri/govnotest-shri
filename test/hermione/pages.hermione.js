const BASE_URL = 'http://localhost:3000/hw/store';

const PAGES_URLS = {
    home: BASE_URL,
    catalog: `${BASE_URL}/catalog`,
    delivery: `${BASE_URL}/delivery`,
    contacts: `${BASE_URL}/contacts`,
    cart: `${BASE_URL}/cart/`,
}

const LAYOUTS = {
    'large': {
        width: 1920,
        height: 1080,
    },
    'medium': {
        width: 767,
        height: 1080,
    },
    'small': {
        width: 320,
        height: 1080,
    },
}

describe('Адаптация вёрстки под ширину экрана', async function() {
    it('Страница Home адаптируется', async function() {
        // await this.browser.setWindowSize(1920, 1080);
        await this.browser.setWindowSize(LAYOUTS.large.width, parseInt(LAYOUTS.large.height, 10));
        await this.browser.url(PAGES_URLS.home);
        await this.browser.assertView('homePage', '.Application', {
            allowViewportOverflow: false,
        });

        // await this.browser.setWindowSize(767, 1080);
        await this.browser.setWindowSize(LAYOUTS.medium.width, parseInt(LAYOUTS.medium.height, 10));
        await this.browser.assertView('homePageMedium', '.Application', {
            allowViewportOverflow: false,
        });

        // await this.browser.setWindowSize(320, 1080);
        await this.browser.setWindowSize(LAYOUTS.small.width, parseInt(LAYOUTS.small.height, 10));
        await this.browser.assertView('homePageSmall', '.Application', {
            allowViewportOverflow: false,
        });
    });

    it('Страница Catalog адаптируется', async function() {
        await this.browser.setWindowSize(LAYOUTS.large.width, LAYOUTS.large.height);
        await this.browser.url(PAGES_URLS.catalog);
        await this.browser.assertView('catalogPage', '.Application', {
            allowViewportOverflow: false,
        });

        await this.browser.setWindowSize(LAYOUTS.medium.width, LAYOUTS.medium.height);
        await this.browser.assertView('catalogPageMedium', '.Application', {
            allowViewportOverflow: false,
        });

        await this.browser.setWindowSize(LAYOUTS.small.width, LAYOUTS.small.height);
        await this.browser.assertView('catalogPageSmall', '.Application', {
            allowViewportOverflow: false,
        });
    });

    it('Страница Delivery адаптируется', async function() {
        await this.browser.setWindowSize(LAYOUTS.large.width, LAYOUTS.large.height);
        await this.browser.url(PAGES_URLS.delivery);
        await this.browser.assertView('deliveryPage', '.Application', {
            allowViewportOverflow: false,
        });

        await this.browser.setWindowSize(LAYOUTS.medium.width, LAYOUTS.medium.height);
        await this.browser.assertView('deliveryPageMedium', '.Application', {
            allowViewportOverflow: false,
        });

        await this.browser.setWindowSize(LAYOUTS.small.width, LAYOUTS.small.height);
        await this.browser.assertView('deliveryPageSmall', '.Application', {
            allowViewportOverflow: false,
        });
    });

    it('Страница Contacts адаптируется', async function() {
        await this.browser.setWindowSize(LAYOUTS.large.width, LAYOUTS.large.height);
        await this.browser.url(PAGES_URLS.contacts);
        await this.browser.assertView('contactsPage', '.Application', {
            allowViewportOverflow: false,
        });

        await this.browser.setWindowSize(LAYOUTS.medium.width, LAYOUTS.medium.height);
        await this.browser.assertView('contactsPageMedium', '.Application', {
            allowViewportOverflow: false,
        });

        await this.browser.setWindowSize(LAYOUTS.small.width, LAYOUTS.small.height);
        await this.browser.assertView('contactsPageSmall', '.Application', {
            allowViewportOverflow: false,
        });
    });

    it('Страница Cart адаптируется', async function() {
        await this.browser.setWindowSize(LAYOUTS.large.width, LAYOUTS.large.height);
        await this.browser.url(PAGES_URLS.cart);
        await this.browser.assertView('cartPage', '.Application', {
            allowViewportOverflow: false,
        });

        await this.browser.setWindowSize(LAYOUTS.medium.width, LAYOUTS.medium.height);
        await this.browser.assertView('cartPageMedium', '.Application', {
            allowViewportOverflow: false,
        });

        await this.browser.setWindowSize(LAYOUTS.small.width, LAYOUTS.small.height);
        await this.browser.assertView('cartPageSmall', '.Application', {
            allowViewportOverflow: false,
        });
    });
})
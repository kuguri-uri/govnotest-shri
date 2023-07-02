// const basename = '/';
// const api = new ExampleApi(basename);
// const cart = new CartApi();
// const store = initStore(api, cart);

// import { Application } from '../../src/client/Application';

// const HEADER_LINKS = [ 'catalog', 'delivery', 'contacts', 'cart' ];

// describe('Общие требования:', () => {
//     it('в шапке отображаются ссылки на страницы магазина, а также ссылка на корзину', () => {
//         const application = (
//             <BrowserRouter basename={basename}>
//             <Provider store={store}>
//                 <Application />
//             </Provider>
//             </BrowserRouter>
//         );

//         render(application);

//         const links = HEADER_LINKS.map(link => screen.queryByRole('link', { name: new RegExp(link, 'i')}));
//         links.forEach((link, idx) => expect(link?.getAttribute('href')).toStrictEqual(`/${ HEADER_LINKS[idx] }`));
//     });

//     it('Название магазина в шапке должно быть ссылкой на главную страницу', () => {
//         const application = (
//             <BrowserRouter basename={basename}>
//             <Provider store={store}>
//                 <Application />
//             </Provider>
//             </BrowserRouter>
//         );

//         const { getByTestId } = render(application);
//         expect(getByTestId('home').getAttribute('href')).toBe('/');
//     });
// })
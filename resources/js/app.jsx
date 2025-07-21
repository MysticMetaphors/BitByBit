import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import '../css/app.css'
import MainLayout from './Layouts/MainLayout';

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
        let page = pages[`./Pages/${name}.jsx`].default;
        page.layout ??= (page) => <MainLayout>{page}</MainLayout>;
        return page;
    },
    setup({ el, App, props }) {
        const { ziggy } = props.initialPage.props;
        const Ziggy = { ...ziggy, location: window.location.href };

        createRoot(el).render(

            <App
                {...props}
                initialPage={{
                    ...props.initialPage,
                    props: {
                        ...props.initialPage.props,
                        Ziggy,
                    },
                }}
            />
        );

        window.Ziggy = Ziggy;
    },
});

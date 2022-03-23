import { ThemeConfig } from './config.model';


export const themeConfig: ThemeConfig = {

    colorTheme: 'theme-indigo-pink',
    layout: {
        style: 'vertical-layout-1',
        navbar: {
            colorTheme: 'theme-indigo-pink',
            folded: false,
            hidden: false,
            position: 'left'
        },
        header: {
            colorTheme: 'theme-light',
            hidden: false,
            position: 'below-static'
        },
        footer: {
            colorTheme: 'theme-dark',
            hidden: false,
            position: 'below-fixed'
        }
    }
}

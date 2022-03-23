export interface ThemeConfig
{
    colorTheme: string;
    layout: {
        style: string,
        navbar: {
            colorTheme: string,
            hidden: boolean,
            folded: boolean,
            position: 'left' | 'right' | 'top',
        },
        header: {
            colorTheme: string,
            hidden: boolean,
            position: 'above' | 'above-static' | 'above-fixed' | 'below' | 'below-static' | 'below-fixed'
        }
        footer: {
            colorTheme: string,
            hidden: boolean,
            position: 'above' | 'above-static' | 'above-fixed' | 'below' | 'below-static' | 'below-fixed'
        }
    };
}

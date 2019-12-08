export const MainNav = [
    {
        icon: 'pe-7s-display1',
        label: 'CYG Dashboard',
        to: '#/dashboards/basic',
    },
];
export const ComponentsNav = [
    {
        icon: 'pe-7s-wallet',
        label: 'Accounts',
        content: [
            {
                label: 'OnBoard Accounts',
                to: '#/accounts/onboard',
            },
            {
                label: 'Financial Footprints',
                to: '#/components/maps',
            },
            {
                label: 'Fin Bot',
                to: '#/accounts/fin-bot',
            },
        ],
    },
    {
        icon: 'lnr-magic-wand',
        label: 'Goals',
        content: [
            {
                label: 'Goals',
                to: '#/components/tabs',
            },
            {
                label: 'Life Cycle Needs',
                to: '#/components/notifications',
            },
            // {
            //     label: 'Modals',
            //     to: '#/components/modals',
            // },
            // {
            //     label: 'Progress Bar',
            //     to: '#/components/progress-bar',
            // },
            // {
            //     label: 'Tooltips & Popovers',
            //     to: '#/components/tooltips-popovers',
            // },
            {
                label: 'Impersonalization',
                to: '#/components/carousel',
            },
        ],
    },
    // {//http://localhost:3001/#/tables/regular-tables
    //     icon: 'pe-7s-display2',
    //     label: 'Regular Tables',
    //     to: '#/tables/regular-tables',
    // },
];
export const FormsNav = [
    {
        icon: 'pe-7s-chat',
        label: 'How we work',
        to: '#/forms/layouts',
    },
];

export const FormsNavTemp = [
    {
        icon: 'pe-7s-comment',
        label: 'Get in Touch',
        to: '#/forms/validation',
    },
];

// for category ?
export const WidgetsNav = [
    {
        icon: 'pe-7s-graph1',
        label: 'Analytics',
        to: '#/widgets/dashboard-boxes',
    },
];
export const ChartsNav = [
    {
        icon: 'pe-7s-graph1',
        label: 'Analytics',
        to: '#/charts/chartjs',
    },
];
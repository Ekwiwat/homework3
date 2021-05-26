import { Menu } from './menu';

export const userMenus: Menu[] = [
    {

        name: 'Commonly Used',
        sub: []
    },
    {

        name: 'Text Editor',
        sub: ['Cursor', 'Find', 'Font', 'Formatting', 'Diff Editor', 'Minimap', 'Suggestions', 'Files']
    },
    {

        name: 'Workbench',
        sub: ['Appearance', 'Breadcrumbs', 'Editor Management', 'Settings Editor', 'Zen Mode', 'Screencast Mode']
    },
    {
        name: 'Window',
        sub: ['Window']

    },
    {

        name: 'Features',
        sub: ['Explorer', 'Search', 'Debug', 'Testing', 'SCM', 'Extensions']
    },
    {

        name: 'Application',
        sub: ['Proxy', 'Keyboard', 'Update', 'Telemetry', 'Setting Sync']

    },
    {

        name: 'Security',
        sub: ['Worlspace']

    },
    {

        name: 'Extensions',
        sub: ['CSS', 'Emmet', 'ESLing']
    },

]
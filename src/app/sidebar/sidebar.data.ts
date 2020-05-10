import { SideBarMenu } from './sidebar-item';

export const sidebarItems: SideBarMenu[] = [
    {
        icon: 'fa fa-home',
        text: 'Tableau de bord',
        link: '/dashboard',
        submenu: [
            {
                icon: 'fa fa-exclamation-circle',
                text: 'Pilotage et Alertes',
                link: 'ii'
            },
            {
                icon: 'fa fa-chart-bar',
                text: 'Statistiques',
                link: '/dashboard/statistics'
            }
        ],
        collapseDefault: true
    },
    {
        icon: 'fa fa-chart-pie',
        text: 'Analyse',
        id: 'analyses',
        submenu: [
            {
                icon: 'fa fa-file-invoice-dollar',
                text: 'Facturation',
                link: 'facturation'
            },
            {
                icon: 'fa fa-donate',
                text: 'Encaissements',
                link: 'encaissements'
            },
            {
                icon: 'fa fa-cash-register',
                text: 'Dépenses',
                link: 'depenses'
            },
            {
                icon: 'fa fa-address-book',
                text: 'Clients et Contrats',
                link: 'clients-et-contrats'
            },
            {
                icon: 'fa fa-building',
                text: 'Patrimoine',
                link: 'patrimoine'
            }
        ],
        collapseDefault: false
    },
    {
        icon: 'fa fa-columns',
        text: 'États',
        id: 'etats',
        submenu: [
            {
                icon: 'fa fa-donate',
                text: 'Encaissements',
                link: 'encaissements'
            },
            {
                icon: 'fa fa-landmark',
                text: 'Arriérés',
                link: 'arrieres'
            },
            {
                icon: 'fa fa-cash-register',
                text: 'Dépenses',
                link: 'depenses'
            },
            {
                icon: 'fa fa-balance-scale-left',
                text: 'Situations des caisses',
                link: 'situations-caisses'
            } 
        ],
        collapseDefault: false
    }
];

// Client cont: Contrats - Clients - 
// Patrimoine: Bien immobilier - Espace Locatif - Proprietaire

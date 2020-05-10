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
        id: 'Analyse',
        submenu: [
            {
                icon: 'fa fa-file-invoice-dollar',
                text: 'Facturation',
                link: '/analyse/billing'
            },
            {
                icon: 'fa fa-donate',
                text: 'Encaissements',
                link: '/analyse/encaissements'
            },
            {
                icon: 'fa fa-cash-register',
                text: 'Dépenses',
                link: '/analyse/expenses'
            },
            {
                icon: 'fa fa-address-book',
                text: 'Clients et Contrats',
                link: '/analyse/customers'
            },
            {
                icon: 'fa fa-building',
                text: 'Patrimoine',
                link: '/analyse/building'
            }
        ],
        collapseDefault: true
    },
    {
        icon: 'fa fa-columns',
        text: 'États',
        id: 'Etats',
        submenu: [
            {
                icon: 'fa fa-donate',
                text: 'Encaissements',
                link: '/etat/encaissements'
            },
            {
                icon: 'fa fa-landmark',
                text: 'Arriérés',
                link: '/etat/arriere'
            },
            {
                icon: 'fa fa-cash-register',
                text: 'Dépenses',
                link: '/etat/depenses'
            },
            {
                icon: 'fa fa-cash-register',
                text: 'Situations des caisses',
                link: '/etat/situations-caisse'
            } 
        ],
        collapseDefault: false
    }
];

// Client cont: Contrats - Clients - 
// Patrimoine: Bien immobilier - Espace Locatif - Proprietaire

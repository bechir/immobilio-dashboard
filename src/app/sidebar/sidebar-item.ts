export interface SideBarMenu {
    icon?: string;
    text: string;
    link?: string;
    id?: string;
    submenu?: SideBarMenuItem[];
    collapseDefault?: boolean;
}

export interface SideBarMenuItem {
    icon?: string;
    text: string;
    link?: string;
}

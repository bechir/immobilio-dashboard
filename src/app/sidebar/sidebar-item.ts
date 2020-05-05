export interface SideBarMenu {
    icon?: string;
    text: string;
    link?: string;
    id?: string;
    submenu?: SideBarMenuItem[];
}

export interface SideBarMenuItem {
    icon?: string;
    text: string;
    link?: string;
}

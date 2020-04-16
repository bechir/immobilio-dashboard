export interface SidebarItem {
    icon?: string;
    text: string;
    link?: string;
    // submenu?: SideBarItem[];
}

export interface SidebarItems {
    [index: string]: SidebarItem;
}

import type { Page } from "../App/app.interface";

export interface SidebarProps {
    readonly currentPage: Page;
    readonly onNavigate: (page: Page) => void;
}

export interface NavItem {
    readonly label: string;
    readonly page: Page;
}
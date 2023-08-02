// SideItem


export type ListData = {
    Icon: JSX.Element,
    isSubMenu: boolean,
    linkGoTo: string,
    subMenus?: ListData[],
    titleItem: string,
}

export interface PropsSideItem {
    listData: ListData
}

// SideBar 

export interface PropsSideBar {
    openSidebar: boolean, setOpenSidebar: (v: boolean) => void
}
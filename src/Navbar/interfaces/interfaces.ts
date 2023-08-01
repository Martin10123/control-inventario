// SideItem


export type ListData = {
    Icon: JSX.Element,
    isSubMenu: boolean,
    linkGoTo: string,
    subMenus?: ListData[],
    titleItem: string,
}

export interface PropsSideBar {
    listData: ListData
}
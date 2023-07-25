// SideBar

export interface SubNamesProp {
    IconSub: JSX.Element;
    linkGoTo: string,
    nameSub: string;
}

export interface PropItem {
    Icon: JSX.Element;
    linkGoTo?: string;
    name: string;
    subNames?: SubNamesProp[];
}


export interface PropsSideBar {
    onCloseSideBar: () => void;
    openSubTitle: boolean;
    setOpenSubTitle: (v: boolean) => void;
    sideItem: PropItem;
}
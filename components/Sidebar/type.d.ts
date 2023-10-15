type SidebarItemProps = {
    item: SidebarItem;
    setSidebarShowing: React.Dispatch<React.SetStateAction<boolean>>;
  };

  type SidebarItem = {
    label: string;
    path?: Url | string;
    icon?: React.ElementType;
    iconhidden?: React.ElementType;
    items?: SidebarItem[];
  };
  
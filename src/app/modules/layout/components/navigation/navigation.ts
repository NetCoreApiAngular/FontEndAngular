import { NavItem } from "./nav.model";


export const navigation: NavItem[] = [
  {
    id: "title",
    title: "Phòng Nhân Sự",
    img: "../../../../../assets/images/logo2.jpg",
    icon: "people",
    type: "group",
    children: [
      {
        id: "category",
        title: "Danh mục",
        img: "../../../../../assets/images/employee.jpg",
        translateKey: "Components.Nav.SidebarNav.Category.Title",
        type: "collapsable",
        isActive: false,
        icon: "../../../../../assets/images/icon-img/backend.png",
        children: [
          {
            id: "Phong-ban",
            title: "Phòng ban",
            translateKey: "Components.Nav.SidebarNav.Category.Children.Department",
            type: "item",
            isActive: false,
            moduleKey: 'Department',
            routerLink: "/Nhon-hoa/Phong-ban",
            icon: "../../../../../assets/images/icon-img/human-resources(1).png",

          }
        ]
      },
    ]
  }

]



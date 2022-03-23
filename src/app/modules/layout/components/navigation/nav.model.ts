import { UserRole } from "src/app/shared/models/user/user.model";

export class NavItem {
  id: string;
  title: string;
  img?: string;
  type: "group" | "collapsable" | "item"| "item-child";
  hidden?: boolean;
  translateKey?: string;
  icon?: string;
  classes?: string;
  routerLink?: string;
  externalUrl?: string;
  openInNewTab?: boolean;
  exactMatch?: boolean;
  function?: any;
  badge?: {
    title?: string;
    translate?: string;
    bg?: string;
    color?: string;
  };
  allowRoles?: UserRole[];
  disabled?: boolean;
  isActive?: boolean;
  children?: NavItem[];
  moduleKey?: any;
}

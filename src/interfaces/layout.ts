import type { MenuProps } from "antd";
import { ReactNode } from "react";

export type MenuItem = Required<MenuProps>["items"][number];

export interface LayoutProps {
    children: ReactNode;
}

import { LayoutProps, MenuItem } from "@/interfaces/layout";
import { Menu } from "antd";
import { useRouter } from "next/router";
import { FunctionComponent, useState } from "react";
import items from "./variables";
import Header from "./header";

const Layout = ({ children }: LayoutProps): JSX.Element => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => setCollapsed(!collapsed);
    const router = useRouter();
    const handleChange = (e: MenuItem) => {
        const url = (e?.key || "/") as string;
        router.push(url);
    };

    return (
        <div style={{ display: "flex" }} className="flex">
            <div
                className="min-h-screen overflow-hidden max-w-64 w-fit"
                style={{ minHeight: "100vh", overflow: "hidden", maxWidth: 256, width: "fit-content" }}
            >
                <Menu
                    mode="inline"
                    theme="dark"
                    items={items}
                    inlineCollapsed={collapsed}
                    className="menu1 h-screen max-h-screen overflow-y-scroll"
                    style={{ height: "100vh", maxHeight: "100vh", overflowY: "scroll" }}
                    onClick={handleChange}
                />
            </div>
            <div>
                <Header toggleCollapsed={toggleCollapsed} collapsed={collapsed} />
                <div>{children}</div>
            </div>
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};

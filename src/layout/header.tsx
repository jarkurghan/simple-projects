import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Header = ({ collapsed, toggleCollapsed }: any): JSX.Element => {
    return (
        <div style={{ display: "flex" }} className="flex">
            <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                <UserOutlined />
            </Button>
        </div>
    );
};

export default Header;

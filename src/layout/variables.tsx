import { MenuItem } from "@/interfaces/layout";
import { ContainerOutlined, HomeOutlined } from "@ant-design/icons";
import { AppstoreOutlined, SolutionOutlined } from "@ant-design/icons";

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: "group"): MenuItem {
    return { key, icon, children, label, type } as MenuItem;
}

const items: MenuItem[] = [
    getItem("Home", "/home", <HomeOutlined />),
    getItem("Messes", "/", <AppstoreOutlined />, [
        getItem("Option 5", "/"),
        getItem("Option 6", "/"),
        getItem("Option 7", "/"),
        getItem("Option 8", "/"),
    ]),
    getItem("Qat", "/qat", <ContainerOutlined />, [
        getItem("Qat", "/qat/qat", null, [
            getItem("11grgrgrwg  wrgrw  twrtrwt", "11grgrgrwg  wrgrw  twrtrwt11grgrgrwg  wrgrw  twrtrwt"),
            getItem("Option 12", "12"),
        ]),
    ]),
    getItem("About", "/about", <SolutionOutlined />),
];

export default items;

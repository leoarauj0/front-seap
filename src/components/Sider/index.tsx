import {
  Button,
  DatePicker,
  version,
  message,
  Layout,
  Menu,
  Breadcrumb,
  Image,
} from "antd";

import { NavLink } from "../Nav/NavLink";

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

export function AddSider() {
  return (
    <>
      <div className="logo" />
      <Image
        width={80}
        src="https://d1fdloi71mui9q.cloudfront.net/ZOqMGEtMRlqPNw6i9U1n_I2A5NYcX4ro4lqo1"
      />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<TeamOutlined />}>
          <NavLink href="/servidor-list" className="nav-color nav-link">
            Listar Servidores
          </NavLink>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <NavLink href="/servidor-add" className="nav-color nav-link">
            Cadastrar Servidores
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3" icon={<PieChartOutlined />}>
          Listar Lotação
        </Menu.Item>
        <Menu.Item key="4" icon={<FileOutlined />}>
          Cadastrar Lotação
        </Menu.Item>
      </Menu>
    </>
  );
}

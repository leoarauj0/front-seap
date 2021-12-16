import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { AddFooter } from "../../components/footer";

import "antd/dist/antd.css";
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
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { ServidorAdd } from "../../components/servidor-add";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AddServidor: NextPage = () => {
  const [aberto, setAberto] = useState();

  const onCollapse = (collapsed: any) => {
    console.log(collapsed);
    setAberto(collapsed);
  };

  const collapsed = aberto;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Image
          width={80}
          src="https://d1fdloi71mui9q.cloudfront.net/ZOqMGEtMRlqPNw6i9U1n_I2A5NYcX4ro4lqo1"
        />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<TeamOutlined />}>
            Listar Servidores
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Cadastrar Servidores
          </Menu.Item>
          <Menu.Item key="3" icon={<PieChartOutlined />}>
            Listar Lotação
          </Menu.Item>
          <Menu.Item key="4" icon={<FileOutlined />}>
            Cadastrar Lotação
          </Menu.Item>
          {/* <SubMenu key="sub1" icon={<DesktopOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
          </SubMenu> */}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <ServidorAdd />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <AddFooter />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AddServidor;

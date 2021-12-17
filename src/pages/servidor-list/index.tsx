import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { AddFooter } from "../../components/Footer";

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

import { ServidorLista } from "../../components/Servidor-list";
import { AddSider } from "../../components/Sider";
import { Nav } from "../../components/Nav";

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
        <AddSider />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Nav />
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <ServidorLista />
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

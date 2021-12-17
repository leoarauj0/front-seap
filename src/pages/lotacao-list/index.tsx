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
  Row,
  Col,
} from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { LotacaoLista } from "../../components/Lotacao-list";
import { LotacaoPesquisa } from "../../components/Lotacao-pesquisa";
import { AddSider } from "../../components/Sider";
import { Nav } from "../../components/Nav";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AddLotacao: NextPage = () => {
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
            <Row>
              <Col span={12}>
                <LotacaoPesquisa />
              </Col>
              <Col span={12}>
                <LotacaoLista />
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <AddFooter />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AddLotacao;

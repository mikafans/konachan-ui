import { PieChartOutlined, UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";

import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import { Outlet, Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem => {
  return {
    key,
    icon,
    label: <Link to={key.toString()}>{label}</Link>,
    children,
  } as MenuItem;
};

const items: MenuItem[] = [
  getItem("Home", "home", <PieChartOutlined rev="ltr" />),
  getItem("Yandere", "yandere", <UserOutlined rev="ltr" />, [
    getItem("Posts", "yandere/posts"),
    getItem("Popular", "yandere/popular"),
    getItem("Tag", "yandere/tag"),
  ]),
  getItem("Konachan", "konachan", <UserOutlined rev="ltr" />),
];

const HypothesisLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        {/* <div className="demo-logo-vertical" /> */}
        <Menu
          theme="dark"
          defaultSelectedKeys={["home"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Idealistic Daydreamer ©2023 Created by{" "}
          <a href="https://github.com/azusachino">azusachino</a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default HypothesisLayout;

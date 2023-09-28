import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, Select } from "antd";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
const { Header, Content, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);

const ShowProductsLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { products } = useParams();
  return (
    <div className="relative">
      <Layout className="min-h-screen">
        <Header
          className="h-40"
          style={{
            display: "flex",
          }}
        >
          <div className="demo-logo" />

          <Menu
            theme="dark"
            mode="horizontal"
            className="h-16"
            defaultSelectedKeys={["2"]}
            items={items1}
          />
        </Header>
        <Layout>
          <Sider
            breakpoint="md"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
                borderRight: 0,
              }}
            >
              <div className="sticky top-0">
                <Menu.Item key="1" className="bg-blue-100 ">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-blue-600 font-bold" : ""
                    }
                    to={`/dashboard`}
                  >
                    <span className="mx-4 text-blue-600">example</span>
                  </NavLink>
                </Menu.Item>
              </div>
            </Menu>
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          >
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
              {/* Content */}
              <Outlet />
              {/* Content */}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default ShowProductsLayout;

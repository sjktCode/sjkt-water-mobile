import { MenuDataItem, ProLayout } from "@ant-design/pro-components";
import { Link, useNavigate, useOutlet } from "react-router-dom";

import { UserOutlined } from "@ant-design/icons";

import { useUserContext } from "@/hooks/userHooks";

import { routes } from "@/routes/menus";

import { AUTH_TOKEN } from "@/utils/constants";

import style from "./index.module.less";

const menuItemRender = (item: MenuDataItem, dom: React.ReactNode) => (
  <Link to={item.path || "/"}>{dom}</Link>
);

/**
 * 外层框架
 */
const Layout = () => {
  const outlet = useOutlet();
  const { store } = useUserContext();
  const nav = useNavigate();

  const logout = () => {
    sessionStorage.setItem(AUTH_TOKEN, "");
    localStorage.setItem(AUTH_TOKEN, "");
    nav("/login");
  };

  return (
    <ProLayout
      layout="mix"
      siderWidth={150}
      avatarProps={{
        src: store.avatar || null,
        title: store.name,
        size: "small",
        icon: <UserOutlined />,
        onClick: logout,
      }}
      title={false}
      logo={
        <img
          src="https://sjkt-water-assets.oss-cn-shanghai.aliyuncs.com/images/henglogo.png"
          alt="logo"
        />
      }
      className={style.container}
      onMenuHeaderClick={() => nav("/")}
      route={{
        path: "/",
        routes,
      }}
      menuItemRender={menuItemRender}
    >
      {outlet}
    </ProLayout>
  );
};

export default Layout;

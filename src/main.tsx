import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ConfigProvider } from "antd-mobile";

import zhCN from "antd-mobile/es/locales/zh-CN";

import { client } from "./utils/apollo.ts";
import StudentInfo from "./components/studentinfo";
import { routes } from "./routes/menus";
import { ROUTE_COMPONENT } from "./routes";
import Login from "./containers/login/index.tsx";
import App from "./App.tsx";
import Register from "./containers/register/index.tsx";
import "./theme.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ConfigProvider locale={zhCN}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <StudentInfo>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<App />}>
              {routes.map((item) => {
                const Component = ROUTE_COMPONENT[item.key];
                return (
                  <Route
                    path={item.path}
                    key={item.key}
                    element={<Component />}
                  />
                );
              })}
            </Route>
          </Routes>
        </StudentInfo>
      </BrowserRouter>
    </ApolloProvider>
  </ConfigProvider>,
);

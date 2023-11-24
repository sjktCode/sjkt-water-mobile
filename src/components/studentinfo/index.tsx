import { DotLoading } from "antd-mobile";

import { IPropChild } from "@/utils/types";
import { connect, useGetStudent } from "@/hooks/userHooks";

/**
 * 获取用户信息组件
 */
const StudentInfo = ({ children }: IPropChild) => {
  const { loading } = useGetStudent();

  if (loading) {
    return <DotLoading />;
  }
  return <div style={{ height: "100vh" }}>{children}</div>;
};

export default connect(StudentInfo);

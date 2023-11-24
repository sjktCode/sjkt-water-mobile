import { useParams } from "react-router-dom";

import { Result } from "antd-mobile";

import { useOrganization } from "@/services/organization";

import Hr from "@/components/hr";

import style from "./index.module.less";
import BaseInfo from "./components/baseinfo";
import DescInfo from "./components/descinfo";
import RecommendProducts from "./components/recommendproducts";

/**
 *
 */
const OrgInfo = () => {
  const { id } = useParams();
  const { data } = useOrganization(id || "");
  if (!data) {
    return (
      <Result status="warning" title="提示" description="没有该门店信息" />
    );
  }
  return (
    <div className={style.container}>
      <BaseInfo data={data} />
      <Hr />
      <DescInfo data={data} />
      <Hr />
      <RecommendProducts orgId={id || ""} />
    </div>
  );
};

export default OrgInfo;

import { Image } from "antd-mobile";

import { IOrganization } from "@/utils/types";

import style from "./index.module.less";

interface IProps {
  data: IOrganization;
}
/**
 * 内容描述信息
 */
const DescInfo = ({ data }: IProps) => (
  <div className={style.container}>
    {data.description}
    <div className={style.imgs}>
      {data.orgOtherImg &&
        data.orgOtherImg.map((item) => (
          <Image src={item.url} alt="其他图片" key={item.id} />
        ))}
    </div>
  </div>
);

export default DescInfo;

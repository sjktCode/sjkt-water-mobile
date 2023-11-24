import { useParams } from "react-router-dom";

import { useMemo } from "react";

import { Result } from "antd-mobile";

import Hr from "@/components/hr";

import { TCourse } from "@/utils/types";

import { useProductInfo } from "@/services/product";

import style from "./index.module.less";
import BaseInfo from "./components/baseinfo";
import CourseInfo from "./components/courseinfo";
import BuyBottom from "./components/buybottom";

/**
 *
 */
const ProductInfo = () => {
  const { id } = useParams();
  const { data } = useProductInfo(id || "");
  const courses = useMemo(() => {
    const cs: Record<string, TCourse> = {};
    data?.cards?.forEach((item) => {
      cs[item.course.id] = {
        ...item.course,
        cardName: cs[item.course.id]
          ? `${cs[item.course.id].cardName} / ${item.name}`
          : item.name,
      };
    });
    return Object.values(cs);
  }, [data?.cards]);

  if (!data) {
    return (
      <Result status="warning" title="提示" description="没有该商品信息" />
    );
  }
  return (
    <div className={style.container}>
      <BaseInfo data={data} />
      <Hr />
      <CourseInfo data={courses} />
      <BuyBottom data={data} />
    </div>
  );
};

export default ProductInfo;

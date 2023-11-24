import { ErrorBlock, Grid, InfiniteScroll, PullToRefresh } from "antd-mobile";

import { useProducts } from "@/services/product";

import { ROUTE_KEY } from "@/routes/menus";

import { useGoTo } from "@/hooks";

import ProductCard from "../productcard";

import style from "./index.module.less";

interface IProps {
  name: string; // 搜索的关键字
  type: string; // 商品分类
}

/**
 * 商品列表
 */
const ProductList = ({ name, type }: IProps) => {
  const { data, onRefresh, hasMore, loadMore } = useProducts(name, type);
  const { go } = useGoTo();
  if (data && data.length === 0) {
    return <ErrorBlock status="empty" />;
  }
  const goProductInfo = (id: string) => {
    go(ROUTE_KEY.PRODUCT_INFO, { id });
  };
  return (
    <div className={style.container} style={{ touchAction: "auto" }}>
      <PullToRefresh onRefresh={onRefresh}>
        <Grid columns={2} gap={10}>
          {data?.map((item) => (
            <Grid.Item key={item.id} onClick={() => goProductInfo(item.id)}>
              <ProductCard data={item} />
            </Grid.Item>
          ))}
        </Grid>
      </PullToRefresh>
      <InfiniteScroll hasMore={hasMore} loadMore={loadMore} />
    </div>
  );
};

export default ProductList;

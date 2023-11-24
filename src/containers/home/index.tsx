import { SearchBar } from "antd-mobile";

import { useState } from "react";

import styles from "./index.module.less";
import TypeSelect from "./components/typeselect";
import ProductList from "./components/productlist";

/**
 *
 */
const Home = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const onSearchHandler = (val: string) => {
    setName(val);
  };
  const onTypeChangeHandler = (key: string) => {
    setType(key);
  };

  return (
    <div className={styles.container}>
      <SearchBar placeholder="搜索课程试试" onSearch={onSearchHandler} />
      <TypeSelect onChange={onTypeChangeHandler} />
      <ProductList name={name} type={type} />
    </div>
  );
};

export default Home;

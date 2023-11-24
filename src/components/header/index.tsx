import { LeftOutline } from "antd-mobile-icons";

import classNames from "classnames";

import { useGoTo, useMatchedRoute, useTitle } from "@/hooks";

import styles from "./index.module.less";

/**
 *
 */
const Header = () => {
  const route = useMatchedRoute();
  useTitle(route?.name ? route?.name : "");
  const { back } = useGoTo();
  // 回退
  const onClickHandler = () => {
    back();
  };

  // 只有有header隐藏标记的页面才需要隐藏
  if (route?.hideHeader) {
    return null;
  }

  return (
    <div
      className={classNames({
        [styles.containerLarge]: route?.isMenu,
        [styles.containerSmall]: !route?.isMenu,
      })}
    >
      {!route?.isMenu && (
        <LeftOutline className={styles.back} onClick={onClickHandler} />
      )}
      <div className={styles.title}>{route?.name}</div>
    </div>
  );
};

export default Header;

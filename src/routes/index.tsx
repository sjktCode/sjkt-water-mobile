import Home from "@/containers/home";

import Me from "@/containers/me";

import OrgInfo from "@/containers/orginfo";

import ProductInfo from "@/containers/productinfo";

import Buy from "@/containers/buy";

import EditInfo from "@/containers/editInfo";

import OrderCourse from "@/containers/ordercourse";
import MyCard from "@/containers/mycard";
import MyCourse from "@/containers/mycourse";

import { ROUTE_KEY } from "./menus";

export const ROUTE_COMPONENT = {
  [ROUTE_KEY.HOME]: Home,
  [ROUTE_KEY.ME]: Me,
  [ROUTE_KEY.ORG_INFO]: OrgInfo,
  [ROUTE_KEY.PRODUCT_INFO]: ProductInfo,
  [ROUTE_KEY.BUY]: Buy,
  [ROUTE_KEY.EDIT_INFO]: EditInfo,
  [ROUTE_KEY.ORDER_COURSE]: OrderCourse,
  [ROUTE_KEY.MY_CARD]: MyCard,
  [ROUTE_KEY.MY_COURSE]: MyCourse,
};

import { useQuery } from "@apollo/client";

import { useLocation, useNavigate } from "react-router-dom";

import { GET_STUDENT_INFO } from "@/graphql/user";

import { connectFactory, useAppContext } from "../utils/contextFactory";
import { IStudent } from "../utils/types";

const KEY = "studentInfo";
const DEFAULT_VALUE = {};
export const useUserContext = () => useAppContext<IStudent>(KEY);
export const connect = connectFactory(KEY, DEFAULT_VALUE);
export const useGetStudent = () => {
  const { setStore } = useUserContext();
  const nav = useNavigate();
  const location = useLocation();

  const handleCompleted = (data: { getStudentInfo: { data: IStudent } }) => {
    if (data.getStudentInfo) {
      const { id, name, tel, avatar, openid } = data.getStudentInfo.data;
      console.log("getStudentInfo", "getStudentInfo");
      setStore({
        id,
        name,
        tel,
        avatar,
        openid,
        refetchHandler: refreshQuery,
      });
      // 当前在登录页面，且已经登录了，那就直接跳到首页
      if (location.pathname === "/login") {
        nav("/");
      }
      return;
    }
    console.log("onCompleted", "onCompleted");
    setStore({ refetchHandler: refreshQuery });
    if (location.pathname !== "/login") {
      nav(`/login?orgUrl=${location.pathname}`);
    }
  };
  const { loading, refetch } = useQuery<{ getStudentInfo: { data: IStudent } }>(
    GET_STUDENT_INFO,
    {
      onCompleted: (data) => {
        handleCompleted(data);
      },
      onError: () => {
        console.log("onError", "onError");
        setStore({ refetchHandler: refreshQuery });
        if (location.pathname !== "/login") {
          nav(`/login?orgUrl=${location.pathname}`);
        }
      },
    },
  );
  const refreshQuery = () => {
    refetch().then((data) => {
      handleCompleted(data.data);
    });
  };
  return { loading };
};

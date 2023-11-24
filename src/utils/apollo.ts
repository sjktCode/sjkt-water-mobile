import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error"; // 引入onError
import { Toast } from "antd-mobile";

import { AUTH_TOKEN } from "./constants";

const httpLink = createHttpLink({
  uri: "https://morally-settling-tiger.ngrok-free.app/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    Toast.show({
      content: "请求参数或者返回的数据格式不对",
    });
    graphQLErrors.forEach((item) => {
      if (item.message === "Unauthorized") {
        Toast.clear();
        Toast.show({
          content: "登录失效，请登录",
        });
      }
    });
  }
  if (networkError) {
    Toast.clear();
    Toast.show({
      content: networkError.message,
    });
  }
});

export const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
    },
  },
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

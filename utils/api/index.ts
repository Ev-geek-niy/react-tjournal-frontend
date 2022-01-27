import { GetServerSidePropsContext, NextPageContext } from "next";
import axios from "axios";
import Cookies, { parseCookies } from "nookies";
import { UserApi } from "./user";
import { PostApi } from "./post";

class ApiReturnType {
  user: ReturnType<typeof UserApi>;
  post: ReturnType<typeof PostApi>;
}

export const Api = (
  ctx?: NextPageContext | GetServerSidePropsContext
): ApiReturnType => {
  const cookies = ctx ? Cookies.get(ctx) : parseCookies();
  const token = cookies.authToken;

  const instance = axios.create({
    baseURL: "http://localhost:7777",
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  return {
    user: UserApi(instance),
    post: PostApi(instance),
  };
};

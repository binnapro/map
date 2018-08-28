import Cookie from "js-cookie";
import axios from "axios";
import config from "./config";
import { message } from "antd";
const baseURL = config.get("host");

export function post(url, body) {
  return new Promise(function(resolve, reject) {
    axios
      .create({
        baseURL: baseURL,
        timeout: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Token": Cookie.get("token")
        }
      })
      .post(url, body)
      .then(response => {
        let res = response.data;
        if (res.status === 200) {
          resolve(res.data);
        } else {
          if (typeof res.message === "string") message.error(res.message);
          else {
            for (let i in res.message) {
              message.error(res.message[i][0]);
              break;
            }
          }
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}

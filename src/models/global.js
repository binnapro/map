import {} from "../utils/api.js";
import { message } from "antd";

export default {
  namespace: "global",
  state: {},
  effects: {
    *judge(params, { call, put }) {}
  },
  reducers: {
    set(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  }
};

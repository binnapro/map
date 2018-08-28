const value = {
  host: window.location.origin
};
const AppConfig = {
  get: params => {
    return value[params];
  },
  set: (params, data) => {
    value[params] = data;
  }
};

export default AppConfig;

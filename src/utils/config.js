const value = {
  host:
    window.location.origin.split(":")[2] === "3000"
      ? "http://test.teacher.applan.org/"
      : window.location.origin + "/"
};
console.log(process);
const AppConfig = {
  get: params => {
    return value[params];
  },
  set: (params, data) => {
    value[params] = data;
  }
};

export default AppConfig;

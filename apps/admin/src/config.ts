export const IS_DEV = import.meta.env.DEV;

export const apps = {
  home: {
    name: "home",
    origin: "http://localhost:5000",
    basePath: "/home/",
  },
  login: {
    name: "login",
    origin: "http://localhost:7000",
    basePath: "/login/",
  },
  static: {
    name: "static",
    origin: "http://localhost:9000",
    basePath: "/admin-about/",
  },
};

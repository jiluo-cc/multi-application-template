import ReactDOM from "react-dom/client";
import microApp from "@micro-zoe/micro-app";
import App from "./App";
import { viteDevLoader } from "@local/micro-app-tools";
import { apps } from "./config";

microApp.start();

if (import.meta.env.DEV) {
  microApp.plugins = {
    modules: {
      [apps.home.name]: [viteDevLoader(apps.home.origin, apps.home.basePath)],
    },
  };
}

ReactDOM.createRoot(document.getElementById("main-root")!).render(<App />);

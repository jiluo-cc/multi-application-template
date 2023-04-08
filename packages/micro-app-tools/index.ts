/// <reference types="vite/client" />

export const viteDevLoader = (host: string, routePath: string) => ({
  loader(code: string) {
    if (import.meta.env.PROD) {
      return code;
    }
    return code.replace(
      new RegExp(`(from|import)(\\s*['\"])(${routePath})`, "g"),
      (all) => all.replace(routePath, host + routePath)
    );
  },
});

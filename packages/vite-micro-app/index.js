// ts-ignore
const { join } = require("node:path");
const { writeFileSync } = require("node:fs");
const { log } = require("node:console");

const viteMicroApp = () => {
  let basePath = "";
  return {
    name: "vite:micro-app",
    apply: "build",
    configResolved(config) {
      basePath = `${config.base}${config.build.assetsDir}/`;
    },
    writeBundle(options, bundle) {
      for (const chunkName in bundle) {
        if (Object.prototype.hasOwnProperty.call(bundle, chunkName)) {
          const chunk = bundle[chunkName];
          if (chunk.fileName?.endsWith(".js")) {
            chunk.code = chunk.code.replace(
              /(from|import\()(\s*['"])(\.\.?\/)/g,
              (all, $1, $2, $3) => {
                return all.replace($3, new URL($3, basePath));
              }
            );
            const fullPath = join(options.dir, chunk.fileName);
            writeFileSync(fullPath, chunk.code);
          }
        }
      }
    },
  };
};

module.exports = viteMicroApp;

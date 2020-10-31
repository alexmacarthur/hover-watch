const pkg = require("./package.json");
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";

const isProduction = process.env.NODE_ENV === "production";

const preamble = `/**
  * ProbaClick (v${pkg.version})
  * Author: ${pkg.author}
  * License: ${pkg.license}
  * URL: ${pkg.homepage}
  */`;

const OUTPUT_DATA = [
  {
    file: pkg.main,
    format: "umd",
  },
  {
    file: pkg.module,
    format: "es",
  },
];

export default OUTPUT_DATA.map(({ file, format }) => {
  let plugins = [
    babel({
      exclude: "node_modules/*",
      presets: [
        [
          "@babel/preset-env",
          {
            modules: false,
            targets:
              format === "es"
                ? { esmodules: true }
                : {
                    browsers: [
                      "> 2%",
                      "Last 2 versions",
                      "safari >=9",
                      "not ie < 11",
                    ],
                  },
          },
        ],
      ],
      plugins: [],
    }),
  ];

  if (isProduction) {
    plugins.push(
      terser({
        output: {
          preamble,
        },
      })
    );
  }

  return {
    input: "./src/probaclick.js",
    output: {
      file,
      format,
      name: "ProbaClick",
    },
    plugins,
  };
});

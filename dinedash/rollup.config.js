import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import url from "@rollup/plugin-url";

export default {
  input: "src/main.jsx", // Set the entry point to main.jsx
  output: {
    file: "dist/bundle.js", // Output file location
    format: "cjs", // CommonJS format
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: ["@babel/preset-react"], // Handle JSX in your App
    }),
    postcss(),
    url({
      include: ["**/*.svg", "**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.gif"],
      limit: 8192,
      emitFiles: true,
    }),
  ],
};

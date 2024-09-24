import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.js", // Change this to your actual entry file
  output: {
    file: "dist/bundle.js", // Change this to your desired output file location
    format: "cjs", // Could also use 'esm', 'iife', or 'umd' based on needs
    sourcemap: true, // Optional, useful for debugging
  },
  plugins: [
    resolve(), // Helps Bundling Node Modules
    commonjs(), // Converts CommonJS to ESModules
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**", // Only transpile our code
      presets: ["@babel/preset-react"], // React JSX compilation
    }),
  ],
};

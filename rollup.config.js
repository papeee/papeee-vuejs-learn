import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { rollup } from "rollup";
import { terser } from "rollup-plugin-terser";

export default {
    input: './src/main.js',
    output: {
        file: './build/bundle.min.js',
        format: 'iife',
        name: 'bundle',
        globals: {
          'lodash': '_',
      }
    },
    
    plugins: [
        resolve(),
        commonjs(),
        terser()
    ]
}
rollup({
  input: "./src/main.js",
  plugins: [terser()]
});

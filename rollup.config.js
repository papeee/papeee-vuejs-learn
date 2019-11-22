import vue from 'rollup-plugin-vue';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import less from 'rollup-plugin-less';
import buble from 'rollup-plugin-buble';
//import browsersync from 'rollup-plugin-browsersync';
//import { terser } from "rollup-plugin-terser";

export default {
    input: './src/main.js',
    output: {
        file: './build/bundle.min.js',
        format: 'iife',
        name: 'bundle',
        globals: {
          'lodash': '_'
      }
    },
        
    plugins: [
        vue({'css':'none'}),
        less({output: "dist/minstyle.css"}),
        buble({exclude: 'node_modules/**'}),
        resolve(),
        commonjs(),
        replace({
          'process.env.NODE_ENV': JSON.stringify( 'production' )
        }) 
    ]
}


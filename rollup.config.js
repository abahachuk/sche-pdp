import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  // If using any exports from a symlinked project, uncomment the following:
  // preserveSymlinks: true,
  input: 'src/index.js',
  output: {
    file: 'build/index.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      presets: [
        [
          '@babel/preset-env',
          {
            "modules": false,
            "targets": {
              "ie": "11"
            },
            "useBuiltIns": "usage"
          }
        ]
      ]
    })
  ]
};

export default {
  input: 'dist/es6/dotnet-profile.js', // rollup requires ES input
  output: {
    format: 'umd',
    name: '@yellicode/dotnet-profile',
    file: 'dist/bundles/dotnet-profile.umd.js'
  },
  external: [] // https://github.com/rollup/rollup/wiki/Troubleshooting#treating-module-as-external-dependency
}

import { chromeExtension } from 'rollup-plugin-chrome-extension';

export default (async () => {
  return {
    input: 'src/manifest.json',
    output: {
      dir: 'build',
      format: 'esm',
      sourcemap: 'inline',
    },
    plugins: [
      chromeExtension(),
    ],
  };
})();

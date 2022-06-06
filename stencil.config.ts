import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import { inlineSvg } from 'stencil-inline-svg';

export const config: Config = {
  namespace: 'gcds',
  globalStyle: 'src/styles/global.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    }
  ],
  plugins: [
    postcss({
      plugins: [
        require('postcss-nested'),
        require('cssnano')
      ]
    }),
    inlineSvg()
  ],
  testing: {
    transform: {
      '^.+\\.(ts|tsx|js|jsx|css)$': "@stencil/core/testing/jest-preprocessor"
    },
  },
  buildEs5: 'prod'
};

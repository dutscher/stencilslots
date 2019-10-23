import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'slots',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  bundles: [
    { components: ['my-parent', 'my-parent-workaround', 'my-child'] },
  ]
};

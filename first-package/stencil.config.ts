import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'first-package',
  bundles: [
		{ components: ['my-component'] },
  ],
  outputTargets: [
		{
			type: 'www',
			serviceWorker: null
		}
	],
  devServer: {
		reloadStrategy: 'pageReload'
	},
};

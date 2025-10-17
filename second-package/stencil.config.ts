import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'second-package',
  bundles: [
		{ components: ['my-second-component'] },
  ],
  outputTargets: [
		{
			type: 'dist',
			esmLoaderPath: '../loader'
		},
		{
			type: 'dist-custom-elements',
			externalRuntime: false,
			includeGlobalScripts: false
		}
  ],
  devServer: {
		reloadStrategy: 'pageReload'
	},
};

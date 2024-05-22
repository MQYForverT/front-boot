import react from '@vitejs/plugin-react-swc'
import type { UserConfig } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import { reactClickToComponent } from 'vite-plugin-react-click-to-component'

import { setupVitePlugins, setupViteResolve, setupViteServer, setupViteTest } from '../common'

export default (viteEnv: ImportMetaEnv, customConfig?: UserConfig): UserConfig => {
	const { server, resolve, plugins = [], ...config } = customConfig ?? {}
	return {
		// 开发服务器选项
		server: {
			...setupViteServer(),
			...server,
		},
		resolve: {
			...setupViteResolve(),
			...resolve,
		},
		plugins: [
			...setupVitePlugins(viteEnv),
			react(),
			// 通过 【option/alt】 + 鼠标右键 可以查看组件信息，及打开组件
			reactClickToComponent(),
			AutoImport({
				imports: ['react', 'ahooks', 'vitest'],
			}),
			...plugins,
		],
		test: setupViteTest(),
		...config,
	}
}
